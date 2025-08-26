import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { DiagnosisData, DiagnosisResult, Disease } from '../types';
import { diseases } from '../data/diseases';
import { symptoms } from '../data/symptoms';

interface DiagnosisState {
  currentStep: number;
  diagnosisData: DiagnosisData;
  results: DiagnosisResult[];
  isLoading: boolean;
  error: string | null;
}

type DiagnosisAction =
  | { type: 'SET_STEP'; payload: number }
  | { type: 'UPDATE_SYMPTOMS'; payload: string[] }
  | { type: 'UPDATE_GENETIC_MARKERS'; payload: string }
  | { type: 'UPDATE_DEMOGRAPHICS'; payload: Partial<DiagnosisData> }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_RESULTS'; payload: DiagnosisResult[] }
  | { type: 'SET_ERROR'; payload: string | null }
  | { type: 'RESET_DIAGNOSIS' }
  | { type: 'LOAD_FROM_STORAGE'; payload: DiagnosisState };

const initialState: DiagnosisState = {
  currentStep: 1,
  diagnosisData: {
    selectedSymptoms: [],
    geneticMarkers: '',
    age: '',
    gender: '',
    familyHistory: [],
  },
  results: [],
  isLoading: false,
  error: null,
};

const diagnosisReducer = (state: DiagnosisState, action: DiagnosisAction): DiagnosisState => {
  switch (action.type) {
    case 'SET_STEP':
      return { ...state, currentStep: action.payload };
    case 'UPDATE_SYMPTOMS':
      return {
        ...state,
        diagnosisData: { ...state.diagnosisData, selectedSymptoms: action.payload },
      };
    case 'UPDATE_GENETIC_MARKERS':
      return {
        ...state,
        diagnosisData: { ...state.diagnosisData, geneticMarkers: action.payload },
      };
    case 'UPDATE_DEMOGRAPHICS':
      return {
        ...state,
        diagnosisData: { ...state.diagnosisData, ...action.payload },
      };
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    case 'SET_RESULTS':
      return { ...state, results: action.payload, isLoading: false };
    case 'SET_ERROR':
      return { ...state, error: action.payload, isLoading: false };
    case 'RESET_DIAGNOSIS':
      return initialState;
    case 'LOAD_FROM_STORAGE':
      return action.payload;
    default:
      return state;
  }
};

const DiagnosisContext = createContext<{
  state: DiagnosisState;
  dispatch: React.Dispatch<DiagnosisAction>;
  generateResults: () => void;
  saveToStorage: () => void;
  loadFromStorage: () => void;
} | null>(null);

export const DiagnosisProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(diagnosisReducer, initialState);

  // Calculate diagnosis results based on symptom matching and other factors
  const generateResults = () => {
    dispatch({ type: 'SET_LOADING', payload: true });
    
    setTimeout(() => {
      const { selectedSymptoms, geneticMarkers, age } = state.diagnosisData;
      
      const results: DiagnosisResult[] = diseases
        .map((disease) => {
          const matchingSymptoms = disease.symptoms.filter((symptomId) =>
            selectedSymptoms.includes(symptomId)
          );
          
          const symptomMatchRatio = matchingSymptoms.length / disease.symptoms.length;
          const selectedSymptomRatio = matchingSymptoms.length / selectedSymptoms.length;
          
          // Base confidence on symptom matching
          let confidence = (symptomMatchRatio * 0.6 + selectedSymptomRatio * 0.4) * 100;
          
          // Boost confidence for genetic marker matches
          if (geneticMarkers && disease.geneticMarkers) {
            const hasGeneticMatch = disease.geneticMarkers.some(marker =>
              geneticMarkers.toLowerCase().includes(marker.toLowerCase().split(' ')[0])
            );
            if (hasGeneticMatch) confidence += 15;
          }
          
          // Age group matching
          if (age && disease.ageGroup.includes(age)) {
            confidence += 10;
          }
          
          // Cap confidence at 95% to maintain realism
          confidence = Math.min(confidence, 95);
          
          const riskFactors = [];
          if (disease.geneticMarkers) riskFactors.push('Genetic predisposition');
          if (age && disease.ageGroup.includes(age)) riskFactors.push('Age group match');
          if (matchingSymptoms.length > 3) riskFactors.push('Multiple symptom match');
          
          return {
            disease,
            confidence: Math.round(confidence),
            matchingSymptoms: matchingSymptoms,
            riskFactors,
          };
        })
        .filter((result) => result.confidence > 20)
        .sort((a, b) => b.confidence - a.confidence)
        .slice(0, 5);
      
      dispatch({ type: 'SET_RESULTS', payload: results });
    }, 2000); // Simulate processing time
  };

  const saveToStorage = () => {
    localStorage.setItem('diagnosisState', JSON.stringify(state));
  };

  const loadFromStorage = () => {
    const saved = localStorage.getItem('diagnosisState');
    if (saved) {
      try {
        const parsedState = JSON.parse(saved);
        dispatch({ type: 'LOAD_FROM_STORAGE', payload: parsedState });
      } catch (error) {
        console.error('Failed to load from storage:', error);
      }
    }
  };

  useEffect(() => {
    loadFromStorage();
  }, []);

  useEffect(() => {
    if (state.currentStep > 1) {
      saveToStorage();
    }
  }, [state]);

  return (
    <DiagnosisContext.Provider
      value={{
        state,
        dispatch,
        generateResults,
        saveToStorage,
        loadFromStorage,
      }}
    >
      {children}
    </DiagnosisContext.Provider>
  );
};

export const useDiagnosis = () => {
  const context = useContext(DiagnosisContext);
  if (!context) {
    throw new Error('useDiagnosis must be used within a DiagnosisProvider');
  }
  return context;
};