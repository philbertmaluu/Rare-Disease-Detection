import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import { DiagnosisResult } from '../../types';
import Card from '../ui/Card';

interface ResultsChartProps {
  results: DiagnosisResult[];
  selectedSymptoms: string[];
}

const ResultsChart: React.FC<ResultsChartProps> = ({ results, selectedSymptoms }) => {
  // Prepare data for confidence scores bar chart
  const confidenceData = results.map(result => ({
    name: result.disease.name.split(' ').slice(0, 2).join(' '),
    confidence: result.confidence,
    fullName: result.disease.name
  }));

  // Prepare data for symptom category distribution
  const categoryData = selectedSymptoms.reduce((acc, symptomId) => {
    // This is simplified - in a real app, you'd look up the category
    const categories = ['Neurological', 'Cardiovascular', 'Respiratory', 'Gastrointestinal', 'Other'];
    const category = categories[Math.floor(Math.random() * categories.length)];
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const pieData = Object.entries(categoryData).map(([category, count]) => ({
    name: category,
    value: count
  }));

  // Colors for charts
  const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'];

  // Risk factors over age (mock data)
  const riskData = [
    { ageGroup: '0-18', risk: 15 },
    { ageGroup: '19-30', risk: 25 },
    { ageGroup: '31-50', risk: 45 },
    { ageGroup: '51-70', risk: 65 },
    { ageGroup: '70+', risk: 80 }
  ];

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 80) return '#10B981'; // Green
    if (confidence >= 60) return '#F59E0B'; // Yellow
    return '#EF4444'; // Red
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 rounded-lg shadow-lg border border-gray-200">
          <p className="font-medium">{payload[0].payload?.fullName || label}</p>
          <p className="text-blue-600">
            Confidence: {payload[0].value}%
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-6">
      {/* Confidence Scores */}
      <Card>
        <Card.Header>
          <h3 className="text-lg font-semibold text-gray-900">
            Diagnostic Confidence Scores
          </h3>
          <p className="text-sm text-gray-600 mt-1">
            Confidence levels for top matching conditions
          </p>
        </Card.Header>
        <Card.Content>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={confidenceData} margin={{ top: 5, right: 30, left: 20, bottom: 60 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="name" 
                  angle={-45}
                  textAnchor="end"
                  height={80}
                  fontSize={12}
                />
                <YAxis 
                  domain={[0, 100]}
                  tickFormatter={(value) => `${value}%`}
                />
                <Tooltip content={<CustomTooltip />} />
                <Bar 
                  dataKey="confidence" 
                  fill={(entry) => getConfidenceColor(entry)}
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card.Content>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Symptom Categories */}
        <Card>
          <Card.Header>
            <h3 className="text-lg font-semibold text-gray-900">
              Symptom Category Distribution
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              Breakdown of selected symptoms by medical category
            </p>
          </Card.Header>
          <Card.Content>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </Card.Content>
        </Card>

        {/* Risk Factors by Age */}
        <Card>
          <Card.Header>
            <h3 className="text-lg font-semibold text-gray-900">
              Risk Factors by Age Group
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              General risk distribution across age groups
            </p>
          </Card.Header>
          <Card.Content>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={riskData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="ageGroup" />
                  <YAxis tickFormatter={(value) => `${value}%`} />
                  <Tooltip formatter={(value) => [`${value}%`, 'Risk Level']} />
                  <Line 
                    type="monotone" 
                    dataKey="risk" 
                    stroke="#3B82F6" 
                    strokeWidth={3}
                    dot={{ fill: '#3B82F6', strokeWidth: 2, r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card.Content>
        </Card>
      </div>
    </div>
  );
};

export default ResultsChart;