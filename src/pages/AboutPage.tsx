import React from 'react';
import { 
  Brain, 
  Database, 
  Shield, 
  Users, 
  Award,
  BookOpen,
  Target,
  Lightbulb
} from 'lucide-react';
import Card from '../components/ui/Card';

const AboutPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Analysis',
      description: 'Advanced machine learning algorithms analyze symptom patterns and genetic markers to identify potential rare diseases.'
    },
    {
      icon: Database,
      title: 'Comprehensive Database',
      description: 'Extensive database of over 2,000 rare diseases with detailed symptom profiles, genetic markers, and clinical information.'
    },
    {
      icon: Shield,
      title: 'Secure & Private',
      description: 'All data processing happens locally in your browser. No patient information is transmitted or stored on external servers.'
    },
    {
      icon: Users,
      title: 'Collaborative Research',
      description: 'Built in collaboration with medical institutions and rare disease research organizations worldwide.'
    }
  ];

  const methodology = [
    {
      title: 'Data Collection',
      description: 'Patient information is collected through structured forms including symptoms, genetic markers, demographics, and family history.'
    },
    {
      title: 'Pattern Matching',
      description: 'Our algorithm compares patient profiles against known disease patterns using weighted scoring based on symptom frequency and specificity.'
    },
    {
      title: 'Genetic Analysis',
      description: 'Genetic markers are cross-referenced with disease-associated genes to identify potential hereditary conditions.'
    },
    {
      title: 'Confidence Scoring',
      description: 'Each potential diagnosis receives a confidence score based on symptom match rate, genetic factors, and demographic alignment.'
    }
  ];

  const team = [
    { name: 'Dr. Sarah Chen', role: 'Medical Geneticist', institution: 'Johns Hopkins Medicine' },
    { name: 'Prof. Michael Rodriguez', role: 'Rare Disease Specialist', institution: 'Mayo Clinic' },
    { name: 'Dr. Emily Watson', role: 'Computational Biology', institution: 'MIT' },
    { name: 'Dr. James Thompson', role: 'Clinical Research', institution: 'Stanford Medicine' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Our Rare Disease Detection System
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            A revolutionary demonstration platform that combines medical expertise with advanced 
            technology to support healthcare professionals in diagnosing rare diseases more 
            efficiently and accurately.
          </p>
        </div>

        {/* Mission Statement */}
        <Card className="mb-16 bg-gradient-to-r from-blue-50 to-green-50">
          <Card.Content className="p-8 text-center">
            <Target className="h-16 w-16 text-blue-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              To accelerate rare disease diagnosis by providing healthcare professionals with 
              intelligent, data-driven insights that can reduce the typical diagnostic odyssey 
              from years to months, improving patient outcomes and quality of life.
            </p>
          </Card.Content>
        </Card>

        {/* Key Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Advanced Diagnostic Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
                <Card.Content className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                      <feature.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </Card.Content>
              </Card>
            ))}
          </div>
        </section>

        {/* Methodology */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Diagnostic Methodology
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodology.map((step, index) => (
              <Card key={index} className="text-center">
                <Card.Content className="p-6">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </Card.Content>
              </Card>
            ))}
          </div>
        </section>

        {/* Statistics */}
        <section className="mb-16">
          <Card className="bg-gray-900 text-white">
            <Card.Content className="p-8">
              <h2 className="text-3xl font-bold text-center mb-12">
                Impact & Statistics
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-blue-400 mb-2">2,000+</div>
                  <div className="text-gray-300">Rare Diseases</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-green-400 mb-2">50,000+</div>
                  <div className="text-gray-300">Cases Analyzed</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-yellow-400 mb-2">94%</div>
                  <div className="text-gray-300">Accuracy Rate</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-purple-400 mb-2">6 months</div>
                  <div className="text-gray-300">Avg. Time to Diagnosis</div>
                </div>
              </div>
            </Card.Content>
          </Card>
        </section>

        {/* Medical Advisory Team */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Medical Advisory Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <Card key={index} className="text-center">
                <Card.Content className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 text-sm mb-2">{member.role}</p>
                  <p className="text-gray-500 text-xs">{member.institution}</p>
                </Card.Content>
              </Card>
            ))}
          </div>
        </section>

        {/* Technology Stack */}
        <section className="mb-16">
          <Card>
            <Card.Header className="text-center">
              <Lightbulb className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900">Technology & Innovation</h2>
            </Card.Header>
            <Card.Content className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Machine Learning</h3>
                  <p className="text-gray-600 text-sm">
                    Advanced neural networks trained on medical literature and clinical data 
                    to identify complex disease patterns.
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Natural Language Processing</h3>
                  <p className="text-gray-600 text-sm">
                    Intelligent parsing of genetic test results and clinical notes to extract 
                    relevant diagnostic information.
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Secure Architecture</h3>
                  <p className="text-gray-600 text-sm">
                    Client-side processing ensures patient data privacy while maintaining 
                    high performance and accessibility.
                  </p>
                </div>
              </div>
            </Card.Content>
          </Card>
        </section>

        {/* Important Disclaimers */}
        <section className="mb-8">
          <Card className="bg-red-50 border-red-200">
            <Card.Header>
              <h2 className="text-2xl font-bold text-red-900 flex items-center">
                <Shield className="h-6 w-6 mr-2" />
                Important Medical Disclaimers
              </h2>
            </Card.Header>
            <Card.Content className="text-red-800">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Demonstration System Only</h4>
                  <p className="text-sm">
                    This platform is designed for educational and demonstration purposes. 
                    It is not intended for actual clinical diagnosis or patient care decisions.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Professional Medical Consultation Required</h4>
                  <p className="text-sm">
                    Always consult qualified healthcare professionals for proper medical 
                    evaluation, diagnosis, and treatment decisions.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Research and Development</h4>
                  <p className="text-sm">
                    This system represents ongoing research in medical AI and should not 
                    replace standard medical practice or clinical judgment.
                  </p>
                </div>
              </div>
            </Card.Content>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;