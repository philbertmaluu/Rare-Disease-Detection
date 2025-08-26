import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Download, RefreshCw, Share2, AlertTriangle } from 'lucide-react';
import { useDiagnosis } from '../context/DiagnosisContext';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import DiseaseCard from '../components/results/DiseaseCard';
import ResultsChart from '../components/results/ResultsChart';
import jsPDF from 'jspdf';

const ResultsPage: React.FC = () => {
  const { state, dispatch } = useDiagnosis();

  const generatePDF = () => {
    const pdf = new jsPDF();
    
    // Title
    pdf.setFontSize(20);
    pdf.text('Rare Disease Diagnostic Report', 20, 30);
    
    // Disclaimer
    pdf.setFontSize(10);
    pdf.text('DEMONSTRATION REPORT - NOT FOR CLINICAL USE', 20, 45);
    
    // Date
    pdf.setFontSize(12);
    pdf.text(`Generated: ${new Date().toLocaleDateString()}`, 20, 60);
    
    // Results summary
    pdf.setFontSize(14);
    pdf.text('Diagnostic Results:', 20, 80);
    
    state.results.forEach((result, index) => {
      const yPos = 95 + (index * 25);
      pdf.setFontSize(12);
      pdf.text(`${index + 1}. ${result.disease.name}`, 25, yPos);
      pdf.setFontSize(10);
      pdf.text(`Confidence: ${result.confidence}%`, 30, yPos + 8);
      pdf.text(`Prevalence: ${result.disease.prevalence}`, 30, yPos + 16);
    });
    
    // Footer
    pdf.setFontSize(8);
    pdf.text('This is a demonstration system. Consult healthcare professionals for actual diagnosis.', 20, 280);
    
    pdf.save('rare-disease-diagnostic-report.pdf');
  };

  const startNewDiagnosis = () => {
    dispatch({ type: 'RESET_DIAGNOSIS' });
  };

  if (state.results.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="max-w-md mx-4">
          <Card.Content className="text-center p-8">
            <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-900 mb-2">No Results Available</h2>
            <p className="text-gray-600 mb-6">
              Complete a diagnostic assessment to view results here.
            </p>
            <Link to="/diagnosis">
              <Button>Start New Diagnosis</Button>
            </Link>
          </Card.Content>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Diagnostic Results
              </h1>
              <p className="text-gray-600">
                Generated on {new Date().toLocaleDateString()} at {new Date().toLocaleTimeString()}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 mt-4 lg:mt-0">
              <Button
                variant="outline"
                onClick={generatePDF}
                className="flex items-center space-x-2"
              >
                <Download className="h-4 w-4" />
                <span>Export PDF</span>
              </Button>
              <Button
                variant="outline"
                className="flex items-center space-x-2"
              >
                <Share2 className="h-4 w-4" />
                <span>Share Results</span>
              </Button>
              <Button
                onClick={startNewDiagnosis}
                className="flex items-center space-x-2"
              >
                <RefreshCw className="h-4 w-4" />
                <span>New Diagnosis</span>
              </Button>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
              <div className="text-sm text-yellow-800">
                <p className="font-medium mb-1">Important Medical Disclaimer</p>
                <p>
                  This is a demonstration system for educational purposes only. Results are not intended 
                  for clinical diagnosis or medical decision-making. Always consult qualified healthcare 
                  professionals for proper medical evaluation and diagnosis.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <Card.Content className="text-center p-6">
              <div className="text-2xl font-bold text-blue-600 mb-1">
                {state.results.length}
              </div>
              <div className="text-sm text-gray-600">Potential Matches</div>
            </Card.Content>
          </Card>
          
          <Card>
            <Card.Content className="text-center p-6">
              <div className="text-2xl font-bold text-green-600 mb-1">
                {Math.max(...state.results.map(r => r.confidence))}%
              </div>
              <div className="text-sm text-gray-600">Highest Confidence</div>
            </Card.Content>
          </Card>
          
          <Card>
            <Card.Content className="text-center p-6">
              <div className="text-2xl font-bold text-purple-600 mb-1">
                {state.diagnosisData.selectedSymptoms.length}
              </div>
              <div className="text-sm text-gray-600">Symptoms Analyzed</div>
            </Card.Content>
          </Card>
          
          <Card>
            <Card.Content className="text-center p-6">
              <div className="text-2xl font-bold text-orange-600 mb-1">
                {state.results.filter(r => r.confidence >= 60).length}
              </div>
              <div className="text-sm text-gray-600">High Confidence</div>
            </Card.Content>
          </Card>
        </div>

        {/* Charts */}
        <div className="mb-8">
          <ResultsChart 
            results={state.results} 
            selectedSymptoms={state.diagnosisData.selectedSymptoms}
          />
        </div>

        {/* Disease Results */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Potential Diagnoses
          </h2>
          <div className="space-y-6">
            {state.results.map((result, index) => (
              <DiseaseCard
                key={result.disease.id}
                result={result}
                rank={index + 1}
              />
            ))}
          </div>
        </div>

        {/* Next Steps */}
        <Card>
          <Card.Header>
            <h3 className="text-lg font-semibold text-gray-900">
              Recommended Next Steps
            </h3>
          </Card.Header>
          <Card.Content>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-3">For Healthcare Providers:</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Review complete patient history and physical examination</li>
                  <li>• Consider ordering specific genetic tests based on results</li>
                  <li>• Consult with relevant specialists (genetics, neurology, etc.)</li>
                  <li>• Evaluate family history for hereditary patterns</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-3">For Patients/Families:</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Discuss results with your primary healthcare provider</li>
                  <li>• Gather detailed family medical history</li>
                  <li>• Consider genetic counseling if indicated</li>
                  <li>• Connect with patient advocacy groups for support</li>
                </ul>
              </div>
            </div>
          </Card.Content>
        </Card>
      </div>
    </div>
  );
};

export default ResultsPage;