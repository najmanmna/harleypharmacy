"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ShoppingBag, User, Search, Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled ? 'shadow-sm' : ''
        }`}
      >
        {/* Top Trust Bar */}
        <div className={`bg-deep-charcoal text-white overflow-hidden transition-all duration-500 ease-in-out ${
          isScrolled ? 'max-h-0 py-0 opacity-0' : 'max-h-10 py-2.5 opacity-100'
        }`}>
          <div className="text-[10px] md:text-xs text-center tracking-[0.15em] uppercase font-medium">
            GPhC Registered Pharmacy: 1110426 <span className="mx-2 opacity-50">|</span> UK Licensed Doctors
          </div>
        </div>

        {/* Main Navigation Bar */}
        <div className={`bg-white/90 backdrop-blur-md border-b border-gray-100 transition-all duration-500 ${
          isScrolled ? 'bg-white/95' : 'bg-white/80'
        }`}>
          <div className={`max-w-7xl mx-auto px-6 flex items-center justify-between transition-all duration-500 ${
            isScrolled ? 'h-16' : 'h-20'
          }`}>
            
            {/* --- LOGO AREA: Back to Clean Typography --- */}
            <Link href="/" className="group z-50 relative">
              <h1 className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-deep-charcoal">
                Harley<span className="text-luxury-bronze group-hover:text-luxury-bronze-dark transition-colors">Pharmacy</span>
              </h1>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide">
              {['Treatments', 'Prescriptions', 'Our Story'].map((item) => (
                <Link 
                   key={item} 
                   href={item === 'Our Story' ? '/#authority' : `/${item.toLowerCase().replace(' ', '-')}`} 
                   className="relative group py-2"
                >
                  <span className="text-gray-600 group-hover:text-deep-charcoal transition-colors">{item}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-luxury-bronze transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
              
              <div className="h-4 w-px bg-gray-300 mx-2"></div>
              
              <Link href="/clinics" className="text-luxury-bronze hover:text-luxury-bronze-dark font-semibold transition-colors flex items-center gap-1 group">
                For Clinics
                <ChevronRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </Link>
            </div>

            {/* Icons / Actions */}
            <div className="flex items-center space-x-5 md:space-x-6 text-deep-charcoal">
              <button className="hover:text-luxury-bronze transition-colors p-1">
                <Search className="w-5 h-5" strokeWidth={1.5} />
              </button>
              
              <button className="hidden md:block hover:text-luxury-bronze transition-colors p-1">
                <User className="w-5 h-5" strokeWidth={1.5} />
              </button>
              
              <button className="relative group hover:text-luxury-bronze transition-colors p-1">
                <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
                <span className="absolute -top-1 -right-1 bg-luxury-bronze text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-medium group-hover:bg-deep-charcoal transition-colors">
                  0
                </span>
              </button>

              <button 
                className="md:hidden p-1 hover:text-luxury-bronze transition-colors"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu className="w-6 h-6" strokeWidth={1.5} />
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[60]"
            />
            
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white z-[70] shadow-2xl border-l border-gray-100 p-8 flex flex-col"
            >
              <div className="flex items-center justify-between mb-12">
                <span className="font-serif text-xl font-bold text-deep-charcoal">Menu</span>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 -mr-2 text-gray-400 hover:text-deep-charcoal transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex flex-col space-y-6">
                {['Treatments', 'Prescriptions', 'Our Story', 'Account'].map((item) => (
                  <Link 
                    key={item} 
                    href="#" 
                    className="text-2xl font-serif text-deep-charcoal hover:text-luxury-bronze transition-colors"
                  >
                    {item}
                  </Link>
                ))}
                <div className="h-px bg-gray-100 my-4"></div>
                <Link href="/clinics" className="text-lg font-medium text-luxury-bronze flex items-center justify-between group">
                  For Clinics
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="mt-auto">
                 <button className="w-full bg-deep-charcoal text-white py-4 rounded-full font-medium mb-4">
                   Sign In
                 </button>
                 <p className="text-center text-xs text-gray-400 uppercase tracking-widest">
                   GPhC Reg: 1110426
                 </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}   