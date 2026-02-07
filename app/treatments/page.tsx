"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, ArrowRight, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import SpotlightCard from '@/components/ui/SpotlightCard';

const categories = ["All", "Hair Restoration", "Dermatology", "Men's Health", "Weight Management"];

const treatments = [
  { id: 1, name: "Finasteride", cat: "Hair Restoration", price: "£14.00", slug: "finasteride", type: "Prescription" },
  { id: 2, name: "Tretinoin Cream", cat: "Dermatology", price: "£28.00", slug: "tretinoin", type: "Prescription" },
  { id: 3, name: "Sildenafil", cat: "Men's Health", price: "£12.50", slug: "sildenafil", type: "Prescription" },
  { id: 4, name: "Wegovy", cat: "Weight Management", price: "£149.00", slug: "wegovy", type: "Prescription" },
  // Add more as needed to fill the directory
];

export default function TreatmentsDirectory() {
  const [activeTab, setActiveTab] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = treatments.filter(t => 
    (activeTab === "All" || t.cat === activeTab) &&
    t.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-[#FDFBF7] pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- HEADER & SEARCH --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-xl">
            <span className="text-luxury-bronze font-bold tracking-[0.2em] uppercase text-[10px] mb-4 block">
              Clinical Directory
            </span>
            <h1 className="font-serif text-5xl md:text-6xl text-deep-charcoal leading-[0.9]">
              Find your <span className="italic text-luxury-bronze">Treatment.</span>
            </h1>
          </div>

          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search medications or conditions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-luxury-bronze/10 transition-all shadow-sm"
            />
          </div>
        </div>

        {/* --- CATEGORY FILTERS --- */}
        <div className="flex items-center gap-2 overflow-x-auto pb-6 mb-12 scrollbar-hide">
          <div className="flex items-center gap-2 p-1 bg-gray-100 rounded-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all ${
                  activeTab === cat 
                  ? 'bg-deep-charcoal text-white shadow-lg' 
                  : 'text-gray-500 hover:text-deep-charcoal'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* --- THE DIRECTORY GRID --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Link href={`/treatments/${item.slug}`}>
                  <SpotlightCard 
                    className="p-8 h-full bg-white border-gray-100 shadow-sm hover:shadow-xl group transition-all"
                    spotlightColor="rgba(238, 187, 77, 0.05)"
                  >
                    <div className="flex justify-between items-start mb-12">
                      <div className="px-3 py-1 bg-gray-50 rounded-full border border-gray-100 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                        {item.cat}
                      </div>
                      <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-luxury-bronze group-hover:text-white transition-all">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>

                    <h3 className="font-serif text-3xl text-deep-charcoal mb-2 group-hover:text-luxury-bronze transition-colors">
                      {item.name}
                    </h3>
                    
                    <div className="flex items-center gap-2 mb-8">
                       <ShieldCheck className="w-3 h-3 text-green-500" />
                       <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                         {item.type} Required
                       </span>
                    </div>

                    <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                       <span className="text-xl font-light text-deep-charcoal">from {item.price}</span>
                       <span className="text-xs font-bold uppercase tracking-widest text-luxury-bronze opacity-0 group-hover:opacity-100 transition-opacity">
                         Start Consult
                       </span>
                    </div>
                  </SpotlightCard>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* --- TRUST FOOTER --- */}
        <div className="mt-24 pt-12 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6">
           <p className="text-sm text-gray-400">
             GPhC Registered Pharmacy: 1110426
           </p>
           <div className="flex gap-8">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Secure Consultation</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Discreet Packaging</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Licensed in UK</span>
           </div>
        </div>

      </div>
    </main>
  );
}