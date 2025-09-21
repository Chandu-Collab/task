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
        <div className="relative bg-gradient-to-br from-purple-600 via-indigo-700 to-blue-800 text-white overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-20 right-20 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
            <div className="absolute -bottom-20 left-20 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
          </div>
          
          {/* Floating Particles */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full opacity-40 animate-bounce delay-300"></div>
            <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-200 rounded-full opacity-60 animate-bounce delay-700"></div>
            <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-indigo-200 rounded-full opacity-50 animate-bounce delay-1000"></div>
          </div>
          
          <div className="relative container mx-auto px-4 py-24">
            <div className="text-center">
              {/* Animated Icon */}
              <div className="relative inline-block mb-8">
                <div className="absolute inset-0 bg-white rounded-full opacity-20 scale-150 animate-ping"></div>
                <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <Briefcase className="h-16 w-16 text-white animate-pulse" />
                </div>
              </div>
              
              {/* Main Heading with Gradient Text */}
              <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-white via-purple-100 to-indigo-100 bg-clip-text text-transparent">
                  Join Our Team
                </span>
              </h1>
              
              {/* Animated Subtitle */}
              <p className="text-xl md:text-2xl text-purple-100 max-w-4xl mx-auto leading-relaxed mb-8 animate-fade-in-up">
                Help us build the future of e-commerce while working with talented people 
                who are passionate about creating exceptional customer experiences.
              </p>
              
              {/* Stats */}
              <div className="flex flex-wrap justify-center gap-8 mb-12 text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 border border-white/20">
                  <div className="text-3xl font-bold text-white">50+</div>
                  <div className="text-purple-200 text-sm">Team Members</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 border border-white/20">
                  <div className="text-3xl font-bold text-white">15+</div>
                  <div className="text-purple-200 text-sm">Open Positions</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 border border-white/20">
                  <div className="text-3xl font-bold text-white">6</div>
                  <div className="text-purple-200 text-sm">Departments</div>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-white text-purple-700 hover:bg-purple-50 hover:scale-105 transition-all duration-300 shadow-xl"
                >
                  <Briefcase className="h-5 w-5 mr-2" />
                  View Open Positions
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm hover:scale-105 transition-all duration-300"
                >
                  Learn About Culture
                  <Users className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Why Work Here */}
        <section className="relative bg-white py-24">
          <div className="container mx-auto px-4">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Work With Us?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Join a team that values growth, innovation, and work-life balance
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="group relative bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden"
                >
                  {/* Gradient Background on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Animated Icon */}
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-indigo-600 rounded-2xl opacity-0 group-hover:opacity-20 scale-150 transition-all duration-500"></div>
                    <div className="relative w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <benefit.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-700 transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                  
                  {/* Bottom Accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="relative bg-gradient-to-br from-gray-50 via-purple-50 to-indigo-50 py-24 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_1px_1px,_rgba(139,92,246,0.3)_1px,_transparent_0)] bg-[length:24px_24px]"></div>
          </div>
          
          <div className="relative container mx-auto px-4">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Values
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide everything we do and shape our culture
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {companyValues.map((value, index) => (
                <div 
                  key={index} 
                  className="group relative bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50 p-8 text-center hover:bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
                >
                  {/* Animated Icon Container */}
                  <div className="relative mb-6 mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-indigo-600 rounded-full opacity-20 scale-100 group-hover:scale-125 group-hover:opacity-30 transition-all duration-500"></div>
                    <div className="relative w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:shadow-2xl transition-all duration-300">
                      <value.icon className="h-10 w-10 text-white group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-purple-700 transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                  
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/10 to-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Departments */}
        <section className="bg-white py-24">
          <div className="container mx-auto px-4">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Teams
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Diverse teams working together to create amazing experiences
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {departments.map((dept, index) => (
                <div 
                  key={index} 
                  className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 overflow-hidden"
                >
                  {/* Background Gradient on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-indigo-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Content */}
                  <div className="relative">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors duration-300">
                        {dept.name}
                      </h3>
                      <div className="relative">
                        <Badge 
                          variant="outline" 
                          className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white border-0 group-hover:scale-105 transition-transform duration-300"
                        >
                          {dept.count} open roles
                        </Badge>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {dept.description}
                    </p>
                    
                    {/* View Roles Link */}
                    <div className="mt-6">
                      <button className="text-purple-600 hover:text-purple-700 font-medium text-sm flex items-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                        View open roles
                        <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>
                  
                  {/* Bottom Accent Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

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