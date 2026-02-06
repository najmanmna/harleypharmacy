"use client";

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function FinalMessage() {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Decorative Divider */}
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-luxury-bronze to-transparent mx-auto mb-8"></div>

          <h2 className="font-serif text-3xl md:text-5xl text-deep-charcoal leading-tight mb-8">
            "Whether you’re a patient in need of care, or a clinic scaling services..."
          </h2>
          
          <p className="text-xl md:text-2xl text-luxury-bronze font-medium italic mb-12">
            Harley is here to support you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="text-deep-charcoal font-medium hover:text-luxury-bronze transition-colors flex items-center gap-2 group">
               Start a Consultation
               <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <span className="hidden sm:block text-gray-300">|</span>
            <button className="text-deep-charcoal font-medium hover:text-luxury-bronze transition-colors flex items-center gap-2 group">
               Partner With Us
               <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </motion.div>

      </div>
    </section>
  );
}