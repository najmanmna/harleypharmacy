"use client";

import { ShieldCheck, Zap, MessageCircle, Truck, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

// --- THE DATA ---
const features = [
  {
    id: 'trust',
    title: "GPhC Regulated",
    subtitle: "The Gold Standard",
    desc: "Fully licensed by the General Pharmaceutical Council. We don't just 'follow' the rules; we built our digital architecture around them.",
    color: "bg-luxury-bronze",
    icon: ShieldCheck,
    visual: "Badge"
  },
  {
    id: 'speed',
    title: "Next-Day Dispatch",
    subtitle: "Live Logistics",
    desc: "Our API connects directly to the warehouse floor. Orders are picked, packed, and dispatched in under 4 hours, nationwide.",
    color: "bg-deep-charcoal",
    icon: Truck,
    visual: "Map"
  },
  {
    id: 'tech',
    title: "Digital First",
    subtitle: "API Infrastructure",
    desc: "No paper scripts. No fax machines. Just secure, encrypted JSON payloads moving instantly between clinic and pharmacy.",
    color: "bg-blue-600",
    icon: Zap,
    visual: "Code"
  },
  {
    id: 'support',
    title: "Expert Care",
    subtitle: "Pharmacist Led",
    desc: "Real humans, real time. Our clinical team is available via secure chat to answer patient queries and handle prescription anomalies.",
    color: "bg-green-600",
    icon: MessageCircle,
    visual: "Chat"
  }
];

export default function WhyChooseUs() {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <section className="bg-white py-12 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-32 text-center max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl md:text-6xl text-deep-charcoal mb-6">
            Not Just a Pharmacy. <br />
            <span className="text-luxury-bronze italic">An Infrastructure.</span>
          </h2>
          <p className="text-gray-500 text-lg">
            Scroll to explore the engine powering private healthcare.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          {/* --- LEFT: SCROLLABLE CONTENT --- */}
          {/* On mobile, we remove the huge bottom padding so it feels like a normal list */}
          <div className="w-full lg:w-1/2 flex flex-col gap-16 lg:gap-[50vh] lg:pb-[50vh]">
            {features.map((feature, index) => (
              <FeatureBlock 
                key={feature.id} 
                feature={feature} 
                index={index} 
                setActiveFeature={setActiveFeature} 
              />
            ))}
          </div>

          {/* --- RIGHT: STICKY VISUALS (DESKTOP ONLY) --- */}
          <div className="hidden lg:block w-1/2 relative">
            <div className="sticky top-32 h-[500px] w-full bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 shadow-2xl shadow-gray-200/50">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeature}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="absolute inset-0 flex items-center justify-center p-12"
                >
                  {/* Dynamic Visual Rendering */}
                  {features[activeFeature].visual === "Badge" && <TrustVisual />}
                  {features[activeFeature].visual === "Map" && <SpeedVisual />}
                  {features[activeFeature].visual === "Code" && <TechVisual />}
                  {features[activeFeature].visual === "Chat" && <SupportVisual />}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// --- SUB-COMPONENT: FEATURE BLOCK (Handles Mobile & Desktop) ---
function FeatureBlock({ feature, index, setActiveFeature }: any) {
  return (
    <motion.div
      onViewportEnter={() => setActiveFeature(index)}
      viewport={{ margin: "-50% 0px -50% 0px" }} // Trigger when center of screen
      className="flex flex-col justify-center min-h-[auto] lg:min-h-[40vh]"
    >
      {/* --- MOBILE ONLY VISUAL --- */}
      {/* This block puts the visual *above* the text on mobile, so they see the animation */}
      <div className="lg:hidden mb-8 w-full h-64 bg-gray-50 rounded-2xl border border-gray-100 flex items-center justify-center overflow-hidden shadow-inner">
         {feature.visual === "Badge" && <div className="scale-75"><TrustVisual /></div>}
         {feature.visual === "Map" && <div className="w-full h-full"><SpeedVisual /></div>}
         {feature.visual === "Code" && <div className="scale-90"><TechVisual /></div>}
         {feature.visual === "Chat" && <div className="scale-90"><SupportVisual /></div>}
      </div>

      <div className="flex items-center gap-3 mb-4">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-lg ${feature.color}`}>
           <feature.icon className="w-5 h-5" />
        </div>
        <span className={`text-sm font-bold uppercase tracking-widest ${feature.color.replace('bg-', 'text-')}`}>
          {feature.subtitle}
        </span>
      </div>
      
      <h3 className="text-3xl md:text-5xl font-serif text-deep-charcoal mb-4 md:mb-6">
        {feature.title}
      </h3>
      
      <p className="text-lg md:text-xl text-gray-500 font-light leading-relaxed max-w-md">
        {feature.desc}
      </p>
    </motion.div>
  );
}


// --- VISUAL 1: TRUST (Spinning Seal) ---
function TrustVisual() {
  return (
    <div className="relative w-64 h-64 flex items-center justify-center">
       {/* Rotating Text Ring */}
       <motion.div 
         animate={{ rotate: 360 }}
         transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
         className="absolute inset-0 w-full h-full"
       >
         <svg viewBox="0 0 100 100" className="w-full h-full fill-current text-gray-200">
            <path id="curve" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent"/>
            <text fontSize="11" letterSpacing="2">
              <textPath href="#curve">
                OFFICIAL • GPHC REGULATED • UK LICENSED •
              </textPath>
            </text>
         </svg>
       </motion.div>
       
       {/* Center Badge */}
       <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="w-32 h-32 bg-luxury-bronze rounded-full flex items-center justify-center shadow-xl shadow-luxury-bronze/30 z-10"
       >
          <ShieldCheck className="w-16 h-16 text-white" />
       </motion.div>

       {/* Floating Particles */}
       <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
             <motion.div
               key={i}
               className="absolute w-3 h-3 bg-luxury-bronze/20 rounded-full"
               animate={{ y: [0, -40, 0], opacity: [0, 1, 0] }}
               transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }}
               style={{ left: `${Math.random() * 100}%`, top: '60%' }}
             />
          ))}
       </div>
    </div>
  );
}

// --- VISUAL 2: SPEED (Map Pulse) ---
function SpeedVisual() {
  return (
    <div className="relative w-full h-full bg-[#1A1D24] rounded-none md:rounded-2xl overflow-hidden flex items-center justify-center">
       {/* Grid */}
       <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:40px_40px]"></div>
       
       {/* Map Outline (Simple CSS Shape) */}
       <div className="relative z-10 opacity-30">
          <Truck className="w-48 h-48 text-white stroke-[0.5]" />
       </div>

       {/* Pulse Effect */}
       <div className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <span className="flex h-32 w-32 relative">
             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-deep-charcoal opacity-75 border border-white"></span>
             <span className="relative inline-flex rounded-full h-32 w-32 border-2 border-white items-center justify-center">
                <div className="text-center">
                   <div className="text-3xl font-bold text-white font-mono">24H</div>
                   <div className="text-[10px] text-white uppercase tracking-widest">ETA</div>
                </div>
             </span>
          </span>
       </div>
    </div>
  );
}

// --- VISUAL 3: TECH (Code Window) ---
function TechVisual() {
  return (
    <div className="w-full max-w-sm bg-gray-900 rounded-xl shadow-2xl overflow-hidden border border-gray-800 font-mono text-xs">
      <div className="bg-gray-800 px-4 py-2 flex gap-2">
         <div className="w-3 h-3 rounded-full bg-red-500"></div>
         <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
         <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      <div className="p-6 space-y-4 text-gray-300">
         <div className="flex gap-2">
            <span className="text-green-400">POST</span>
            <span>/api/v1/prescription_create</span>
         </div>
         <div className="pl-4 border-l border-gray-700 space-y-2">
            <div><span className="text-purple-400">"patient_id"</span>: <span className="text-blue-400">"usr_8842"</span>,</div>
            <div><span className="text-purple-400">"drug_code"</span>: <span className="text-blue-400">"rx_amox_500"</span>,</div>
            <div><span className="text-purple-400">"approval_status"</span>: <span className="text-yellow-400">"PENDING_REVIEW"</span></div>
         </div>
         <motion.div 
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 1, duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
           className="h-4 w-2 bg-green-500"
         ></motion.div>
      </div>
    </div>
  );
}

// --- VISUAL 4: SUPPORT (Chat) ---
function SupportVisual() {
  return (
     <div className="w-full max-w-xs space-y-4 p-4">
        {/* Incoming Message */}
        <motion.div 
           initial={{ x: -20, opacity: 0 }}
           whileInView={{ x: 0, opacity: 1 }} // Changed to whileInView for mobile scroll trigger
           viewport={{ once: true }}
           className="bg-white p-4 rounded-2xl rounded-tl-none shadow-lg border border-gray-100 max-w-[80%]"
        >
           <p className="text-sm text-gray-600">Is this safe to take with Ibuprofen?</p>
        </motion.div>

        {/* Reply Message */}
        <motion.div 
           initial={{ x: 20, opacity: 0 }}
           whileInView={{ x: 0, opacity: 1 }} // Changed to whileInView for mobile scroll trigger
           viewport={{ once: true }}
           transition={{ delay: 0.5 }}
           className="bg-green-600 p-4 rounded-2xl rounded-tr-none shadow-lg ml-auto max-w-[85%]"
        >
           <p className="text-sm text-white">Hi there! Yes, but please take them 2 hours apart to be safe.</p>
           <div className="mt-2 flex items-center gap-1 text-[10px] text-green-100 opacity-80">
              <CheckCircle2 className="w-3 h-3" />
              <span>Verified by Dr. Sarah</span>
           </div>
        </motion.div>
     </div>
  );
}