"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Quote, ShieldCheck, Zap, Heart, FileCheck } from 'lucide-react';

export default function Authority() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 100]); // Parallax effect
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section id="authority" className="py-32 bg-[#F5F5F0] relative overflow-hidden">
      
      {/* Background Watermark */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-[0.03]">
         <div className="font-serif text-[20vw] leading-none text-deep-charcoal whitespace-nowrap -ml-20">
            Harley St.
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row gap-16 items-center">
        
        {/* --- LEFT: The "Roots" Image --- */}
        <div className="w-full md:w-1/2 relative group" ref={containerRef}>
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
             <motion.div style={{ y }} className="absolute inset-0 bg-gray-900">
                {/* Image: Suggests 'Traditional Care' meeting 'Modern Tech' */}
                <img 
                  src="https://images.unsplash.com/photo-1576602976047-174e57a47881?q=80&w=1969&auto=format&fit=crop" 
                  alt="Clinical Excellence" 
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700"
                />
             </motion.div>
             
             {/* Overlay Content */}
             <div className="absolute bottom-8 left-8 text-white">
                <div className="text-xs font-bold tracking-widest uppercase mb-2">Since 2012</div>
                <div className="font-serif text-2xl">Local Roots. National Reach.</div>
             </div>
          </div>
          
          {/* Floating Badge */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-xl animate-[float_6s_ease-in-out_infinite]">
             <img src="/logo.png" alt="Seal" className="w-16 h-auto opacity-20" />
          </div>
        </div>

        {/* --- RIGHT: The Story & Mission --- */}
        <div className="w-full md:w-1/2">
          <motion.div style={{ opacity }}>
            <Quote className="w-10 h-10 text-luxury-bronze mb-6 opacity-50" />
            
            <h2 className="font-serif text-3xl md:text-5xl text-deep-charcoal mb-8 leading-tight">
              "Our mission is to make pharmacy access <span className="italic text-luxury-bronze">simple, compliant, and scalable</span> for everyone."
            </h2>
            
            <div className="space-y-6 text-gray-500 text-lg font-light leading-relaxed mb-10">
              <p>
                Founded as a traditional pharmacy, serving communities with care and reliability. Today, we combine that same patient-first ethos with advanced digital technology.
              </p>
              <p>
                From our roots as a local pharmacy, Harley has evolved into a digital-first healthcare solutions provider for patients, clinics, and businesses across the UK.
              </p>
            </div>

            {/* The Values Grid (Replaces Signature) */}
            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-gray-200">
               <ValueItem icon={ShieldCheck} title="Trust" desc="Partner confidence is our priority." />
               <ValueItem icon={Zap} title="Innovation" desc="Technology to streamline care." />
               <ValueItem icon={Heart} title="Care" desc="An extension of your team." />
               <ValueItem icon={FileCheck} title="Compliance" desc="Highest regulatory standards." />
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}

// Sub-component for values
function ValueItem({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <div className="flex gap-3">
      <div className="mt-1">
        <Icon className="w-5 h-5 text-luxury-bronze" />
      </div>
      <div>
        <h4 className="font-bold text-deep-charcoal text-sm uppercase tracking-wide">{title}</h4>
        <p className="text-xs text-gray-500 mt-1">{desc}</p>
      </div>
    </div>
  );
}