import React, { useState } from 'react';
import { 
  Users, 
  Database, 
  BarChart3, 
  Settings, 
  Plus,
  Search,
  Download,
  Edit,
  Trash2
} from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { diseases } from '../data/diseases';
import { symptoms } from '../data/symptoms';

const AdminPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchTerm, setSearchTerm] = useState('');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'diseases', label: 'Disease Management', icon: Database },
    { id: 'users', label: 'User Analytics', icon: Users },
    { id: 'settings', label: 'System Settings', icon: Settings },
  ];

  const stats = [
    { label: 'Total Diseases', value: diseases.length, change: '+5', changeType: 'positive' },
    { label: 'Total Symptoms', value: symptoms.length, change: '+12', changeType: 'positive' },
    { label: 'Active Sessions', value: '1,247', change: '+8%', changeType: 'positive' },
    { label: 'Success Rate', value: '94.2%', change: '+2.1%', changeType: 'positive' }
  ];

  const recentActivity = [
    { action: 'New disease added', details: 'Ehlers-Danlos Syndrome Type IV', time: '2 hours ago', user: 'Dr. Smith' },
    { action: 'Symptom updated', details: 'Joint hypermobility criteria', time: '4 hours ago', user: 'Admin' },
    { action: 'User diagnosis completed', details: 'Case #1247 - High confidence match', time: '6 hours ago', user: 'System' },
    { action: 'Database backup', details: 'Scheduled backup completed', time: '12 hours ago', user: 'System' },
    { action: 'New user registered', details: 'Healthcare provider verification', time: '1 day ago', user: 'Dr. Johnson' }
  ];

  const filteredDiseases = diseases.filter(disease =>
    disease.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    disease.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderOverview = () => (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index}>
            <Card.Content className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className={`text-sm font-medium px-2 py-1 rounded ${
                  stat.changeType === 'positive' ? 'text-green-600 bg-green-100' : 'text-red-600 bg-red-100'
                }`}>
                  {stat.change}
                </div>
              </div>
            </Card.Content>
          </Card>
        ))}
      </div>

      {/* Charts Placeholder */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <Card.Header>
            <h3 className="text-lg font-semibold text-gray-900">Diagnostic Accuracy Trends</h3>
          </Card.Header>
          <Card.Content>
            <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
              <p className="text-gray-500">Chart visualization would appear here</p>
            </div>
          </Card.Content>
        </Card>

        <Card>
          <Card.Header>
            <h3 className="text-lg font-semibold text-gray-900">Most Common Symptoms</h3>
          </Card.Header>
          <Card.Content>
            <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
              <p className="text-gray-500">Symptom frequency chart would appear here</p>
            </div>
          </Card.Content>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card>
        <Card.Header>
          <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
        </Card.Header>
        <Card.Content>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-start space-x-4 pb-4 border-b border-gray-200 last:border-b-0">
                <div className="bg-blue-100 p-2 rounded-full">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="font-medium text-gray-900">{activity.action}</p>
                    <span className="text-sm text-gray-500">{activity.time}</span>
                  </div>
                  <p className="text-sm text-gray-600">{activity.details}</p>
                  <p className="text-xs text-gray-500 mt-1">by {activity.user}</p>
                </div>
              </div>
            ))}
          </div>
        </Card.Content>
      </Card>
    </div>
  );

  const renderDiseaseManagement = () => (
    <div className="space-y-6">
      {/* Header with Actions */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-2xl font-bold text-gray-900">Disease Management</h2>
        <div className="flex space-x-3">
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Add Disease
          </Button>
        </div>
      </div>

      {/* Search */}
      <Card>
        <Card.Content className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search diseases..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </Card.Content>
      </Card>

      {/* Disease Table */}
      <Card>
        <Card.Content className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Disease Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Rarity
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Prevalence
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Symptoms
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredDiseases.slice(0, 10).map((disease) => (
                  <tr key={disease.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {disease.name}
                        </div>
                        <div className="text-sm text-gray-500 truncate max-w-xs">
                          {disease.description}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                        disease.rarity === 'ultra-rare' ? 'bg-purple-100 text-purple-800' :
                        disease.rarity === 'very-rare' ? 'bg-red-100 text-red-800' :
                        'bg-orange-100 text-orange-800'
                      }`}>
                        {disease.rarity.replace('-', ' ')}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {disease.prevalence}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {disease.symptoms.length} symptoms
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex space-x-2 justify-end">
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-800">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {filteredDiseases.length > 10 && (
            <div className="px-6 py-3 border-t border-gray-200 bg-gray-50">
              <p className="text-sm text-gray-500 text-center">
                Showing 10 of {filteredDiseases.length} diseases. 
                <button className="text-blue-600 hover:text-blue-800 ml-1">
                  Load more
                </button>
              </p>
            </div>
          )}
        </Card.Content>
      </Card>
    </div>
  );

  const renderUserAnalytics = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">User Analytics</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <Card.Header>
              <h3 className="text-lg font-semibold text-gray-900">Usage Statistics</h3>
            </Card.Header>
            <Card.Content>
              <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
                <p className="text-gray-500">User analytics chart would appear here</p>
              </div>
            </Card.Content>
          </Card>
        </div>
        
        <Card>
          <Card.Header>
            <h3 className="text-lg font-semibold text-gray-900">Top User Types</h3>
          </Card.Header>
          <Card.Content>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Healthcare Providers</span>
                <span className="font-medium">68%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Researchers</span>
                <span className="font-medium">22%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Students</span>
                <span className="font-medium">8%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Other</span>
                <span className="font-medium">2%</span>
              </div>
            </div>
          </Card.Content>
        </Card>
      </div>
    </div>
  );

  const renderSettings = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">System Settings</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <Card.Header>
            <h3 className="text-lg font-semibold text-gray-900">Algorithm Settings</h3>
          </Card.Header>
          <Card.Content>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Minimum Confidence Threshold
                </label>
                <input 
                  type="range" 
                  min="20" 
                  max="80" 
                  defaultValue="60"
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>20%</span>
                  <span>60%</span>
                  <span>80%</span>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Maximum Results to Display
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                  <option value="5">5 results</option>
                  <option value="10">10 results</option>
                  <option value="15">15 results</option>
                </select>
              </div>
            </div>
          </Card.Content>
        </Card>
        
        <Card>
          <Card.Header>
            <h3 className="text-lg font-semibold text-gray-900">Data Management</h3>
          </Card.Header>
          <Card.Content>
            <div className="space-y-4">
              <Button variant="outline" className="w-full">
                <Download className="h-4 w-4 mr-2" />
                Export Database
              </Button>
              <Button variant="outline" className="w-full">
                <Database className="h-4 w-4 mr-2" />
                Backup System
              </Button>
              <Button variant="outline" className="w-full text-red-600 border-red-300 hover:bg-red-50">
                <Trash2 className="h-4 w-4 mr-2" />
                Clear Analytics Data
              </Button>
            </div>
          </Card.Content>
        </Card>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'overview': return renderOverview();
      case 'diseases': return renderDiseaseManagement();
      case 'users': return renderUserAnalytics();
      case 'settings': return renderSettings();
      default: return renderOverview();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Admin Dashboard
          </h1>
          <p className="text-gray-600">
            Manage the rare disease detection system and monitor usage analytics.
          </p>
        </div>

        {/* Navigation Tabs */}
        <Card className="mb-8">
          <Card.Content className="p-0">
            <nav className="flex space-x-0">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                    activeTab === tab.id
                      ? 'border-blue-600 text-blue-600 bg-blue-50'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <tab.icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              ))}
            </nav>
          </Card.Content>
        </Card>

        {/* Content */}
        {renderContent()}

        {/* Demo Notice */}
        <Card className="mt-8 bg-yellow-50 border-yellow-200">
          <Card.Content className="p-4 text-center">
            <p className="text-sm text-yellow-800">
              <strong>Demo Notice:</strong> This is a demonstration admin panel. 
              All data and actions are simulated for showcase purposes only.
            </p>
          </Card.Content>
        </Card>
      </div>
    </div>
  );
};

export default AdminPage;