import React from 'react';
import { User, Calendar, Users, AlertTriangle } from 'lucide-react';
import { useDiagnosis } from '../../context/DiagnosisContext';
import Card from '../ui/Card';

const Demographics: React.FC = () => {
  const { state, dispatch } = useDiagnosis();

  const updateDemographics = (field: string, value: string | string[]) => {
    dispatch({
      type: 'UPDATE_DEMOGRAPHICS',
      payload: { [field]: value }
    });
  };

  const handleFamilyHistoryChange = (condition: string, checked: boolean) => {
    const current = state.diagnosisData.familyHistory || [];
    const updated = checked
      ? [...current, condition]
      : current.filter(c => c !== condition);
    updateDemographics('familyHistory', updated);
  };

  const ageRanges = [
    '0-5', '6-12', '13-18', '19-29', '30-39', 
    '40-49', '50-59', '60-69', '70-79', '80+'
  ];

  const genderOptions = [
    'Male', 'Female', 'Other', 'Prefer not to say'
  ];

  const familyConditions = [
    'Cancer', 'Heart Disease', 'Diabetes', 'Neurological Disorders',
    'Mental Health Conditions', 'Autoimmune Disorders', 'Genetic Disorders',
    'Kidney Disease', 'Lung Disease', 'Blood Disorders'
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Demographics & History
        </h2>
        <p className="text-gray-600">
          Provide demographic information and family medical history to enhance diagnostic accuracy.
        </p>
      </div>

      {/* Age Selection */}
      <Card>
        <Card.Header>
          <div className="flex items-center space-x-2">
            <Calendar className="h-5 w-5 text-blue-600" />
            <h3 className="text-lg font-semibold text-gray-900">Age Range</h3>
          </div>
        </Card.Header>
        <Card.Content>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {ageRanges.map(range => (
              <button
                key={range}
                onClick={() => updateDemographics('age', range)}
                className={`p-3 text-center border rounded-lg transition-colors ${
                  state.diagnosisData.age === range
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                }`}
              >
                {range} years
              </button>
            ))}
          </div>
          {!state.diagnosisData.age && (
            <p className="text-sm text-yellow-600 mt-2 flex items-center">
              <AlertTriangle className="h-4 w-4 mr-1" />
              Please select an age range
            </p>
          )}
        </Card.Content>
      </Card>

      {/* Gender Selection */}
      <Card>
        <Card.Header>
          <div className="flex items-center space-x-2">
            <User className="h-5 w-5 text-blue-600" />
            <h3 className="text-lg font-semibold text-gray-900">Gender</h3>
          </div>
        </Card.Header>
        <Card.Content>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {genderOptions.map(gender => (
              <button
                key={gender}
                onClick={() => updateDemographics('gender', gender)}
                className={`p-3 text-center border rounded-lg transition-colors ${
                  state.diagnosisData.gender === gender
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                }`}
              >
                {gender}
              </button>
            ))}
          </div>
          {!state.diagnosisData.gender && (
            <p className="text-sm text-yellow-600 mt-2 flex items-center">
              <AlertTriangle className="h-4 w-4 mr-1" />
              Please select a gender option
            </p>
          )}
        </Card.Content>
      </Card>

      {/* Family History */}
      <Card>
        <Card.Header>
          <div className="flex items-center space-x-2">
            <Users className="h-5 w-5 text-blue-600" />
            <h3 className="text-lg font-semibold text-gray-900">Family Medical History</h3>
          </div>
          <p className="text-sm text-gray-600 mt-1">
            Select any conditions that run in the patient's family (parents, siblings, grandparents)
          </p>
        </Card.Header>
        <Card.Content>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {familyConditions.map(condition => (
              <label
                key={condition}
                className="flex items-center space-x-3 cursor-pointer group"
              >
                <input
                  type="checkbox"
                  checked={state.diagnosisData.familyHistory?.includes(condition) || false}
                  onChange={(e) => handleFamilyHistoryChange(condition, e.target.checked)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                  {condition}
                </span>
              </label>
            ))}
          </div>
          
          {state.diagnosisData.familyHistory && state.diagnosisData.familyHistory.length > 0 && (
            <div className="mt-4 p-3 bg-blue-50 rounded-lg">
              <p className="text-sm font-medium text-blue-900 mb-1">
                Selected Family History:
              </p>
              <div className="flex flex-wrap gap-2">
                {state.diagnosisData.familyHistory.map(condition => (
                  <span
                    key={condition}
                    className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                  >
                    {condition}
                  </span>
                ))}
              </div>
            </div>
          )}
        </Card.Content>
      </Card>

      {/* Summary */}
      <Card className="bg-gray-50">
        <Card.Header>
          <h3 className="text-lg font-semibold text-gray-900">Summary</h3>
        </Card.Header>
        <Card.Content>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div>
              <span className="font-medium text-gray-700">Age:</span>
              <div className="text-gray-600 mt-1">
                {state.diagnosisData.age ? `${state.diagnosisData.age} years` : 'Not selected'}
              </div>
            </div>
            <div>
              <span className="font-medium text-gray-700">Gender:</span>
              <div className="text-gray-600 mt-1">
                {state.diagnosisData.gender || 'Not selected'}
              </div>
            </div>
            <div>
              <span className="font-medium text-gray-700">Family History:</span>
              <div className="text-gray-600 mt-1">
                {state.diagnosisData.familyHistory?.length 
                  ? `${state.diagnosisData.familyHistory.length} conditions`
                  : 'None selected'
                }
              </div>
            </div>
          </div>
        </Card.Content>
      </Card>

      {/* Validation */}
      {(!state.diagnosisData.age || !state.diagnosisData.gender) && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <div className="flex items-center space-x-2">
            <AlertTriangle className="h-5 w-5 text-yellow-600" />
            <p className="text-yellow-800 font-medium">Required Information Missing</p>
          </div>
          <p className="text-yellow-700 text-sm mt-1">
            Please provide both age range and gender information to proceed with the analysis.
          </p>
        </div>
      )}
    </div>
  );
};

export default Demographics;