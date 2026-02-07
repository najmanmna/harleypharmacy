"use client";

import { ArrowRight, CheckCircle2, ShieldCheck, ChevronRight, ChevronLeft, ShoppingBag, Building2, Stethoscope } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';

// --- SLIDE DATA WITH ROUTES ---
const slides = [
  {
    id: 1,
    type: "patient",
    image: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=2680&auto=format&fit=crop", 
    position: "object-[75%_center]", 
    headline: "Pharmacy.",
    subhead: "Reimagined.",
    subline: "Shop clinically proven treatments for hair, skin, and wellness. No appointment needed.",
    theme: "light",
    primaryBtn: "Shop Collection",
    primaryIcon: ShoppingBag,
    primaryHref: "/treatments", // Routes to Clinical Directory
    secondaryBtn: "View Best Sellers",
    secondaryHref: "/#featured" // Anchor to Featured Section
  },
  {
    id: 2,
    type: "clinic",
    image: "https://plus.unsplash.com/premium_photo-1681967046979-fb9ac9a34495?q=80&w=1144&auto=format&fit=crop",
    position: "object-[center]", 
    headline: "Powering.",
    subhead: "Clinics.",
    subline: "The digital infrastructure for private practices. Issue GPhC-compliant prescriptions instantly.",
    theme: "dark",
    primaryBtn: "Partner Portal",
    primaryIcon: Building2,
    primaryHref: "/clinics", // Routes to B2B Landing Page
    secondaryBtn: "For Businesses",
    secondaryHref: "/services" // Routes to Services Tier
  },
  {
    id: 3,
    type: "consult",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=2864&auto=format&fit=crop",
    position: "object-[80%_center]", 
    headline: "Expertise.",
    subhead: "On Demand.",
    subline: "Need advice? Connect with UK-registered doctors and get your prescription approved in minutes.",
    theme: "light",
    primaryBtn: "Start Consultation",
    primaryIcon: Stethoscope,
    primaryHref: "/treatments", // Routes to directory for start
    secondaryBtn: "How it Works",
    secondaryHref: "/#how-it-works" // Anchor to Process section
  }
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const slide = slides[current];
  const isDark = slide.theme === 'dark';

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((current + 1) % slides.length);
  const prevSlide = () => setCurrent((current - 1 + slides.length) % slides.length);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-deep-charcoal">
      
      {/* --- LAYER 1: BACKGROUND & GRADIENTS --- */}
      <AnimatePresence mode='wait'>
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 z-0"
        >
          <img 
             src={slide.image} 
             alt="Hero Background" 
             className={`w-full h-full object-cover transition-all duration-1000 ${slide.position}`}
          />
          
          <div className={`absolute inset-0 bg-gradient-to-r ${
             isDark 
               ? 'from-black/90 via-black/40 to-transparent' 
               : 'from-medical-white/95 via-medical-white/40 to-transparent'
          } z-10 w-[70%]`}></div>

          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
        </motion.div>
      </AnimatePresence>

      {/* --- LAYER 2: CONTENT --- */}
      
      {/* Headlines */}
      <div className="absolute top-48 left-6 md:left-12 z-20 pointer-events-none max-w-[60%]">
         <div className="overflow-hidden">
            <AnimatePresence mode='wait'>
              <motion.h1 
                key={current}
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -100, opacity: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`font-serif text-[12vw] md:text-[7rem] leading-[0.9] tracking-tighter ${
                  isDark ? 'text-white' : 'text-deep-charcoal'
                }`}
              >
                {slide.headline}<br/>
                <span className="text-luxury-bronze italic">{slide.subhead}</span>
              </motion.h1>
            </AnimatePresence>
         </div>
      </div>

      {/* Trust Badges */}
      <div className="absolute top-48 right-6 md:right-12 z-20 hidden md:block">
         <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col items-end gap-2"
         >
             <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-xl">
                 <div className="flex items-center gap-3 text-sm font-medium text-white mb-2">
                    <ShieldCheck className="w-4 h-4 text-green-400" />
                    <span>GPhC Reg: 1110426</span>
                 </div>
                 <div className="flex items-center gap-3 text-sm font-medium text-white">
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                    <span>UK Licensed</span>
                 </div>
             </div>
         </motion.div>
      </div>

      {/* Action Card */}
      <div className="absolute bottom-12 right-6 md:right-12 z-30 max-w-md w-full">
         <AnimatePresence mode='wait'>
            <motion.div 
              key={current} 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/95 backdrop-blur-2xl border border-white/50 p-8 rounded-[2rem] shadow-2xl"
            >
               <div className="mb-4">
                  <span className="text-[10px] font-bold tracking-widest uppercase bg-deep-charcoal text-white px-3 py-1 rounded-full">
                    {slide.type === 'patient' ? 'For Shoppers' : slide.type === 'clinic' ? 'For Clinics' : 'For Patients'}
                  </span>
               </div>

               <p className="text-lg text-deep-charcoal leading-relaxed mb-8 font-light min-h-[3.5rem]">
                 {slide.subline}
               </p>
               
               <div className="flex flex-col gap-3">
                  {/* Primary Linked Button */}
                  <Link href={slide.primaryHref} className="w-full">
                    <button className="w-full p-6 bg-deep-charcoal text-white h-14 rounded-full font-medium hover:bg-black transition-all flex items-center justify-center gap-2 group shadow-lg">
                      <slide.primaryIcon className="w-4 h-4" />
                      {slide.primaryBtn}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform ml-auto mr-4 opacity-50" />
                    </button>
                  </Link>
                  
                  {/* Secondary Linked Button */}
                  <Link href={slide.secondaryHref} className="w-full">
                    <button className="w-full bg-transparent border border-gray-300 text-deep-charcoal h-14 rounded-full font-medium hover:border-luxury-bronze hover:text-luxury-bronze transition-all">
                      {slide.secondaryBtn}
                    </button>
                  </Link>
               </div>
            </motion.div>
         </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-12 left-6 md:left-12 z-30 flex items-center gap-6">
         <div className="flex gap-2">
            <button onClick={prevSlide} className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all hover:scale-105 active:scale-95 ${isDark ? 'border-white/30 text-white hover:bg-white hover:text-black' : 'border-black/10 text-black hover:bg-black hover:text-white'}`}>
               <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={nextSlide} className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all hover:scale-105 active:scale-95 ${isDark ? 'border-white/30 text-white hover:bg-white hover:text-black' : 'border-black/10 text-black hover:bg-black hover:text-white'}`}>
               <ChevronRight className="w-5 h-5" />
            </button>
         </div>
         
         <span className={`font-serif text-xl tracking-widest ${isDark ? 'text-white' : 'text-deep-charcoal'}`}>
            0{current + 1} <span className="opacity-50 text-sm">/ 0{slides.length}</span>
         </span>
      </div>

    </section>
  );
}