import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  Mail,
  Phone,
  MapPin,
  CreditCard,
  Shield,
  Truck,
  RotateCcw
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

export function Footer() {
  const footerLinks = {
    'Shop': [
      { label: 'All Products', href: '/products' },
      { label: 'Electronics', href: '/categories/electronics' },
      { label: 'Fashion', href: '/categories/fashion' },
      { label: 'Home & Garden', href: '/categories/home-garden' },
      { label: 'Sports & Outdoors', href: '/categories/sports-outdoors' },
      { label: 'Deals & Offers', href: '/deals' },
    ],
    'Customer Service': [
      { label: 'Help Center', href: '/help' },
      { label: 'Contact Us', href: '/contact' },
      { label: 'Order Tracking', href: '/track-order' },
      { label: 'Returns & Exchanges', href: '/returns' },
      { label: 'Size Guide', href: '/size-guide' },
      { label: 'FAQ', href: '/faq' },
    ],
    'About ShopHub': [
      { label: 'Our Story', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'Press', href: '/press' },
      { label: 'Sustainability', href: '/sustainability' },
      { label: 'Affiliate Program', href: '/affiliate' },
      { label: 'Gift Cards', href: '/gift-cards' },
    ],
    'Legal': [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Cookie Policy', href: '/cookies' },
      { label: 'Accessibility', href: '/accessibility' },
      { label: 'Data Protection', href: '/data-protection' },
      { label: 'Sitemap', href: '/sitemap' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, label: 'Facebook', href: '#' },
    { icon: Twitter, label: 'Twitter', href: '#' },
    { icon: Instagram, label: 'Instagram', href: '#' },
    { icon: Youtube, label: 'YouTube', href: '#' },
  ];

  const features = [
    { icon: Truck, title: 'Free Shipping', description: 'On orders over $50' },
    { icon: RotateCcw, title: 'Easy Returns', description: '30-day return policy' },
    { icon: Shield, title: 'Secure Payment', description: 'Your data is protected' },
    { icon: CreditCard, title: 'Multiple Payment', description: 'Various payment options' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Features section */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <feature.icon className="h-8 w-8 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-medium text-white">{feature.title}</h3>
                  <p className="text-sm text-gray-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-xl font-bold text-white">ShopHub</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Your one-stop destination for quality products at unbeatable prices. 
              We bring you the best selection from trusted brands worldwide.
            </p>
            
            {/* Contact info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-sm">support@shophub.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-sm">1-800-SHOPHUB</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span className="text-sm">New York, NY 10001</span>
              </div>
            </div>
          </div>

          {/* Footer links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-medium text-white mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter section */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h3 className="text-lg font-medium text-white mb-2">
                Stay in the loop
              </h3>
              <p className="text-gray-400">
                Get exclusive offers, new product alerts, and shopping tips.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 focus:border-blue-500"
              />
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2024 ShopHub. All rights reserved. | Made with ❤️ for shopping enthusiasts
            </p>

            {/* Social links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Payment methods */}
          <div className="mt-6 pt-6 border-t border-gray-800">
            <div className="text-center">
              <p className="text-gray-400 text-sm mb-3">Accepted Payment Methods</p>
              <div className="flex justify-center items-center space-x-4 opacity-60">
                {/* Payment method placeholders - in real app would use actual payment logos */}
                <div className="h-8 w-12 bg-gray-700 rounded text-xs flex items-center justify-center text-gray-400">
                  VISA
                </div>
                <div className="h-8 w-12 bg-gray-700 rounded text-xs flex items-center justify-center text-gray-400">
                  MC
                </div>
                <div className="h-8 w-12 bg-gray-700 rounded text-xs flex items-center justify-center text-gray-400">
                  AMEX
                </div>
                <div className="h-8 w-12 bg-gray-700 rounded text-xs flex items-center justify-center text-gray-400">
                  PP
                </div>
                <div className="h-8 w-12 bg-gray-700 rounded text-xs flex items-center justify-center text-gray-400">
                  GPay
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}