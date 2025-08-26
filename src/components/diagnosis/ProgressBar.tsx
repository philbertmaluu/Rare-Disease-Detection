import React from 'react';
import { Check } from 'lucide-react';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  stepLabels: string[];
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, totalSteps, stepLabels }) => {
  return (
    <div className="w-full mb-8">
      <div className="flex items-center justify-between">
        {Array.from({ length: totalSteps }, (_, index) => {
          const stepNumber = index + 1;
          const isCompleted = stepNumber < currentStep;
          const isCurrent = stepNumber === currentStep;
          const isLast = index === totalSteps - 1;

          return (
            <div key={stepNumber} className="flex items-center">
              {/* Step Circle */}
              <div className="flex items-center">
                <div
                  className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-colors ${
                    isCompleted
                      ? 'bg-green-600 border-green-600 text-white'
                      : isCurrent
                      ? 'bg-blue-600 border-blue-600 text-white'
                      : 'bg-white border-gray-300 text-gray-500'
                  }`}
                >
                  {isCompleted ? (
                    <Check className="w-5 h-5" />
                  ) : (
                    <span className="text-sm font-semibold">{stepNumber}</span>
                  )}
                </div>
                
                {/* Step Label */}
                <div className="ml-3 hidden sm:block">
                  <div
                    className={`text-sm font-medium ${
                      isCompleted || isCurrent ? 'text-gray-900' : 'text-gray-500'
                    }`}
                  >
                    {stepLabels[index]}
                  </div>
                </div>
              </div>

              {/* Connector Line */}
              {!isLast && (
                <div
                  className={`flex-1 h-0.5 mx-4 transition-colors ${
                    isCompleted ? 'bg-green-600' : 'bg-gray-300'
                  }`}
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Mobile Step Labels */}
      <div className="sm:hidden mt-4 text-center">
        <div className="text-sm font-medium text-gray-900">
          {stepLabels[currentStep - 1]}
        </div>
        <div className="text-xs text-gray-500 mt-1">
          Step {currentStep} of {totalSteps}
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;