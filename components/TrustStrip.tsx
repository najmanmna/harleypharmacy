"use client";

import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const reviews = [
  "Excellent service, delivered next day.",
  "The doctor was so helpful and professional.",
  "Finally a pharmacy that feels modern.",
  "Discreet packaging and fast approval.",
  "Highly recommend for private prescriptions."
];

export default function TrustStrip() {
  return (
    <div className="bg-luxury-bronze/5 border-b border-luxury-bronze/10 py-4 overflow-hidden flex relative z-20">
      
      {/* Gradient Masks to fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-medical-white to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-medical-white to-transparent z-10"></div>

      <motion.div 
        className="flex whitespace-nowrap gap-16"
        animate={{ x: "-50%" }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {[...reviews, ...reviews, ...reviews].map((text, i) => (
          <div key={i} className="flex items-center gap-2">
             <div className="flex gap-0.5">
               {[1,2,3,4,5].map(s => (
                 <Star key={s} className="w-3 h-3 fill-luxury-bronze text-luxury-bronze" />
               ))}
             </div>
             <span className="text-sm font-medium text-deep-charcoal italic">"{text}"</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}