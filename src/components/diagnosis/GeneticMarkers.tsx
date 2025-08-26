import React, { useState } from 'react';
import { Upload, FileText, Info } from 'lucide-react';
import { useDiagnosis } from '../../context/DiagnosisContext';
import Button from '../ui/Button';
import Card from '../ui/Card';

const GeneticMarkers: React.FC = () => {
  const { state, dispatch } = useDiagnosis();
  const [uploadMode, setUploadMode] = useState<'text' | 'file'>('text');

  const handleTextChange = (value: string) => {
    dispatch({
      type: 'UPDATE_GENETIC_MARKERS',
      payload: value
    });
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Simulate file processing
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result as string;
        handleTextChange(content);
      };
      reader.readAsText(file);
    }
  };

  const commonMarkers = [
    'BRCA1', 'BRCA2', 'TP53', 'APC', 'MLH1', 'MSH2', 'MSH6', 'PMS2',
    'CDKN2A', 'STK11', 'PTEN', 'VHL', 'RET', 'MEN1', 'NF1', 'NF2'
  ];

  const addCommonMarker = (marker: string) => {
    const current = state.diagnosisData.geneticMarkers;
    const newValue = current ? `${current}, ${marker}` : marker;
    handleTextChange(newValue);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Genetic Markers
        </h2>
        <p className="text-gray-600">
          Enter known genetic markers, mutations, or test results. This information 
          helps improve diagnostic accuracy for hereditary conditions.
        </p>
      </div>

      {/* Info Card */}
      <Card className="bg-blue-50 border-blue-200">
        <Card.Content className="flex items-start space-x-3">
          <Info className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
          <div className="text-sm text-blue-800">
            <p className="font-medium mb-1">Genetic Information Guidelines:</p>
            <ul className="list-disc list-inside space-y-1 text-blue-700">
              <li>Include gene names, specific mutations, or variant identifiers</li>
              <li>You can paste results from genetic testing reports</li>
              <li>Common format: GENE_NAME:variant (e.g., BRCA1:c.68_69delAG)</li>
              <li>This field is optional but significantly improves accuracy</li>
            </ul>
          </div>
        </Card.Content>
      </Card>

      {/* Input Mode Selection */}
      <Card>
        <Card.Header>
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">
              Input Method
            </h3>
            <div className="flex space-x-2">
              <button
                onClick={() => setUploadMode('text')}
                className={`px-3 py-1 text-sm rounded-md transition-colors ${
                  uploadMode === 'text'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <FileText className="h-4 w-4 inline mr-1" />
                Manual Entry
              </button>
              <button
                onClick={() => setUploadMode('file')}
                className={`px-3 py-1 text-sm rounded-md transition-colors ${
                  uploadMode === 'file'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Upload className="h-4 w-4 inline mr-1" />
                File Upload
              </button>
            </div>
          </div>
        </Card.Header>
        <Card.Content>
          {uploadMode === 'text' ? (
            <div className="space-y-4">
              <textarea
                value={state.diagnosisData.geneticMarkers}
                onChange={(e) => handleTextChange(e.target.value)}
                placeholder={`Enter genetic markers, one per line or comma-separated:

Examples:
BRCA1:c.68_69delAG
TP53:p.Arg273His
CFTR:F508del
MLH1:c.1528C>T

Or paste genetic testing report data...`}
                className="w-full h-40 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              />
              
              {/* Character Count */}
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>
                  {state.diagnosisData.geneticMarkers.length} characters
                </span>
                <button
                  onClick={() => handleTextChange('')}
                  className="text-blue-600 hover:text-blue-800"
                >
                  Clear
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h4 className="text-lg font-medium text-gray-900 mb-2">
                  Upload Genetic Test Results
                </h4>
                <p className="text-gray-600 mb-4">
                  Select a text file containing genetic markers or test results
                </p>
                <input
                  type="file"
                  accept=".txt,.csv,.tsv"
                  onChange={handleFileUpload}
                  className="hidden"
                  id="genetic-file-upload"
                />
                <label htmlFor="genetic-file-upload">
                  <Button variant="outline" className="cursor-pointer">
                    Choose File
                  </Button>
                </label>
                <p className="text-xs text-gray-500 mt-2">
                  Supported formats: TXT, CSV, TSV (Max 5MB)
                </p>
              </div>

              {state.diagnosisData.geneticMarkers && (
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h5 className="font-medium text-gray-900 mb-2">Uploaded Content:</h5>
                  <pre className="text-sm text-gray-700 whitespace-pre-wrap max-h-32 overflow-y-auto">
                    {state.diagnosisData.geneticMarkers}
                  </pre>
                </div>
              )}
            </div>
          )}
        </Card.Content>
      </Card>

      {/* Common Markers Quick Add */}
      <Card>
        <Card.Header>
          <h3 className="text-lg font-semibold text-gray-900">
            Common Genetic Markers
          </h3>
          <p className="text-sm text-gray-600 mt-1">
            Click to add common markers to your input
          </p>
        </Card.Header>
        <Card.Content>
          <div className="flex flex-wrap gap-2">
            {commonMarkers.map(marker => (
              <button
                key={marker}
                onClick={() => addCommonMarker(marker)}
                className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors"
              >
                {marker}
              </button>
            ))}
          </div>
        </Card.Content>
      </Card>

      {/* Validation Message */}
      {state.diagnosisData.geneticMarkers.length > 10000 && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <p className="text-yellow-800 text-sm">
            Input is quite large. Consider providing only the most relevant genetic markers 
            for better processing performance.
          </p>
        </div>
      )}
    </div>
  );
};

export default GeneticMarkers;