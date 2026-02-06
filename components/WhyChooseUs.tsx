"use client";

import { ShieldCheck, Zap, MessageCircle, ArrowUpRight, Truck } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

// --- TILT CARD WRAPPER ---
// Adds a subtle 3D tilt effect on hover for that high-end feel
function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    x.set(clientX - left - width / 2);
    y.set(clientY - top - height / 2);
  }

  const rotateX = useTransform(mouseY, [-300, 300], [5, -5]); // Inverted for natural tilt
  const rotateY = useTransform(mouseX, [-300, 300], [-5, 5]);

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={onMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      className={`relative hover:z-20 transition-all duration-200 ease-out ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default function WhyChooseUs() {
  return (
    <section className="py-32 bg-[#F9FAFB] overflow-hidden relative">
      {/* Background Noise for Texture */}
      <div className="absolute inset-0 opacity-[0.4] mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="font-serif text-5xl md:text-6xl text-deep-charcoal leading-[0.95] mb-6">
              Not Just a Pharmacy. <br />
              <span className="text-luxury-bronze italic">An Infrastructure.</span>
            </h2>
            <p className="text-gray-500 text-lg font-light max-w-lg border-l-2 border-luxury-bronze/20 pl-6">
              Reinventing the traditional model with a digital-first engine built for speed, safety, and scale.
            </p>
          </motion.div>
          
          <motion.div 
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="hidden md:block"
          >
             <div className="w-24 h-24 rounded-full border border-gray-200 flex items-center justify-center animate-[spin_10s_linear_infinite]">
                <svg viewBox="0 0 100 100" className="w-full h-full fill-current text-gray-300">
                    <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent"/>
                    <text fontSize="14" fontWeight="bold" letterSpacing="2">
                      <textPath href="#circlePath">SCROLL • DISCOVER • SCROLL •</textPath>
                    </text>
                 </svg>
             </div>
          </motion.div>
        </div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 h-auto md:h-[650px] perspective-1000">
          
          {/* --- CARD 1: TRUST (Vertical) --- */}
          <TiltCard className="md:col-span-1 md:row-span-2 h-full">
            <div className="h-full bg-white rounded-[2rem] p-10 shadow-sm border border-gray-100 flex flex-col justify-between overflow-hidden group">
              <div className="absolute top-0 right-0 w-80 h-80 bg-gray-50 rounded-full blur-3xl -mr-20 -mt-20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-luxury-bronze text-white flex items-center justify-center mb-8 shadow-lg shadow-luxury-bronze/20">
                   <ShieldCheck className="w-7 h-7" />
                </div>
                <h3 className="text-3xl font-serif text-deep-charcoal mb-4">GPhC <br/>Regulated</h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-[200px]">
                  Licensed by the General Pharmaceutical Council. 100% compliant.
                </p>
              </div>

              {/* Animated Badge */}
              <div className="relative z-10 mt-auto pt-12 flex justify-center">
                 <div className="relative w-40 h-40 border border-gray-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <div className="absolute inset-2 border border-dashed border-gray-200 rounded-full animate-[spin_20s_linear_infinite]"></div>
                    <div className="text-center">
                       <div className="text-4xl font-serif text-deep-charcoal">10k+</div>
                       <div className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">Patients</div>
                    </div>
                 </div>
              </div>
            </div>
          </TiltCard>

          {/* --- CARD 2: SPEED (Horizontal) --- */}
          <TiltCard className="md:col-span-2 h-full">
            <div className="h-full bg-deep-charcoal text-white rounded-[2rem] p-10 shadow-2xl flex flex-col md:flex-row items-center gap-10 relative overflow-hidden group">
               {/* Grid Background */}
               <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
               
               <div className="flex-1 relative z-10">
                 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 mb-6 backdrop-blur-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                    <span className="text-[10px] font-bold tracking-widest uppercase">Live Logistics</span>
                 </div>
                 
                 <h3 className="text-4xl font-serif mb-4">Next-Day Dispatch</h3>
                 <p className="text-gray-400 text-sm max-w-sm">
                   Orders routed instantly. Fully tracked, insured, and packaged in unbranded boxes.
                 </p>
               </div>

               {/* The "Movement" Visualization */}
               <div className="w-full md:w-64 h-40 bg-white/5 rounded-2xl border border-white/10 relative overflow-hidden group-hover:border-white/20 transition-colors">
                  <div className="absolute inset-0 flex items-center justify-center">
                     <Truck className="w-12 h-12 text-white/20 group-hover:translate-x-20 transition-transform duration-1000 ease-in-out" />
                  </div>
                  {/* Road Lines */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 overflow-hidden">
                     <div className="w-1/2 h-full bg-white/30 animate-[slide_2s_linear_infinite]"></div>
                  </div>
                  {/* Data Stream */}
                  <div className="absolute top-4 right-4 text-right font-mono text-[10px] text-green-400 opacity-60">
                     <div>LAT: 51.5072</div>
                     <div>LNG: 0.1276</div>
                     <div>ETA: 24H</div>
                  </div>
               </div>
            </div>
          </TiltCard>

          {/* --- CARD 3: TECH (Square) --- */}
          <TiltCard className="md:col-span-1 h-full">
            <div className="h-full bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100 flex flex-col justify-between group overflow-hidden">
               <div className="w-12 h-12 rounded-xl bg-gray-50 text-deep-charcoal flex items-center justify-center mb-4">
                   <Zap className="w-5 h-5" />
               </div>
               
               <div className="space-y-2 relative z-10">
                 <h3 className="text-xl font-serif text-deep-charcoal">Digital First</h3>
                 <p className="text-gray-500 text-xs leading-relaxed">
                   API-driven approvals. No paper delays.
                 </p>
               </div>
               
               {/* Visual: Code Block */}
               <div className="mt-6 bg-gray-900 rounded-xl p-4 font-mono text-[10px] text-gray-400 border border-gray-800 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-blue-500"></div>
                  <div className="space-y-1">
                     <div className="flex justify-between">
                       <span>status:</span> <span className="text-green-400">"active"</span>
                     </div>
                     <div className="flex justify-between">
                       <span>latency:</span> <span className="text-blue-400">12ms</span>
                     </div>
                     <div className="flex justify-between opacity-50">
                       <span>encryption:</span> <span>AES-256</span>
                     </div>
                  </div>
               </div>
            </div>
          </TiltCard>

          {/* --- CARD 4: SUPPORT (Square) --- */}
          <TiltCard className="md:col-span-1 h-full">
            <div className="h-full bg-[#F2F0ED] rounded-[2rem] p-8 flex flex-col justify-between group overflow-hidden relative">
               <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="w-6 h-6 text-deep-charcoal" />
               </div>

               <div className="w-12 h-12 rounded-xl bg-white text-deep-charcoal flex items-center justify-center mb-4 shadow-sm">
                   <MessageCircle className="w-5 h-5" />
               </div>

               <div>
                 <h3 className="text-xl font-serif text-deep-charcoal mb-2">Expert Care</h3>
                 <p className="text-gray-500 text-xs">
                   Pharmacist-led support team.
                 </p>
               </div>

               {/* Visual: Avatars */}
               <div className="mt-6 flex -space-x-3">
                  {[1,2,3].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden relative z-0 hover:z-10 hover:scale-110 transition-transform">
                       <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Support" className="w-full h-full object-cover" />
                    </div>
                  ))}
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-deep-charcoal text-white flex items-center justify-center text-[10px] font-bold z-10">
                    +4
                  </div>
               </div>
            </div>
          </TiltCard>

        </div>
      </div>
    </section>
  );
}