import React, { useState } from 'react';
import { ChevronDown, ChevronUp, AlertCircle, Info, ExternalLink } from 'lucide-react';
import { DiagnosisResult } from '../../types';
import Card from '../ui/Card';
import Button from '../ui/Button';

interface DiseaseCardProps {
  result: DiagnosisResult;
  rank: number;
}

const DiseaseCard: React.FC<DiseaseCardProps> = ({ result, rank }) => {
  const [isExpanded, setIsExpanded] = useState(rank === 1);

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 80) return 'text-green-600 bg-green-100';
    if (confidence >= 60) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  const getConfidenceLabel = (confidence: number) => {
    if (confidence >= 80) return 'High Confidence';
    if (confidence >= 60) return 'Moderate Confidence';
    return 'Low Confidence';
  };

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'ultra-rare': return 'bg-purple-100 text-purple-800';
      case 'very-rare': return 'bg-red-100 text-red-800';
      case 'rare': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className="hover:shadow-lg transition-shadow duration-200">
      <Card.Header>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-2">
              <div className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white text-sm font-bold rounded-full">
                {rank}
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                {result.disease.name}
              </h3>
              <span className={`px-2 py-1 text-xs font-medium rounded-full ${getRarityColor(result.disease.rarity)}`}>
                {result.disease.rarity.replace('-', ' ')}
              </span>
            </div>
            
            <div className="flex items-center space-x-4 mb-3">
              <div className={`px-3 py-1 rounded-full text-sm font-medium ${getConfidenceColor(result.confidence)}`}>
                {result.confidence}% {getConfidenceLabel(result.confidence)}
              </div>
              <div className="text-sm text-gray-500">
                Prevalence: {result.disease.prevalence}
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed">
              {result.disease.description}
            </p>
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="ml-4"
          >
            {isExpanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </Button>
        </div>
      </Card.Header>

      {isExpanded && (
        <Card.Content className="border-t border-gray-200 pt-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Matching Symptoms */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                <AlertCircle className="h-4 w-4 mr-2 text-blue-600" />
                Matching Symptoms ({result.matchingSymptoms.length})
              </h4>
              <div className="space-y-2">
                {result.matchingSymptoms.map((symptomId, index) => {
                  // In a real app, you'd look up the symptom name
                  const symptomName = `Symptom ${index + 1}`; // Placeholder
                  return (
                    <div key={symptomId} className="flex items-center justify-between py-2 px-3 bg-blue-50 rounded-lg">
                      <span className="text-sm text-blue-900">{symptomName}</span>
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Risk Factors */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                <Info className="h-4 w-4 mr-2 text-green-600" />
                Risk Factors
              </h4>
              <div className="space-y-2">
                {result.riskFactors.map((factor, index) => (
                  <div key={index} className="flex items-center space-x-2 py-2 px-3 bg-green-50 rounded-lg">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span className="text-sm text-green-900">{factor}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Genetic Markers */}
          {result.disease.geneticMarkers && (
            <div className="mt-6 pt-6 border-t border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-3">Genetic Markers</h4>
              <div className="flex flex-wrap gap-2">
                {result.disease.geneticMarkers.map((marker, index) => (
                  <span key={index} className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">
                    {marker}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Age Groups */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-3">Typical Age Groups</h4>
            <div className="flex flex-wrap gap-2">
              {result.disease.ageGroup.map((age, index) => (
                <span key={index} className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">
                  {age} years
                </span>
              ))}
            </div>
          </div>

          {/* More Information */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-3">Additional Information</h4>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              {result.disease.moreInfo}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="outline" size="sm" className="flex items-center">
                <ExternalLink className="h-4 w-4 mr-2" />
                Research Papers
              </Button>
              <Button variant="outline" size="sm" className="flex items-center">
                <ExternalLink className="h-4 w-4 mr-2" />
                Clinical Trials
              </Button>
              <Button variant="outline" size="sm" className="flex items-center">
                <ExternalLink className="h-4 w-4 mr-2" />
                Patient Resources
              </Button>
            </div>
          </div>
        </Card.Content>
      )}
    </Card>
  );
};

export default DiseaseCard;