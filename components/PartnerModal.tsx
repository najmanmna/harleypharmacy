"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, building2, ShieldCheck, Mail, User } from 'lucide-react';
import { useState } from 'react';

export default function PartnerModal({ isOpen, onClose, tierTitle }: { isOpen: boolean, onClose: () => void, tierTitle: string }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-deep-charcoal/60 backdrop-blur-sm z-[100]"
          />
          
          {/* Modal Panel */}
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full md:w-[500px] bg-white shadow-2xl z-[101] p-8 md:p-12 overflow-y-auto"
          >
            <button onClick={onClose} className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full transition-colors">
              <X className="w-6 h-6 text-gray-400" />
            </button>

            <div className="mb-10">
              <span className="text-luxury-bronze font-bold text-[10px] uppercase tracking-widest block mb-2">Partner Access</span>
              <h2 className="font-serif text-3xl text-deep-charcoal">Apply for {tierTitle}</h2>
              <p className="text-gray-500 mt-4 font-light">
                Join 20+ UK clinics using Harley’s digital-first pharmacy infrastructure.
              </p>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-4">
                <div className="relative">
                  <User className="absolute left-4 top-4 w-4 h-4 text-gray-400" />
                  <input type="text" placeholder="Full Name" className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-luxury-bronze/20 focus:border-luxury-bronze transition-all" />
                </div>
                
                <div className="relative">
                  <Mail className="absolute left-4 top-4 w-4 h-4 text-gray-400" />
                  <input type="email" placeholder="Professional Email" className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-luxury-bronze/20 focus:border-luxury-bronze transition-all" />
                </div>

                <div className="relative">
                  <building2 className="absolute left-4 top-4 w-4 h-4 text-gray-400" />
                  <input type="text" placeholder="Clinic or Company Name" className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-luxury-bronze/20 focus:border-luxury-bronze transition-all" />
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Primary Interest</label>
                <div className="grid grid-cols-2 gap-3">
                  {['Digital Prescribing', 'Bulk Supply', 'API Access', 'Wellness Support'].map((item) => (
                    <button key={item} type="button" className="text-xs py-3 px-4 border border-gray-100 rounded-lg text-gray-600 hover:border-luxury-bronze hover:text-luxury-bronze transition-all text-left">
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-gray-100">
                <button className="w-full bg-deep-charcoal text-white py-5 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-black transition-all shadow-xl shadow-deep-charcoal/20 group">
                  Submit Application
                  <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
                <div className="mt-6 flex items-center gap-3 justify-center text-[10px] text-gray-400 font-medium">
                  <ShieldCheck className="w-3 h-3 text-green-500" />
                  GPHC & MHRA COMPLIANT DATA HANDLING
                </div>
              </div>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}