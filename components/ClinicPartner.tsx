"use client";

import { ArrowRight, ShieldCheck, Zap, Activity, Lock, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

// Simulated "Live Data" for the dashboard
const activityLog = [
  { id: 1, doc: "Dr. Sarah M.", action: "Issued Prescription", time: "Just now", status: "success" },
  { id: 2, doc: "The Skin Clinic", action: "Order Dispatched", time: "2m ago", status: "success" },
  { id: 3, doc: "Dr. James W.", action: "Identity Verified", time: "5m ago", status: "secure" },
  { id: 4, doc: "Harley St. Aesthetics", action: "Stock Request", time: "12m ago", status: "pending" },
];

export default function ClinicPartner() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    // CHANGED: Replaced bg-[#0F1115] with bg-deep-charcoal to match the rest of the site
    <section className="py-32 bg-deep-charcoal text-white overflow-hidden relative border-t border-white/5">
      
      {/* --- LAYER 1: Tech Background --- */}
      <div className="absolute inset-0 z-0">
         {/* Animated Grid */}
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>
         
         {/* Ambient Glows */}
         <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-luxury-bronze/5 rounded-full blur-[120px] pointer-events-none"></div>
         <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          {/* --- LEFT: The Executive Pitch --- */}
          <div className="w-full lg:w-1/2">
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
            >
               <div className="flex items-center gap-2 mb-8">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-xs font-mono text-green-500 tracking-widest uppercase">System Operational</span>
               </div>
               
               <h2 className="font-serif text-5xl md:text-6xl mb-6 leading-[1.1] tracking-tight">
                 The Infrastructure for <br />
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-luxury-bronze to-white">Private Healthcare.</span>
               </h2>
               
               <p className="text-gray-400 text-lg mb-10 font-light leading-relaxed max-w-lg border-l-2 border-white/10 pl-6">
                 Stop managing paper. Start managing growth. Our API-first portal allows clinics to issue GPhC-compliant digital prescriptions instantly.
               </p>

               {/* Feature Grid */}
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  <Feature 
                    icon={Zap} 
                    title="Instant Dispensing" 
                    desc="Prescriptions routed to pharmacy in <50ms." 
                  />
                  <Feature 
                    icon={Lock} 
                    title="Bank-Grade Security" 
                    desc="AES-256 encryption for all patient data." 
                  />
                  <Feature 
                    icon={Globe} 
                    title="Nationwide Logistics" 
                    desc="Next-day dispatch to 99% of UK postcodes." 
                  />
                  <Feature 
                    icon={ShieldCheck} 
                    title="Compliance Automations" 
                    desc="Real-time GPhC & CQC checks built-in." 
                  />
               </div>

               <button className="bg-white text-deep-charcoal px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition-all flex items-center gap-3 group shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                 Access Partner Portal
                 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
               </button>
            </motion.div>
          </div>

          {/* --- RIGHT: The Live Dashboard Simulation --- */}
          <div className="w-full lg:w-1/2 perspective-1000">
             <motion.div 
                initial={{ rotateY: 10, rotateX: 5, opacity: 0 }}
                whileInView={{ rotateY: -5, rotateX: 5, opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative"
             >
                {/* The "Glass" Card */}
                <div className="relative bg-[#1A1D24]/80 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl shadow-black/50">
                   
                   {/* Scanning Beam Animation */}
                   <div className="absolute inset-0 bg-gradient-to-b from-transparent via-luxury-bronze/5 to-transparent h-[20%] w-full animate-[scan_4s_linear_infinite] pointer-events-none z-20"></div>

                   {/* Window Controls */}
                   <div className="flex items-center gap-2 px-6 py-4 border-b border-white/5 bg-white/5">
                      <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                      <div className="ml-auto text-xs text-gray-500 font-mono">live_feed.json</div>
                   </div>

                   {/* The Content */}
                   <div className="p-8 space-y-6">
                      
                      {/* Stats Row */}
                      <div className="grid grid-cols-2 gap-4 mb-8">
                          <div className="p-4 rounded-xl bg-black/40 border border-white/5">
                             <div className="text-gray-400 text-xs uppercase tracking-wider mb-1">Active Prescribers</div>
                             <div className="text-2xl font-mono text-white">842</div>
                          </div>
                          <div className="p-4 rounded-xl bg-black/40 border border-white/5">
                             <div className="text-gray-400 text-xs uppercase tracking-wider mb-1">Avg. Dispense Time</div>
                             <div className="text-2xl font-mono text-green-400">14m 32s</div>
                          </div>
                      </div>

                      {/* Live List */}
                      <div className="space-y-3">
                          <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Real-time Activity</div>
                          
                          {mounted && activityLog.map((log, i) => (
                             <motion.div 
                               key={log.id}
                               initial={{ opacity: 0, x: -20 }}
                               animate={{ opacity: 1, x: 0 }}
                               transition={{ delay: i * 0.2 }}
                               className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-white/5"
                             >
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                                   log.status === 'success' ? 'bg-green-500/20 text-green-500' : 
                                   log.status === 'secure' ? 'bg-blue-500/20 text-blue-500' : 'bg-yellow-500/20 text-yellow-500'
                                }`}>
                                   <Activity className="w-4 h-4" />
                                </div>
                                <div>
                                   <div className="text-sm font-medium text-gray-200">{log.action}</div>
                                   <div className="text-xs text-gray-500">{log.doc} • {log.time}</div>
                                </div>
                                <div className="ml-auto">
                                   <div className={`w-2 h-2 rounded-full ${
                                      log.status === 'success' ? 'bg-green-500' : 
                                      log.status === 'secure' ? 'bg-blue-500' : 'bg-yellow-500'
                                   }`}></div>
                                </div>
                             </motion.div>
                          ))}
                      </div>

                   </div>
                </div>

                {/* Decorative Elements around card */}
                <div className="absolute -z-10 -right-10 -bottom-10 w-full h-full border border-luxury-bronze/20 rounded-2xl"></div>

             </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

// Sub-component for clean code
function Feature({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <div className="flex gap-4 group">
      <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-luxury-bronze group-hover:text-white transition-colors duration-300">
        <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
      </div>
      <div>
        <h4 className="text-base font-bold text-gray-200 mb-1">{title}</h4>
        <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors">{desc}</p>
      </div>
    </div>
  );
}