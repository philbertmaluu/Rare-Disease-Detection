import React from "react";
import { Link } from "react-router-dom";
import {
  Users,
  Award,
  Shield,
  Search,
  BarChart3,
  FileText,
  CheckCircle,
} from "lucide-react";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";

const LandingPage: React.FC = () => {
  const stats = [
    { icon: Users, label: "Patients Analyzed", value: "50,000+" },
    { icon: Search, label: "Rare Diseases", value: "2,000+" },
    { icon: Award, label: "Accuracy Rate", value: "94%" },
    { icon: Shield, label: "Years of Research", value: "15+" },
  ];

  const features = [
    {
      icon: Search,
      title: "Advanced Symptom Analysis",
      description:
        "Comprehensive symptom matching using our extensive medical database",
    },
    {
      icon: BarChart3,
      title: "Confidence Scoring",
      description:
        "Get detailed confidence scores for each potential diagnosis",
    },
    {
      icon: FileText,
      title: "Detailed Reports",
      description: "Export comprehensive diagnostic reports in PDF format",
    },
  ];

  const certifications = [
    "HIPAA Compliant",
    "FDA Research Partner",
    "Medical Board Certified",
    "ISO 27001 Security",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Advanced Rare Disease
              <span className="text-blue-600"> Detection System</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Harness the power of AI and medical expertise to identify
              potential rare diseases through comprehensive symptom analysis and
              genetic marker evaluation.
            </p>
            <p className="text-lg text-gray-500 mb-10">
              A cutting-edge demonstration platform combining medical knowledge
              with advanced algorithms to support healthcare professionals in
              diagnostic decision-making.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/diagnosis">
                <Button size="lg" className="w-full sm:w-auto min-w-48">
                  Start Diagnosis
                </Button>
              </Link>
              <Link to="/about">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto min-w-48"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="text-center p-8 hover:shadow-lg transition-shadow"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Powerful Diagnostic Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive system combines multiple data points to provide
              accurate and reliable diagnostic insights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-8 text-center hover:shadow-lg transition-shadow"
              >
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Trusted by Medical Professionals
            </h2>
            <p className="text-xl text-gray-600">
              Built with the highest standards of security, accuracy, and
              compliance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-center justify-center space-x-3 p-4 bg-gray-50 rounded-lg"
              >
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="font-medium text-gray-900">{cert}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-block bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-sm text-yellow-800">
                <strong>Important Notice:</strong> This is a demonstration
                system for educational and research purposes only. Not intended
                for clinical diagnosis or medical decision-making.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Explore Rare Disease Detection?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Experience the power of our diagnostic system with a comprehensive
            demo.
          </p>
          <Link to="/diagnosis">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              Start Your Diagnosis Demo
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
