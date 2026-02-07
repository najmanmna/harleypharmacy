"use client";

import { ShieldCheck, AlertCircle, Check, ChevronDown, Clock, Star, Microscope, Truck, FileCheck, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useState, useRef } from 'react';

// --- MOCK DATA (Dynamic in real app) ---
const product = {
  title: "Finasteride 1mg",
  subtitle: "Male Pattern Hair Loss",
  price: "£14.00",
  type: "Prescription Only",
  image: "https://www.harleypharmacy.co.uk/wp-content/uploads/2025/11/Landmark-MGT-3-10_-copy.png",
  description: "Clinically proven to stop hair loss and promote regrowth in 90% of men. Blocks the DHT hormone responsible for follicle shrinkage.",
  safety: [
    "Requires Doctor Approval",
    "Not suitable for women",
    "Results visible in 3-6 months"
  ]
};

export default function TreatmentPage() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
      target: targetRef,
      offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <div className="min-h-screen bg-[#FDFBF7] p-32">
      
      {/* --- SECTION 1: THE CLINICAL HERO --- */}
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
          
          {/* LEFT: Sticky Image */}
          <div className="w-full md:w-1/2 relative">
            <div className="sticky top-32">
              <motion.div 
                 initial={{ opacity: 0, scale: 0.95 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 0.8 }}
                 className="relative aspect-square rounded-[2rem] overflow-hidden shadow-2xl bg-white border border-gray-100"
              >
                 <img src={product.image} alt={product.title} className="w-full h-full object-contain" />
                 
                 {/* Floating Trust Badge */}
                 <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 border border-gray-100 shadow-sm z-10">
                    <ShieldCheck className="w-4 h-4 text-green-600" />
                    <span className="text-xs font-bold text-deep-charcoal uppercase tracking-wider">UK Licensed Meds</span>
                 </div>
              </motion.div>

              {/* Trust Signals */}
              <div className="hidden md:flex justify-center gap-8 mt-8 opacity-60">
                 <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span className="text-xs">Next Day Delivery</span>
                 </div>
                 <div className="flex items-center gap-2">
                    <Star className="w-4 h-4" />
                    <span className="text-xs">4.9/5 Patient Rating</span>
                 </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Product Details */}
          <div className="w-full md:w-1/2 pt-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Tags */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="px-3 py-1 bg-luxury-bronze/10 text-luxury-bronze text-[10px] font-bold uppercase tracking-widest rounded-full">
                  {product.type}
                </span>
                <span className="px-3 py-1 bg-red-50 text-red-600 border border-red-100 text-[10px] font-bold uppercase tracking-widest rounded-full flex items-center gap-1">
                   <AlertCircle className="w-3 h-3" />
                   Medical Review Required
                </span>
              </div>

              <h1 className="font-serif text-4xl md:text-6xl text-deep-charcoal mb-4 leading-[0.9]">
                {product.title}
              </h1>
              
              <div className="flex items-baseline gap-4 mb-8 border-b border-gray-200 pb-8">
                 <span className="text-3xl font-light text-gray-900">{product.price}</span>
                 <span className="text-sm text-gray-400">per month</span>
              </div>

              <p className="text-gray-500 text-lg font-light leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Clinical Governance Box */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 mb-10 shadow-sm">
                 <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Safety Profile</h4>
                 <ul className="space-y-3">
                    {product.safety.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-deep-charcoal font-medium">
                         <div className="mt-0.5 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                            <Check className="w-3 h-3 text-green-600" />
                         </div>
                         {item}
                      </li>
                    ))}
                 </ul>
              </div>

              {/* DESKTOP CTA */}
              <div className="hidden md:block mb-12">
                 <button className="w-full bg-deep-charcoal text-white py-5 rounded-xl font-bold text-lg hover:bg-black transition-all shadow-xl shadow-deep-charcoal/20 flex items-center justify-center gap-3 group">
                    Start Consultation
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                       <ShieldCheck className="w-4 h-4" />
                    </div>
                 </button>
                 <p className="text-center text-xs text-gray-400 mt-4">
                    Zero risk. No payment taken until doctor approves.
                 </p>
              </div>

              {/* Accordions */}
              <div className="space-y-4">
                 <AccordionItem title="How it works" content="Complete a short medical questionnaire. Our doctors review your answers within 2 hours. If suitable, your medication is dispatched via tracked 24h delivery." />
                 <AccordionItem title="Side Effects" content="Common side effects may include... (Full patient leaflet data goes here)." />
                 <AccordionItem title="Ingredients" content="Active Ingredient: Finasteride 1mg. Other ingredients: Lactose monohydrate, microcrystalline cellulose..." />
              </div>

            </motion.div>
          </div>
        </div>
      </div>

      {/* --- SECTION 2: THE SCIENCE (Dark Mode) --- */}
      <section className="bg-deep-charcoal text-white py-24 my-12 relative overflow-hidden">
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-luxury-bronze/10 rounded-full blur-[100px] pointer-events-none"></div>
         
         <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
               <span className="text-luxury-bronze font-bold tracking-widest text-xs uppercase mb-4 block">Mechanism of Action</span>
               <h2 className="font-serif text-3xl md:text-4xl">Why it works.</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <ScienceCard 
                  icon={Microscope} 
                  title="DHT Blocker" 
                  desc="Finasteride inhibits Type II 5-alpha-reductase, preventing testosterone from converting into DHT." 
               />
               <ScienceCard 
                  icon={ShieldCheck} 
                  title="Follicle Protection" 
                  desc="By lowering scalp DHT levels by up to 60%, hair follicles stop shrinking and can recover." 
               />
               <ScienceCard 
                  icon={Clock} 
                  title="Long-Term Regrowth" 
                  desc="With daily use, the hair growth cycle normalizes, leading to thicker, fuller coverage." 
               />
            </div>
         </div>
      </section>

      {/* --- SECTION 3: THE PROCESS (The Middleware Visualization) --- */}
      <section className="py-24 bg-white" ref={targetRef}>
         <div className="max-w-7xl mx-auto px-6">
            <motion.div style={{ opacity }} className="text-center mb-16">
               <h2 className="font-serif text-3xl md:text-4xl text-deep-charcoal mb-4">Your Patient Journey</h2>
               <p className="text-gray-500">From screen to door in 3 secure steps.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
               {/* Connector Line */}
               <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-gray-200 z-0"></div>

               <ProcessStep number="01" title="Digital Assessment" desc="Answer 15 clinical questions about your health history." icon={FileCheck} />
               <ProcessStep number="02" title="Prescriber Review" desc="A UK-registered doctor reviews your case instantly." icon={Microscope} />
               <ProcessStep number="03" title="Discreet Dispatch" desc="Approved? We ship immediately in plain packaging." icon={Truck} />
            </div>
         </div>
      </section>

      {/* --- MOBILE STICKY BAR (Crucial for Conversion) --- */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-100 md:hidden z-50 shadow-[0_-5px_20px_rgba(0,0,0,0.05)]">
         <div className="flex items-center gap-4">
            <div className="flex-1">
               <div className="text-xs text-gray-400 uppercase font-bold tracking-wider">Total</div>
               <div className="text-lg font-serif text-deep-charcoal">{product.price}</div>
            </div>
            <button className="bg-deep-charcoal text-white px-6 py-3 rounded-lg font-bold text-sm shadow-lg flex items-center gap-2">
               Start Consultation <ArrowRight className="w-4 h-4" />
            </button>
         </div>
      </div>

    </div>
  );
}

// --- SUB-COMPONENT: ACCORDION ---
function AccordionItem({ title, content }: { title: string, content: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-lg font-serif text-deep-charcoal group-hover:text-luxury-bronze transition-colors">
          {title}
        </span>
        <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-500 font-light leading-relaxed">
              {content}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// --- SUB-COMPONENT: SCIENCE CARD ---
function ScienceCard({ icon: Icon, title, desc }: any) {
   return (
      <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-luxury-bronze/30 transition-colors">
         <div className="w-12 h-12 rounded-full bg-luxury-bronze/20 flex items-center justify-center mb-6 text-luxury-bronze">
            <Icon className="w-6 h-6" />
         </div>
         <h3 className="text-xl font-serif mb-3">{title}</h3>
         <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
      </div>
   )
}

// --- SUB-COMPONENT: PROCESS STEP ---
function ProcessStep({ number, title, desc, icon: Icon }: any) {
   return (
      <div className="relative z-10 flex flex-col items-center text-center">
         <div className="w-24 h-24 bg-white rounded-full border border-gray-100 shadow-xl flex items-center justify-center mb-6">
            <Icon className="w-8 h-8 text-deep-charcoal" />
         </div>
         <div className="text-xs font-bold text-luxury-bronze uppercase tracking-widest mb-2">Step {number}</div>
         <h3 className="text-2xl font-serif text-deep-charcoal mb-3">{title}</h3>
         <p className="text-gray-500 text-sm max-w-xs">{desc}</p>
      </div>
   )
}