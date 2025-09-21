'use client';

import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { 
  Briefcase, 
  Users, 
  Globe, 
  Award, 
  Heart, 
  Coffee,
  DollarSign,
  GraduationCap,
  MapPin,
  Clock,
  ArrowRight,
  Star,
  Zap,
  Target
} from 'lucide-react';

const benefits = [
  {
    icon: DollarSign,
    title: 'Competitive Salary',
    description: 'Industry-leading compensation packages with annual reviews and performance bonuses'
  },
  {
    icon: Heart,
    title: 'Health & Wellness',
    description: 'Comprehensive health insurance, dental, vision, and wellness programs'
  },
  {
    icon: Coffee,
    title: 'Work-Life Balance',
    description: 'Flexible hours, remote work options, and unlimited PTO policy'
  },
  {
    icon: GraduationCap,
    title: 'Learning & Development',
    description: '$2,000 annual learning budget for courses, conferences, and certifications'
  },
  {
    icon: Users,
    title: 'Great Team Culture',
    description: 'Collaborative environment with regular team events and social activities'
  },
  {
    icon: Award,
    title: 'Career Growth',
    description: 'Clear career progression paths with mentorship and leadership opportunities'
  }
];

const openPositions = [
  {
    id: 1,
    title: 'Senior Software Engineer',
    department: 'Engineering',
    location: 'San Francisco, CA / Remote',
    type: 'Full-time',
    description: 'Join our engineering team to build scalable e-commerce platforms using React, Node.js, and AWS.',
    requirements: ['5+ years of full-stack development', 'Experience with React and Node.js', 'AWS/Cloud experience'],
    posted: '2 days ago'
  },
  {
    id: 2,
    title: 'Product Manager',
    department: 'Product',
    location: 'San Francisco, CA',
    type: 'Full-time',
    description: 'Lead product strategy and roadmap for our mobile shopping experience.',
    requirements: ['3+ years of product management', 'E-commerce experience', 'Data-driven mindset'],
    posted: '1 week ago'
  },
  {
    id: 3,
    title: 'UX/UI Designer',
    department: 'Design',
    location: 'Remote',
    type: 'Full-time',
    description: 'Design intuitive and beautiful user experiences for our web and mobile platforms.',
    requirements: ['4+ years of UX/UI design', 'Figma expertise', 'E-commerce design experience'],
    posted: '3 days ago'
  },
  {
    id: 4,
    title: 'Data Scientist',
    department: 'Analytics',
    location: 'New York, NY / Remote',
    type: 'Full-time',
    description: 'Build ML models for personalization, recommendation systems, and business insights.',
    requirements: ['PhD or Masters in relevant field', 'Python/R expertise', 'ML/AI experience'],
    posted: '5 days ago'
  },
  {
    id: 5,
    title: 'Customer Success Manager',
    department: 'Customer Success',
    location: 'Austin, TX',
    type: 'Full-time',
    description: 'Help enterprise customers achieve success with our platform and drive retention.',
    requirements: ['3+ years in customer success', 'SaaS experience', 'Excellent communication'],
    posted: '1 week ago'
  },
  {
    id: 6,
    title: 'Marketing Specialist',
    department: 'Marketing',
    location: 'Los Angeles, CA / Remote',
    type: 'Full-time',
    description: 'Drive customer acquisition through digital marketing campaigns and partnerships.',
    requirements: ['2+ years in digital marketing', 'Google Ads/Facebook Ads', 'Analytics tools'],
    posted: '4 days ago'
  }
];

const departments = [
  {
    name: 'Engineering',
    count: 12,
    description: 'Building scalable, reliable systems that power millions of transactions'
  },
  {
    name: 'Product',
    count: 6,
    description: 'Defining product strategy and creating amazing user experiences'
  },
  {
    name: 'Design',
    count: 8,
    description: 'Crafting beautiful, intuitive interfaces that customers love'
  },
  {
    name: 'Marketing',
    count: 10,
    description: 'Connecting with customers and growing our brand worldwide'
  },
  {
    name: 'Customer Success',
    count: 15,
    description: 'Ensuring every customer has an exceptional experience'
  },
  {
    name: 'Operations',
    count: 9,
    description: 'Optimizing logistics, supply chain, and business operations'
  }
];

const companyValues = [
  {
    icon: Target,
    title: 'Customer Obsession',
    description: 'We start with the customer and work backwards'
  },
  {
    icon: Zap,
    title: 'Move Fast',
    description: 'Speed matters in business and we act with urgency'
  },
  {
    icon: Users,
    title: 'Team First',
    description: 'We succeed together and support each other'
  },
  {
    icon: Star,
    title: 'Excellence',
    description: 'We set high standards and continuously improve'
  }
];

export default function CareersPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState('All');

  const filteredPositions = selectedDepartment === 'All' 
    ? openPositions 
    : openPositions.filter(position => position.department === selectedDepartment);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar 
        onMobileMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        isMobileMenuOpen={isMobileMenuOpen}
      />
      
      <main className="flex-1">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white">
          <div className="container mx-auto px-4 py-20">
            <div className="text-center">
              <Briefcase className="h-16 w-16 mx-auto mb-4 text-purple-200" />
              <h1 className="text-5xl font-bold mb-6">Join Our Team</h1>
              <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
                Help us build the future of e-commerce while working with talented people 
                who are passionate about creating exceptional customer experiences.
              </p>
              <div className="mt-8">
                <Button size="lg" variant="outline" className="text-gray-900">
                  View Open Positions
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Why Work Here */}
        <div className="container mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why Work With Us?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border p-6 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Company Values */}
        <div className="bg-gray-100">
          <div className="container mx-auto px-4 py-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Values</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {companyValues.map((value, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm p-6 text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Departments */}
        <div className="container mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Teams</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{dept.name}</h3>
                  <Badge variant="outline">{dept.count} open roles</Badge>
                </div>
                <p className="text-gray-600 text-sm">{dept.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Open Positions */}
        <div className="bg-white">
          <div className="container mx-auto px-4 py-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Open Positions</h2>
            
            {/* Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {['All', ...new Set(openPositions.map(pos => pos.department))].map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDepartment(dept)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedDepartment === dept
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>

            {/* Job Listings */}
            <div className="space-y-6 max-w-4xl mx-auto">
              {filteredPositions.map((position) => (
                <div key={position.id} className="bg-gray-50 rounded-lg border p-6 hover:shadow-md transition-shadow">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-gray-900">{position.title}</h3>
                        <Badge variant="outline">{position.department}</Badge>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {position.location}
                        </div>
                        <div className="flex items-center">
                          <Briefcase className="h-4 w-4 mr-1" />
                          {position.type}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          Posted {position.posted}
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-3">{position.description}</p>
                      
                      <div className="flex flex-wrap gap-2">
                        {position.requirements.slice(0, 3).map((req, index) => (
                          <Badge key={index} variant="outline">
                            {req}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="lg:ml-6">
                      <Button>
                        Apply Now
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredPositions.length === 0 && (
              <div className="text-center py-12">
                <Briefcase className="h-16 w-16 mx-auto text-gray-300 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">No positions available</h3>
                <p className="text-gray-600">
                  No open positions in {selectedDepartment} right now. Check back soon or sign up for job alerts.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Hiring Process */}
        <div className="bg-gray-100">
          <div className="container mx-auto px-4 py-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Hiring Process</h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                    1
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Apply</h3>
                  <p className="text-gray-600 text-sm">Submit your application through our careers page</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                    2
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Phone Screen</h3>
                  <p className="text-gray-600 text-sm">Initial conversation with our recruiting team</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                    3
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Interviews</h3>
                  <p className="text-gray-600 text-sm">Meet with team members and hiring managers</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                    4
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Offer</h3>
                  <p className="text-gray-600 text-sm">Receive an offer and join our team!</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white">
          <div className="container mx-auto px-4 py-20">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Join Us?</h2>
              <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
                Don't see a position that fits? We're always looking for talented individuals. 
                Send us your resume and we'll keep you in mind for future opportunities.
              </p>
              
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="outline" className="text-gray-900">
                    View All Positions
                  </Button>
                  <Button size="lg" variant="outline" className="text-gray-900">
                    Submit Resume
                  </Button>
                </div>
                
                <p className="text-sm text-purple-200">
                  Questions about working here? Email us at <strong>careers@company.com</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}