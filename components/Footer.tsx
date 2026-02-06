"use client";

import { Facebook, Instagram, Twitter, Linkedin, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-deep-charcoal text-white pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top Grid: Logo, Links, Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand & Trust */}
          <div className="space-y-6">
            {/* UPDATED: Replaced Text with Big Logo Image */}
            <div className="mb-6">
              <img 
                src="/logo.png" 
                alt="Harley Pharmacy" 
                className="h-24 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity" 
              />
            </div>

            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Your trusted partner in private healthcare. Bridging the gap between Harley Street expertise and patient convenience.
            </p>
            
            <div className="space-y-3 pt-4">
              <div className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 mt-1 text-luxury-bronze shrink-0" />
                <span>12 Harley Street, London, W1G 9QD</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone className="w-4 h-4 text-luxury-bronze shrink-0" />
                <span>+44 (0) 20 7123 4567</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail className="w-4 h-4 text-luxury-bronze shrink-0" />
                <span>care@harleypharmacy.co.uk</span>
              </div>
            </div>
          </div>

          {/* Column 2: Patient Services */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-white">Patient Care</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              {['Treatments A-Z', 'Private Prescriptions', 'Online Doctor', 'Delivery & Returns', 'FAQs'].map((item) => (
                <li key={item} className="hover:text-luxury-bronze hover:translate-x-1 transition-all cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Legal & Corporate */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-white">Corporate</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              {['About Us', 'Clinic Partnerships', 'Careers', 'Privacy Policy', 'Terms & Conditions'].map((item) => (
                <li key={item} className="hover:text-luxury-bronze hover:translate-x-1 transition-all cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-white">Stay Updated</h3>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe for health tips and exclusive offers.
            </p>
            <div className="flex gap-2 mb-8">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-luxury-bronze w-full transition-colors"
              />
              <button className="bg-luxury-bronze hover:bg-luxury-bronze-dark text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                Join
              </button>
            </div>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-luxury-bronze hover:text-white text-gray-400 transition-all">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© 2026 Harley Pharmacy Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
              GPhC Reg: 1110426
            </span>
            <span>Superintendent Pharmacist: John Doe</span>
          </div>
        </div>
      </div>
    </footer>
  );
}