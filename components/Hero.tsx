"use client";

import { ArrowRight, CheckCircle2, ShieldCheck, ChevronRight, ChevronLeft, ShoppingBag, Building2, Stethoscope } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const slides = [
  {
    id: 1,
    type: "patient",
    image: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=2680&auto=format&fit=crop", 
    position: "object-[center_center] md:object-[75%_center]", 
    headline: "Pharmacy.",
    subhead: "Reimagined.",
    subline: "Shop clinically proven treatments for hair, skin, and wellness.",
    theme: "light",
    primaryBtn: "Shop Collection",
    primaryIcon: ShoppingBag,
    primaryHref: "/treatments",
    secondaryBtn: "Best Sellers",
    secondaryHref: "/#featured"
  },
  {
    id: 2,
    type: "clinic",
    image: "https://plus.unsplash.com/premium_photo-1681967046979-fb9ac9a34495?q=80&w=1144&auto=format&fit=crop",
    position: "object-center", 
    headline: "Powering.",
    subhead: "Clinics.",
    subline: "The digital infrastructure for private practices and instant prescriptions.",
    theme: "dark",
    primaryBtn: "Partner Portal",
    primaryIcon: Building2,
    primaryHref: "/clinics",
    secondaryBtn: "Businesses",
    secondaryHref: "/services"
  },
  {
    id: 3,
    type: "consult",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=2864&auto=format&fit=crop",
    position: "object-[center_center] md:object-[80%_center]", 
    headline: "Expertise.",
    subhead: "On Demand.",
    subline: "Connect with UK-registered doctors and get approved in minutes.",
    theme: "light",
    primaryBtn: "Consult Now",
    primaryIcon: Stethoscope,
    primaryHref: "/treatments",
    secondaryBtn: "How it Works",
    secondaryHref: "/#how-it-works"
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
    <section className="relative h-[100dvh] w-full overflow-hidden bg-deep-charcoal">
      
      {/* --- LAYER 1: DYNAMIC BACKGROUND --- */}
      <AnimatePresence mode='wait'>
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0"
        >
          <img 
             src={slide.image} 
             alt="Background" 
             className={`w-full h-full object-cover ${slide.position}`}
          />
          
          {/* Mobile-optimized gradient: Stronger at bottom for card readability */}
          <div className={`absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r ${
             isDark 
               ? 'from-black/80 via-black/20 to-black/60 md:to-transparent' 
               : 'from-medical-white/90 via-medical-white/30 to-black/40 md:to-transparent'
          } z-10`}></div>
        </motion.div>
      </AnimatePresence>

      {/* --- LAYER 2: CONTENT STACK --- */}
      <div className="relative z-30 h-full flex flex-col justify-between p-6 md:p-12">
        
        {/* Top Section: Headline & Trust (Desktop only) */}
        <div className="pt-24 md:pt-32 flex justify-between items-start">
          <div className="overflow-hidden">
            <AnimatePresence mode='wait'>
              <motion.h1 
                key={current}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                transition={{ duration: 0.6 }}
                className={`font-serif text-[15vw] md:text-[7rem] leading-[0.85] tracking-tighter ${
                  isDark ? 'text-white' : 'text-deep-charcoal'
                }`}
              >
                {slide.headline}<br/>
                <span className="text-luxury-bronze italic">{slide.subhead}</span>
              </motion.h1>
            </AnimatePresence>
          </div>

          {/* Desktop Trust Badges */}
          <div className="hidden md:block">
             <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-xl">
                 <div className="flex items-center gap-3 text-sm font-medium text-white mb-2">
                    <ShieldCheck className="w-4 h-4 text-green-400" />
                    <span>GPhC: 1110426</span>
                 </div>
                 <div className="flex items-center gap-3 text-sm font-medium text-white">
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                    <span>UK Licensed</span>
                 </div>
             </div>
          </div>
        </div>

        {/* Bottom Section: Controls & Action Card */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-4">
          
          {/* Controls: Compact on Mobile */}
          <div className="flex items-center gap-4 order-2 md:order-1">
             <div className="flex gap-1">
                <button onClick={prevSlide} className={`w-10 h-10 md:w-12 md:h-12 rounded-full border flex items-center justify-center transition-all ${isDark ? 'border-white/20 text-white' : 'border-black/10 text-black'}`}>
                   <ChevronLeft className="w-5 h-5" />
                </button>
                <button onClick={nextSlide} className={`w-10 h-10 md:w-12 md:h-12 rounded-full border flex items-center justify-center transition-all ${isDark ? 'border-white/20 text-white' : 'border-black/10 text-black'}`}>
                   <ChevronRight className="w-5 h-5" />
                </button>
             </div>
             <span className={`font-serif text-lg ${isDark ? 'text-white' : 'text-deep-charcoal'}`}>
                0{current + 1}
             </span>
          </div>

          {/* Action Card: Floating and focused */}
          <motion.div 
            key={current}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="w-full md:max-w-md bg-white/95 backdrop-blur-xl p-6 md:p-8 rounded-[2rem] shadow-2xl order-1 md:order-2"
          >
             <div className="mb-3">
                <span className="text-[9px] font-bold tracking-widest uppercase bg-deep-charcoal text-white px-2.5 py-1 rounded-full">
                  {slide.type}
                </span>
             </div>
             <p className="text-base md:text-lg text-deep-charcoal mb-6 font-light leading-snug">
               {slide.subline}
             </p>
             <div className="flex flex-col gap-2">
                <Link href={slide.primaryHref} className="w-full">
                  <button className="w-full h-14 p-4 bg-deep-charcoal text-white rounded-full font-bold flex items-center justify-center gap-2 group">
                    <slide.primaryIcon className="w-4 h-4" />
                    {slide.primaryBtn}
                    <ArrowRight className="w-4 h-4 ml-auto mr-4 opacity-40" />
                  </button>
                </Link>
                <Link href={slide.secondaryHref} className="w-full">
                  <button className="w-full h-12 bg-transparent border border-gray-200 text-deep-charcoal rounded-full text-sm font-semibold">
                    {slide.secondaryBtn}
                  </button>
                </Link>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}