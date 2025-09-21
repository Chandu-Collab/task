'use client';

import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { 
  Ruler, 
  Users, 
  Shirt, 
  ShirtIcon,
  Footprints,
  User,
  ChevronRight,
  HelpCircle,
  Zap
} from 'lucide-react';

const categories = [
  {
    id: 'clothing',
    name: 'Clothing',
    icon: Shirt,
    subcategories: ['Tops', 'Bottoms', 'Dresses', 'Outerwear']
  },
  {
    id: 'shoes',
    name: 'Shoes',
    icon: Footprints,
    subcategories: ['Athletic', 'Casual', 'Formal', 'Boots']
  },
  {
    id: 'accessories',
    name: 'Accessories',
    icon: User,
    subcategories: ['Hats', 'Belts', 'Bags', 'Jewelry']
  }
];

const clothingSizeChart = {
  women: {
    headers: ['Size', 'Bust (in)', 'Waist (in)', 'Hip (in)'],
    rows: [
      ['XS', '32-34', '25-27', '35-37'],
      ['S', '34-36', '27-29', '37-39'],
      ['M', '36-38', '29-31', '39-41'],
      ['L', '38-40', '31-33', '41-43'],
      ['XL', '40-42', '33-35', '43-45'],
      ['2XL', '42-44', '35-37', '45-47']
    ]
  },
  men: {
    headers: ['Size', 'Chest (in)', 'Waist (in)', 'Hip (in)'],
    rows: [
      ['XS', '34-36', '28-30', '34-36'],
      ['S', '36-38', '30-32', '36-38'],
      ['M', '38-40', '32-34', '38-40'],
      ['L', '40-42', '34-36', '40-42'],
      ['XL', '42-44', '36-38', '42-44'],
      ['2XL', '44-46', '38-40', '44-46']
    ]
  }
};

const shoeSizeChart = {
  women: {
    headers: ['US Size', 'EU Size', 'UK Size', 'Length (in)'],
    rows: [
      ['5', '35.5', '2.5', '8.5'],
      ['5.5', '36', '3', '8.75'],
      ['6', '36.5', '3.5', '9'],
      ['6.5', '37', '4', '9.25'],
      ['7', '37.5', '4.5', '9.375'],
      ['7.5', '38', '5', '9.5'],
      ['8', '38.5', '5.5', '9.75'],
      ['8.5', '39', '6', '9.875'],
      ['9', '39.5', '6.5', '10'],
      ['9.5', '40', '7', '10.125'],
      ['10', '40.5', '7.5', '10.25']
    ]
  },
  men: {
    headers: ['US Size', 'EU Size', 'UK Size', 'Length (in)'],
    rows: [
      ['7', '40', '6', '9.625'],
      ['7.5', '40.5', '6.5', '9.75'],
      ['8', '41', '7', '9.875'],
      ['8.5', '42', '7.5', '10'],
      ['9', '42.5', '8', '10.125'],
      ['9.5', '43', '8.5', '10.25'],
      ['10', '44', '9', '10.375'],
      ['10.5', '44.5', '9.5', '10.5'],
      ['11', '45', '10', '10.625'],
      ['11.5', '45.5', '10.5', '10.75'],
      ['12', '46', '11', '10.875']
    ]
  }
};

const measurementTips = [
  {
    title: 'Use a Flexible Measuring Tape',
    description: 'A soft fabric measuring tape gives the most accurate results',
    icon: Ruler
  },
  {
    title: 'Measure Over Undergarments',
    description: 'For clothing, measure over your regular undergarments',
    icon: Shirt
  },
  {
    title: 'Stand Naturally',
    description: 'Stand straight with arms at your sides, don\'t hold your breath',
    icon: User
  },
  {
    title: 'Get Help if Possible',
    description: 'Having someone else take measurements is more accurate',
    icon: Users
  }
];

export default function SizeGuidePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('clothing');
  const [selectedGender, setSelectedGender] = useState<'women' | 'men'>('women');

  const getCurrentChart = () => {
    if (selectedCategory === 'clothing') {
      return clothingSizeChart[selectedGender];
    } else if (selectedCategory === 'shoes') {
      return shoeSizeChart[selectedGender];
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar 
        onMobileMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        isMobileMenuOpen={isMobileMenuOpen}
      />
      
      <main className="flex-1">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
          <div className="container mx-auto px-4 py-16">
            <div className="text-center">
              <Ruler className="h-16 w-16 mx-auto mb-4 text-purple-200" />
              <h1 className="text-4xl font-bold mb-4">Size Guide</h1>
              <p className="text-xl text-purple-100 max-w-2xl mx-auto">
                Find your perfect fit with our comprehensive size charts and measuring guides
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          {/* Category Selection */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Choose a Category</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`p-6 rounded-lg border-2 transition-all text-left group ${
                    selectedCategory === category.id
                      ? 'border-purple-500 bg-purple-50 shadow-lg'
                      : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <category.icon className={`h-8 w-8 ${
                      selectedCategory === category.id ? 'text-purple-600' : 'text-gray-600 group-hover:text-gray-800'
                    }`} />
                    <ChevronRight className={`h-5 w-5 transition-transform ${
                      selectedCategory === category.id ? 'text-purple-600 rotate-90' : 'text-gray-400'
                    }`} />
                  </div>
                  <h3 className={`text-lg font-semibold mb-2 ${
                    selectedCategory === category.id ? 'text-purple-900' : 'text-gray-900'
                  }`}>
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {category.subcategories.join(', ')}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Size Charts */}
          {(selectedCategory === 'clothing' || selectedCategory === 'shoes') && (
            <div className="mb-12">
              <div className="bg-white rounded-lg shadow-sm border p-8">
                {/* Gender Selection */}
                <div className="flex justify-center mb-8">
                  <div className="flex bg-gray-100 rounded-lg p-1">
                    <button
                      onClick={() => setSelectedGender('women')}
                      className={`px-6 py-2 rounded-md transition-colors ${
                        selectedGender === 'women'
                          ? 'bg-white shadow-sm text-gray-900'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      Women's
                    </button>
                    <button
                      onClick={() => setSelectedGender('men')}
                      className={`px-6 py-2 rounded-md transition-colors ${
                        selectedGender === 'men'
                          ? 'bg-white shadow-sm text-gray-900'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      Men's
                    </button>
                  </div>
                </div>

                {/* Size Chart Table */}
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        {getCurrentChart()?.headers.map((header, index) => (
                          <th key={index} className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {getCurrentChart()?.rows.map((row, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          {row.map((cell, cellIndex) => (
                            <td key={cellIndex} className="border border-gray-200 px-4 py-3 text-gray-700">
                              {cellIndex === 0 ? (
                                <span className="font-medium">{cell}</span>
                              ) : (
                                cell
                              )}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* How to Measure */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">How to Measure</h2>
            
            {selectedCategory === 'clothing' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Women's Measurements */}
                <div className="bg-white rounded-lg shadow-sm border p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Women's Body Measurements</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Bust</h4>
                      <p className="text-gray-600 text-sm">Measure around the fullest part of your bust, keeping the tape level.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Waist</h4>
                      <p className="text-gray-600 text-sm">Measure around your natural waistline, just above your hip bones.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Hip</h4>
                      <p className="text-gray-600 text-sm">Measure around the fullest part of your hips, about 7-9 inches below your waist.</p>
                    </div>
                  </div>
                </div>

                {/* Men's Measurements */}
                <div className="bg-white rounded-lg shadow-sm border p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Men's Body Measurements</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Chest</h4>
                      <p className="text-gray-600 text-sm">Measure around the fullest part of your chest, under the arms and over the shoulder blades.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Waist</h4>
                      <p className="text-gray-600 text-sm">Measure around your natural waistline, where you would normally wear your pants.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Hip</h4>
                      <p className="text-gray-600 text-sm">Measure around the fullest part of your hips and buttocks.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {selectedCategory === 'shoes' && (
              <div className="bg-white rounded-lg shadow-sm border p-6 max-w-2xl mx-auto">
                <h3 className="text-xl font-bold text-gray-900 mb-6">How to Measure Your Feet</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Prepare</h4>
                      <p className="text-gray-600 text-sm">Measure your feet in the evening when they are at their largest. Wear the type of socks you'll wear with the shoes.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Trace Your Foot</h4>
                      <p className="text-gray-600 text-sm">Place a piece of paper on the floor against a wall. Stand with your heel against the wall and trace around your foot.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Measure Length</h4>
                      <p className="text-gray-600 text-sm">Measure from the heel to the longest toe. Use this measurement with our size chart above.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Measurement Tips */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Measuring Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {measurementTips.map((tip, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm border p-6 text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <tip.icon className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{tip.title}</h3>
                  <p className="text-gray-600 text-sm">{tip.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Size Conversion */}
          <div className="bg-white rounded-lg shadow-sm border p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">International Size Conversions</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Women's Clothing */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Women's Clothing</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-200 px-3 py-2 text-left font-semibold text-gray-900">US</th>
                        <th className="border border-gray-200 px-3 py-2 text-left font-semibold text-gray-900">UK</th>
                        <th className="border border-gray-200 px-3 py-2 text-left font-semibold text-gray-900">EU</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['XS', '6', '32'],
                        ['S', '8', '34'],
                        ['M', '10', '36'],
                        ['L', '12', '38'],
                        ['XL', '14', '40']
                      ].map((row, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          {row.map((cell, cellIndex) => (
                            <td key={cellIndex} className="border border-gray-200 px-3 py-2 text-gray-700">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Men's Clothing */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Men's Clothing</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-200 px-3 py-2 text-left font-semibold text-gray-900">US</th>
                        <th className="border border-gray-200 px-3 py-2 text-left font-semibold text-gray-900">UK</th>
                        <th className="border border-gray-200 px-3 py-2 text-left font-semibold text-gray-900">EU</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['XS', '32', '42'],
                        ['S', '34', '44'],
                        ['M', '36', '46'],
                        ['L', '38', '48'],
                        ['XL', '40', '50']
                      ].map((row, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          {row.map((cell, cellIndex) => (
                            <td key={cellIndex} className="border border-gray-200 px-3 py-2 text-gray-700">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Help Section */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-8">
            <div className="text-center">
              <HelpCircle className="h-12 w-12 mx-auto mb-4 text-blue-200" />
              <h2 className="text-2xl font-bold mb-4">Still Not Sure About Your Size?</h2>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Our customer service team is here to help you find the perfect fit. 
                We also offer free returns and exchanges within 30 days.
              </p>
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                  <Button variant="outline" className="text-gray-900">
                    Contact Size Expert
                  </Button>
                  <Button variant="outline" className="text-gray-900">
                    View Return Policy
                  </Button>
                </div>
                
                <p className="text-sm text-blue-200">
                  <strong>Pro Tip:</strong> When in doubt between sizes, we recommend sizing up. 
                  You can always exchange for a smaller size if needed.
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