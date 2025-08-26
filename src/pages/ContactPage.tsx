import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageCircle, 
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Send
} from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const ContactPage: React.FC = () => {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });

  const faqs = [
    {
      question: 'What is the Rare Disease Detection System?',
      answer: 'Our system is a demonstration platform that uses advanced algorithms to analyze symptoms, genetic markers, and patient demographics to suggest potential rare disease diagnoses. It\'s designed for educational purposes and to showcase the potential of AI in medical diagnostics.'
    },
    {
      question: 'Can I use this system for actual medical diagnosis?',
      answer: 'No. This is strictly a demonstration system for educational and research purposes. It should never be used for actual clinical diagnosis or medical decision-making. Always consult qualified healthcare professionals for proper medical evaluation.'
    },
    {
      question: 'How accurate are the diagnostic suggestions?',
      answer: 'While our demonstration system shows high accuracy rates in controlled testing environments, these results are for educational purposes only. Real diagnostic accuracy would require extensive clinical validation and regulatory approval.'
    },
    {
      question: 'Is my data secure and private?',
      answer: 'Yes. All processing happens locally in your browser. No patient information is transmitted to external servers or stored in our databases. Your privacy and data security are our top priorities.'
    },
    {
      question: 'How does the confidence scoring work?',
      answer: 'Our algorithm assigns confidence scores based on symptom matching rates, genetic marker alignment, demographic factors, and disease prevalence. Higher scores indicate stronger matches between patient profiles and known disease patterns.'
    },
    {
      question: 'Can healthcare professionals use this system?',
      answer: 'Healthcare professionals can explore our demonstration system to understand its capabilities, but it should not be used in clinical practice. We recommend it as an educational tool to understand AI applications in rare disease diagnostics.'
    },
    {
      question: 'What makes rare diseases difficult to diagnose?',
      answer: 'Rare diseases affect fewer than 200,000 people in the US. Their rarity means many doctors have limited experience with them, symptoms often overlap with common conditions, and specialized testing may not be readily available. The average time to diagnosis can be 7-8 years.'
    },
    {
      question: 'How can I contribute to rare disease research?',
      answer: 'You can participate in patient registries, support rare disease organizations, advocate for research funding, and consider participating in clinical trials. Contact us for information about research opportunities and advocacy groups.'
    }
  ];

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Support',
      info: 'info@raredx-demo.com',
      description: 'General inquiries and technical support'
    },
    {
      icon: Phone,
      title: 'Phone',
      info: '+1 (555) 123-4567',
      description: 'Available Monday-Friday, 9AM-5PM EST'
    },
    {
      icon: MapPin,
      title: 'Address',
      info: '123 Research Drive, Medical Center, MA 02118',
      description: 'Rare Disease Research Institute'
    }
  ];

  const inquiryTypes = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'technical', label: 'Technical Support' },
    { value: 'research', label: 'Research Collaboration' },
    { value: 'medical', label: 'Medical Information' },
    { value: 'press', label: 'Press & Media' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a server
    alert('Thank you for your message! This is a demo - your message was not actually sent.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      inquiryType: 'general'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contact & Support
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with our team for questions about the demonstration system, 
            research collaborations, or rare disease information.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <Card>
            <Card.Header>
              <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                <MessageCircle className="h-6 w-6 mr-2 text-blue-600" />
                Send us a Message
              </h2>
              <p className="text-gray-600 mt-2">
                We'll get back to you within 24 hours during business days.
              </p>
            </Card.Header>
            <Card.Content>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-2">
                    Inquiry Type
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {inquiryTypes.map(type => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Brief subject line"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Please provide details about your inquiry..."
                  />
                </div>

                <Button type="submit" className="w-full flex items-center justify-center space-x-2">
                  <Send className="h-4 w-4" />
                  <span>Send Message</span>
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  * This is a demonstration form. Messages will not actually be sent.
                </p>
              </form>
            </Card.Content>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card>
              <Card.Header>
                <h2 className="text-2xl font-bold text-gray-900">
                  Get in Touch
                </h2>
                <p className="text-gray-600 mt-2">
                  Multiple ways to reach our team for different types of inquiries.
                </p>
              </Card.Header>
              <Card.Content className="space-y-6">
                {contactMethods.map((method, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <method.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {method.title}
                      </h3>
                      <p className="text-blue-600 font-medium mb-1">
                        {method.info}
                      </p>
                      <p className="text-sm text-gray-600">
                        {method.description}
                      </p>
                    </div>
                  </div>
                ))}
              </Card.Content>
            </Card>

            {/* Emergency Notice */}
            <Card className="bg-red-50 border-red-200">
              <Card.Content className="p-6">
                <h3 className="font-bold text-red-900 mb-2">Medical Emergency Notice</h3>
                <p className="text-sm text-red-800">
                  This is not a medical service. For medical emergencies, contact your local 
                  emergency services (911 in the US) or go to your nearest emergency room immediately.
                </p>
              </Card.Content>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <section>
          <Card>
            <Card.Header className="text-center">
              <HelpCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
                Find answers to common questions about our rare disease detection system and research.
              </p>
            </Card.Header>
            <Card.Content>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg">
                    <button
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                      onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                    >
                      <h3 className="font-medium text-gray-900 pr-4">
                        {faq.question}
                      </h3>
                      {expandedFAQ === index ? (
                        <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                      )}
                    </button>
                    
                    {expandedFAQ === index && (
                      <div className="px-6 pb-4 border-t border-gray-200 bg-gray-50">
                        <p className="text-gray-700 leading-relaxed pt-4">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </Card.Content>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default ContactPage;