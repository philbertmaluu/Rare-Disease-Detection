import React, { useState, useMemo } from 'react';
import { Search, X, Plus } from 'lucide-react';
import { symptoms } from '../../data/symptoms';
import { useDiagnosis } from '../../context/DiagnosisContext';
import Button from '../ui/Button';
import Card from '../ui/Card';

const SymptomSelector: React.FC = () => {
  const { state, dispatch } = useDiagnosis();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(symptoms.map(s => s.category))];

  const filteredSymptoms = useMemo(() => {
    return symptoms.filter(symptom => {
      const matchesSearch = symptom.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || symptom.category === selectedCategory;
      const notSelected = !state.diagnosisData.selectedSymptoms.includes(symptom.id);
      return matchesSearch && matchesCategory && notSelected;
    });
  }, [searchTerm, selectedCategory, state.diagnosisData.selectedSymptoms]);

  const selectedSymptoms = symptoms.filter(symptom => 
    state.diagnosisData.selectedSymptoms.includes(symptom.id)
  );

  const handleSymptomSelect = (symptomId: string) => {
    dispatch({
      type: 'UPDATE_SYMPTOMS',
      payload: [...state.diagnosisData.selectedSymptoms, symptomId]
    });
  };

  const handleSymptomRemove = (symptomId: string) => {
    dispatch({
      type: 'UPDATE_SYMPTOMS',
      payload: state.diagnosisData.selectedSymptoms.filter(id => id !== symptomId)
    });
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'mild': return 'bg-green-100 text-green-800';
      case 'moderate': return 'bg-yellow-100 text-yellow-800';
      case 'severe': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Select Symptoms
        </h2>
        <p className="text-gray-600">
          Choose all symptoms that the patient is experiencing. You can search or browse by category.
        </p>
      </div>

      {/* Selected Symptoms */}
      {selectedSymptoms.length > 0 && (
        <Card>
          <Card.Header>
            <h3 className="text-lg font-semibold text-gray-900">
              Selected Symptoms ({selectedSymptoms.length})
            </h3>
          </Card.Header>
          <Card.Content>
            <div className="flex flex-wrap gap-2">
              {selectedSymptoms.map(symptom => (
                <div 
                  key={symptom.id}
                  className="flex items-center space-x-2 bg-blue-50 border border-blue-200 rounded-lg px-3 py-2"
                >
                  <span className="text-sm font-medium text-blue-900">
                    {symptom.name}
                  </span>
                  <span className={`text-xs px-2 py-1 rounded-full ${getSeverityColor(symptom.severity)}`}>
                    {symptom.severity}
                  </span>
                  <button
                    onClick={() => handleSymptomRemove(symptom.id)}
                    className="text-blue-600 hover:text-blue-800"
                    aria-label={`Remove ${symptom.name}`}
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          </Card.Content>
        </Card>
      )}

      {/* Search and Filter */}
      <Card>
        <Card.Content>
          <div className="space-y-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search symptoms..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-1 text-sm rounded-full border transition-colors ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </Card.Content>
      </Card>

      {/* Available Symptoms */}
      <Card>
        <Card.Header>
          <h3 className="text-lg font-semibold text-gray-900">
            Available Symptoms
            {selectedCategory !== 'All' && ` - ${selectedCategory}`}
          </h3>
          {searchTerm && (
            <p className="text-sm text-gray-600 mt-1">
              {filteredSymptoms.length} results for "{searchTerm}"
            </p>
          )}
        </Card.Header>
        <Card.Content>
          {filteredSymptoms.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500">
                {searchTerm || selectedCategory !== 'All' 
                  ? 'No symptoms found matching your criteria.'
                  : 'All symptoms have been selected.'
                }
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {filteredSymptoms.map(symptom => (
                <button
                  key={symptom.id}
                  onClick={() => handleSymptomSelect(symptom.id)}
                  className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-colors text-left"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium text-gray-900 truncate">
                        {symptom.name}
                      </span>
                      <span className={`text-xs px-2 py-1 rounded-full ${getSeverityColor(symptom.severity)}`}>
                        {symptom.severity}
                      </span>
                    </div>
                    <span className="text-xs text-gray-500">
                      {symptom.category}
                    </span>
                  </div>
                  <Plus className="h-4 w-4 text-gray-400 ml-2 flex-shrink-0" />
                </button>
              ))}
            </div>
          )}
        </Card.Content>
      </Card>

      {selectedSymptoms.length === 0 && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <p className="text-yellow-800 text-sm">
            Please select at least one symptom to continue with the diagnosis.
          </p>
        </div>
      )}
    </div>
  );
};

export default SymptomSelector;