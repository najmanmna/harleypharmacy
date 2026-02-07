"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ShoppingBag, User, Search, Menu, X, ChevronRight, Phone, MapPin } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { 
    stiffness: 100, 
    damping: 30, 
    restDelta: 0.001 
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation variants for the mobile menu links
  const menuListVariants = {
    closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
    open: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } }
  };

  const itemVariants = {
    closed: { x: 50, opacity: 0 },
    open: { x: 0, opacity: 1 }
  };

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'shadow-lg' : ''}`}>
        
        {/* --- TOP TRUST BAR (Hidden on scroll for more screen real estate) --- */}
        <div className={`bg-deep-charcoal text-white overflow-hidden transition-all duration-500 ease-in-out ${
          isScrolled ? 'max-h-0 opacity-0' : 'max-h-12 py-2 md:py-2.5 opacity-100'
        }`}>
          <div className="text-[9px] md:text-xs text-center tracking-[0.1em] md:tracking-[0.15em] uppercase font-medium px-4">
            GPhC Reg: 1110426 <span className="mx-1 md:mx-2 opacity-30">|</span> UK Licensed Pharmacy
          </div>
        </div>

        {/* --- MAIN NAV BAR --- */}
        <div className={`relative bg-white/95 backdrop-blur-md border-b border-gray-100 transition-all duration-500 ${
          isScrolled ? 'h-16' : 'h-20'
        }`}>
          
          <motion.div className="absolute bottom-0 left-0 right-0 h-[3px] bg-luxury-bronze origin-left z-50" style={{ scaleX }} />

          <div className="max-w-7xl mx-auto h-full px-4 md:px-6 flex items-center justify-between">
            
            {/* Logo: Slightly smaller on mobile */}
            <Link href="/" className="z-50 shrink-0">
              <h1 className="font-serif text-xl md:text-3xl font-bold tracking-tight text-deep-charcoal">
                Harley<span className="text-luxury-bronze">Pharmacy</span>
              </h1>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
              {['Treatments', 'Services', 'Our Story'].map((item) => (
                <Link 
                  key={item} 
                  href={item === 'Our Story' ? '/#authority' : `/${item.toLowerCase()}`} 
                  className="text-gray-600 hover:text-deep-charcoal transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-luxury-bronze transition-all group-hover:w-full"></span>
                </Link>
              ))}
              <Link href="/clinics" className="text-luxury-bronze font-bold flex items-center gap-1">
                For Clinics <ChevronRight className="w-3 h-3" />
              </Link>
            </div>

            {/* Action Icons: Optimized for Touch */}
            <div className="flex items-center space-x-2 md:space-x-6">
              <motion.button whileTap={{ scale: 0.9 }} className="p-2.5 text-deep-charcoal hover:text-luxury-bronze transition-colors">
                <Search className="w-5 h-5 md:w-5 md:h-5" strokeWidth={2} />
              </motion.button>
              
              <motion.button whileTap={{ scale: 0.9 }} className="hidden sm:block p-2.5 text-deep-charcoal hover:text-luxury-bronze transition-colors">
                <User className="w-5 h-5" strokeWidth={2} />
              </motion.button>
              
              <motion.button whileTap={{ scale: 0.9 }} className="relative p-2.5 text-deep-charcoal hover:text-luxury-bronze transition-colors">
                <ShoppingBag className="w-5 h-5" strokeWidth={2} />
                <span className="absolute top-1.5 right-1.5 bg-luxury-bronze text-white text-[9px] w-4 h-4 flex items-center justify-center rounded-full font-bold">0</span>
              </motion.button>

              <motion.button 
                whileTap={{ scale: 0.9 }}
                className="md:hidden p-2.5 bg-gray-50 rounded-full text-deep-charcoal"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu className="w-6 h-6" strokeWidth={2} />
              </motion.button>
            </div>

          </div>
        </div>
      </nav>

      {/* --- MOBILE MENU DRAWER --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-deep-charcoal/40 backdrop-blur-md z-[60]"
            />
            
            <motion.div
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white z-[70] shadow-2xl flex flex-col"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-50">
                <span className="font-serif text-xl font-bold text-deep-charcoal">Navigation</span>
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 bg-gray-100 rounded-full">
                  <X className="w-6 h-6 text-gray-400" />
                </button>
              </div>

              {/* Drawer Content */}
              <motion.div 
                variants={menuListVariants} initial="closed" animate="open"
                className="flex-1 overflow-y-auto px-6 py-8"
              >
                <div className="flex flex-col space-y-1">
                  {[
                    { name: 'Treatments', href: '/treatments' },
                    { name: 'Clinical Services', href: '/services' },
                    { name: 'Our Authority', href: '/#authority' },
                    { name: 'Patient Account', href: '#' }
                  ].map((item) => (
                    <motion.div key={item.name} variants={itemVariants}>
                      <Link 
                        href={item.href} 
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center justify-between py-4 group"
                      >
                        <span className="text-2xl font-serif text-deep-charcoal group-active:text-luxury-bronze transition-colors">{item.name}</span>
                        <ChevronRight className="w-5 h-5 text-gray-300" />
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* B2B Section */}
                <motion.div variants={itemVariants} className="mt-10 p-6 bg-gray-50 rounded-3xl">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4 block">For Professionals</span>
                  <Link 
                    href="/clinics" 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-between group"
                  >
                    <div className="flex flex-col">
                       <span className="text-lg font-bold text-deep-charcoal group-active:text-luxury-bronze">Clinic Partnerships</span>
                       <span className="text-xs text-gray-500">Infrastructure & API Access</span>
                    </div>
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                       <ChevronRight className="w-4 h-4 text-luxury-bronze" />
                    </div>
                  </Link>
                </motion.div>
              </motion.div>

              {/* Drawer Footer */}
              <div className="p-6 bg-white border-t border-gray-50">
                <div className="grid grid-cols-2 gap-3 mb-6">
                   <button className="flex flex-col items-center justify-center py-4 bg-gray-50 rounded-2xl gap-2 active:bg-gray-100 transition-colors">
                      <Phone className="w-4 h-4 text-luxury-bronze" />
                      <span className="text-[10px] font-bold uppercase text-deep-charcoal">Call Us</span>
                   </button>
                   <button className="flex flex-col items-center justify-center py-4 bg-gray-50 rounded-2xl gap-2 active:bg-gray-100 transition-colors">
                      <MapPin className="w-4 h-4 text-luxury-bronze" />
                      <span className="text-[10px] font-bold uppercase text-deep-charcoal">Find Us</span>
                   </button>
                </div>
                <p className="text-center text-[10px] text-gray-400 uppercase tracking-widest leading-relaxed">
                  GPhC Registered Pharmacy: 1110426<br/>
                  Harley Street, London
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}