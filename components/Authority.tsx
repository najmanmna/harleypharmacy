"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Quote } from 'lucide-react';

export default function Authority() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Parallax effect for the background
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={ref} className="relative py-32 overflow-hidden flex items-center justify-center">
      
      {/* --- Parallax Background --- */}
      <div className="absolute inset-0 z-0 h-[120%] -top-[10%]">
        <motion.div style={{ y }} className="relative w-full h-full">
           <img 
             src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2880&auto=format&fit=crop" 
             alt="Abstract Medical Background" 
             className="w-full h-full object-cover"
           />
           {/* Heavy Overlay for text readability */}
           <div className="absolute inset-0 bg-deep-charcoal/90"></div>
        </motion.div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        
        {/* The Quote */}
        <motion.div 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <Quote className="w-12 h-12 text-luxury-bronze mx-auto mb-8 opacity-50" />
          
          <h2 className="font-serif text-3xl md:text-5xl text-white leading-tight mb-8">
            "We believe healthcare should be as <br className="hidden md:block" />
            <span className="text-luxury-bronze italic">accessible</span> as it is <span className="text-luxury-bronze italic">exceptional</span>."
          </h2>
          
          <div className="flex flex-col items-center gap-2 mb-16">
             <span className="text-white font-bold tracking-wider uppercase text-sm">Dr. Sarah Jenkins</span>
             <span className="text-gray-400 text-xs">Chief Medical Officer, Harley Pharmacy</span>
          </div>
        </motion.div>

        {/* The "As Seen In" Divider */}
        <div className="border-t border-white/10 w-full mb-12"></div>

        {/* Press Logos (Text based for cleanliness) */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-center opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
           {['VOGUE', 'GQ', 'WIRED', 'Men\'s Health', 'Forbes'].map((brand, i) => (
             <span key={i} className="text-white font-serif text-xl md:text-2xl font-bold tracking-widest cursor-default">
               {brand}
             </span>
           ))}
        </div>

      </div>
    </section>
  );
}