import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useDiagnosis } from '../context/DiagnosisContext';
import ProgressBar from '../components/diagnosis/ProgressBar';
import SymptomSelector from '../components/diagnosis/SymptomSelector';
import GeneticMarkers from '../components/diagnosis/GeneticMarkers';
import Demographics from '../components/diagnosis/Demographics';
import Button from '../components/ui/Button';

const DiagnosisPage: React.FC = () => {
  const { state, dispatch, generateResults } = useDiagnosis();

  const steps = ['Symptoms', 'Genetic Markers', 'Demographics'];
  const totalSteps = steps.length;

  const canProceed = () => {
    switch (state.currentStep) {
      case 1:
        return state.diagnosisData.selectedSymptoms.length > 0;
      case 2:
        return true; // Genetic markers are optional
      case 3:
        return state.diagnosisData.age && state.diagnosisData.gender;
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (state.currentStep < totalSteps) {
      dispatch({ type: 'SET_STEP', payload: state.currentStep + 1 });
    } else {
      generateResults();
    }
  };

  const handlePrevious = () => {
    if (state.currentStep > 1) {
      dispatch({ type: 'SET_STEP', payload: state.currentStep - 1 });
    }
  };

  const renderCurrentStep = () => {
    switch (state.currentStep) {
      case 1:
        return <SymptomSelector />;
      case 2:
        return <GeneticMarkers />;
      case 3:
        return <Demographics />;
      default:
        return null;
    }
  };

  if (state.isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Analyzing Your Data</h2>
          <p className="text-gray-600">
            Processing symptoms, genetic markers, and demographics to generate diagnostic insights...
          </p>
          <div className="mt-6 bg-blue-50 rounded-lg p-4 max-w-md mx-auto">
            <p className="text-sm text-blue-800">
              This may take a few moments as we cross-reference your information 
              with our extensive rare disease database.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Diagnostic Assessment
            </h1>
            <p className="text-gray-600">
              Complete all steps to generate comprehensive diagnostic insights.
            </p>
          </div>

          {/* Progress Bar */}
          <ProgressBar
            currentStep={state.currentStep}
            totalSteps={totalSteps}
            stepLabels={steps}
          />

          {/* Current Step Content */}
          <div className="mb-8">
            {renderCurrentStep()}
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-6 border-t border-gray-200">
            <div>
              {state.currentStep > 1 && (
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                  className="flex items-center space-x-2"
                >
                  <ArrowLeft className="h-4 w-4" />
                  <span>Previous</span>
                </Button>
              )}
            </div>

            <div className="flex items-center space-x-4">
              {/* Step Indicator */}
              <span className="text-sm text-gray-500">
                {state.currentStep} of {totalSteps}
              </span>

              {/* Next/Analyze Button */}
              <Button
                onClick={handleNext}
                disabled={!canProceed()}
                className="flex items-center space-x-2"
              >
                <span>
                  {state.currentStep === totalSteps ? 'Generate Results' : 'Next'}
                </span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Help Text */}
          <div className="mt-6 bg-blue-50 rounded-lg p-4">
            <p className="text-sm text-blue-800">
              <strong>Need help?</strong> Each step builds on the previous to create 
              a comprehensive diagnostic profile. All information is processed locally 
              and never transmitted to external servers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiagnosisPage;