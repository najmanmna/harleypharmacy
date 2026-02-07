"use client";

import { ShoppingBag, FileCheck, Truck, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import SpotlightCard from './ui/SpotlightCard'; // <--- Import the magic

const steps = [
  {
    icon: ShoppingBag,
    title: "Choose Your Treatment",
    desc: "Browse our clinically proven formulary. Select the treatment you need or upload an existing prescription directly."
  },
  {
    icon: FileCheck,
    title: "Quick Clinical Check",
    desc: "Complete a secure 2-minute health questionnaire. Our UK-registered doctors review it instantly to ensure safety."
  },
  {
    icon: Truck,
    title: "Fast, Discreet Delivery",
    desc: "Approved orders are dispatched from our Harley Street pharmacy for free next-day delivery in plain, unbranded packaging."
  }
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-deep-charcoal relative overflow-hidden">
      
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
      
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-luxury-bronze/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* --- Header Section --- */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-luxury-bronze border border-white/10 text-[10px] font-bold tracking-[0.2em] uppercase mb-4 backdrop-blur-md">
              The Patient Journey
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
              Prescription Care, <span className="italic text-luxury-bronze">Simplified.</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
              World-class healthcare without the waiting room. A seamless three-step process designed for your privacy and speed.
            </p>
          </motion.div>
        </div>

        {/* --- The Steps Grid --- */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* CONNECTOR LINE (Desktop Only) */}
          <div className="hidden md:block absolute top-[4rem] left-[16%] right-[16%] h-12 z-0 pointer-events-none">
             <svg className="w-full h-full" preserveAspectRatio="none">
               <line x1="0" y1="50%" x2="100%" y2="50%" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="4 4" />
               <motion.path
                 d="M 0 24 L 1000 24" 
                 stroke="#A48870" 
                 strokeWidth="1.5"
                 pathLength="1"
                 fill="transparent"
                 initial={{ pathLength: 0 }}
                 whileInView={{ pathLength: 1 }}
                 viewport={{ once: true }}
                 transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
                 vectorEffect="non-scaling-stroke"
               />
             </svg>
          </div>

          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.25, duration: 0.5 }}
              className="relative flex flex-col items-center text-center group"
            >
              {/* UPGRADED: Wrapped in SpotlightCard for the magic reveal */}
              <SpotlightCard 
                className="w-full p-8 h-full bg-white/5 border-white/5 hover:border-luxury-bronze/30 transition-colors"
                spotlightColor="rgba(255, 255, 255, 0.08)" // Subtle white light for clarity
              >
                
                {/* Icon Circle */}
                <div className="relative mx-auto w-24 h-24 mb-8">
                  {/* Glow behind icon */}
                  <div className="absolute inset-0 bg-luxury-bronze/20 blur-xl rounded-full scale-50 group-hover:scale-100 transition-transform duration-500"></div>
                  
                  {/* The Main Circle */}
                  <div className="relative w-full h-full bg-deep-charcoal border border-white/10 rounded-full flex items-center justify-center shadow-lg group-hover:border-luxury-bronze group-hover:shadow-luxury-bronze/20 transition-all duration-300">
                    <step.icon className="w-10 h-10 text-white group-hover:text-luxury-bronze transition-colors duration-300 stroke-[1.5]" />
                  </div>

                  {/* Number Badge */}
                  <div className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-white text-deep-charcoal flex items-center justify-center text-xs font-bold shadow-lg z-20">
                    {index + 1}
                  </div>
                </div>
                
                {/* Text Content */}
                <h3 className="font-serif text-2xl text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mx-auto font-light">
                  {step.desc}
                </p>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        {/* --- Trust Footer --- */}
        <div className="mt-20 pt-10 border-t border-white/10">
           <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-16 opacity-70 hover:opacity-100 transition-opacity">
              {[
                "Regulated by the GPhC",
                "UK Licensed Medication", 
                "SSL Encrypted Data"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-3 cursor-default">
                   <div className="w-6 h-6 rounded-full bg-luxury-bronze/20 flex items-center justify-center">
                      <Check className="w-3.5 h-3.5 text-luxury-bronze stroke-2" />
                   </div>
                   <span className="text-sm font-medium text-gray-300">
                     {text}
                   </span>
                </div>
              ))}
           </div>
        </div>

      </div>
    </section>
  );
}