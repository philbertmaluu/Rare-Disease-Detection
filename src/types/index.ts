export interface Symptom {
  id: string;
  name: string;
  category: string;
  severity: 'mild' | 'moderate' | 'severe';
}

export interface Disease {
  id: string;
  name: string;
  description: string;
  symptoms: string[];
  prevalence: string;
  rarity: 'ultra-rare' | 'rare' | 'very-rare';
  geneticMarkers?: string[];
  ageGroup: string[];
  moreInfo: string;
}

export interface DiagnosisData {
  selectedSymptoms: string[];
  geneticMarkers: string;
  age: string;
  gender: string;
  familyHistory: string[];
}

export interface DiagnosisResult {
  disease: Disease;
  confidence: number;
  matchingSymptoms: string[];
  riskFactors: string[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  currentDiagnosis?: DiagnosisData;
  diagnosisHistory: DiagnosisResult[][];
}