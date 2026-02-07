"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Lock, Globe, ShieldCheck, Activity, Terminal, Database } from 'lucide-react';
import SpotlightCard from '@/components/ui/SpotlightCard';
import PartnerModal from '@/components/PartnerModal';

export default function ClinicsLanding() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="bg-white">
      
      {/* --- SECTION 1: THE B2B HERO --- */}
      <section className="relative pt-32 pb-20 bg-deep-charcoal overflow-hidden text-white">
        {/* Tech Background Overlay */}
        <div className="absolute inset-0 z-0">
           <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-luxury-bronze/10 rounded-full blur-[120px] pointer-events-none"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            <div className="w-full lg:w-1/2">
               <motion.div 
                 initial={{ opacity: 0, x: -20 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ duration: 0.8 }}
               >
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-[10px] font-mono text-green-500 tracking-widest uppercase">API-First Infrastructure</span>
                  </div>
                  <h1 className="font-serif text-5xl md:text-7xl mb-8 leading-[0.9] tracking-tight">
                    Scale your Clinic with <br />
                    <span className="text-luxury-bronze italic">Digital Pharmacy.</span>
                  </h1>
                  <p className="text-gray-400 text-lg mb-10 font-light leading-relaxed max-w-lg">
                    Ditch the paperwork. Plug your clinic directly into Harley Street’s most advanced digital prescribing engine.
                  </p>
                  <button 
                    onClick={() => setIsModalOpen(true)}
                    className="bg-white text-deep-charcoal px-10 py-5 rounded-xl font-bold hover:bg-gray-100 transition-all flex items-center gap-3 group shadow-xl"
                  >
                    Request Partner Access
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
               </motion.div>
            </div>

            {/* Dashboard Visual (The "Scanner" UI) */}
            <div className="w-full lg:w-1/2">
               <SpotlightCard spotlightColor="rgba(255, 255, 255, 0.1)" className="shadow-2xl">
                  <div className="bg-black/20 px-6 py-4 border-b border-white/5 flex items-center justify-between">
                     <div className="flex gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/40"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/40"></div>
                     </div>
                     <span className="text-[10px] font-mono text-gray-500">harley_os_v2.0</span>
                  </div>
                  <div className="p-8 space-y-8">
                     <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                           <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Prescription Latency</div>
                           <div className="text-2xl font-mono text-green-400">42ms</div>
                        </div>
                        <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                           <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Compliance Score</div>
                           <div className="text-2xl font-mono text-white">99.9%</div>
                        </div>
                     </div>
                     <div className="space-y-4 opacity-40">
                        <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                           <motion.div initial={{ width: 0 }} animate={{ width: '70%' }} transition={{ duration: 2, repeat: Infinity }} className="h-full bg-luxury-bronze"></motion.div>
                        </div>
                        <div className="h-2 w-2/3 bg-white/10 rounded-full"></div>
                     </div>
                  </div>
               </SpotlightCard>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: B2B FEATURES --- */}
      <section className="py-24 bg-white">
         <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <Feature icon={Terminal} title="Headless API" desc="Integrate prescription ordering directly into your patient management software via secure REST API." />
               <Feature icon={Database} title="Real-time Inventory" desc="Live access to our Harley Street stock levels. Know what’s available before you prescribe." />
               <Feature icon={ShieldCheck} title="Automated Compliance" desc="Our system automatically checks prescriber credentials and patient history against GPhC standards." />
            </div>
         </div>
      </section>

      {/* --- SECTION 3: THE CALL TO ACTION --- */}
      <section className="py-24 bg-gray-50">
         <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="font-serif text-4xl md:text-5xl text-deep-charcoal mb-8">
               Ready to upgrade your <br /> clinical infrastructure?
            </h2>
            <p className="text-gray-500 text-lg mb-12 font-light">
               Join 20+ UK clinics scaling their operations with Harley Pharmacy. Applications for the Q1 Partner intake are now open.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
               <button 
                 onClick={() => setIsModalOpen(true)}
                 className="bg-deep-charcoal text-white px-8 py-5 rounded-xl font-bold shadow-xl shadow-deep-charcoal/20 hover:bg-black transition-all"
               >
                 Request a Demo
               </button>
               <button className="bg-white text-deep-charcoal border border-gray-200 px-8 py-5 rounded-xl font-bold hover:bg-gray-50 transition-all">
                 View Documentation
               </button>
            </div>
         </div>
      </section>

      {/* Partner Lead Gen Modal */}
      <PartnerModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        tierTitle="Clinic Partnership" 
      />

    </main>
  );
}

function Feature({ icon: Icon, title, desc }: any) {
   return (
      <div className="p-8 rounded-3xl bg-gray-50 border border-transparent hover:border-gray-200 transition-all group">
         <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:bg-luxury-bronze group-hover:text-white transition-all">
            <Icon className="w-6 h-6" />
         </div>
         <h3 className="text-xl font-serif text-deep-charcoal mb-3">{title}</h3>
         <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
      </div>
   );
}