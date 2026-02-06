"use client";

import { Check, ShoppingBag, Star, Zap, Activity } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FeaturedProduct() {
  return (
    <section className="py-32 bg-medical-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          {/* --- LEFT: The Studio Image --- */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative group"
          >
            {/* The "Studio Light" Background Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-gray-200/50 via-white to-gray-200/50 rounded-full blur-3xl -z-10 opacity-60 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            {/* The Product Container */}
            <div className="relative bg-white p-12 lg:p-16 rounded-[2.5rem] shadow-2xl shadow-gray-200/50 border border-white ring-1 ring-gray-100 transition-transform duration-700 hover:scale-[1.02]">
               
               {/* Floating "FDA Cleared" Badge */}
               <div className="absolute top-8 right-8 flex flex-col items-end gap-1">
                  <span className="flex items-center gap-1 text-[10px] font-bold tracking-widest uppercase text-green-600 bg-green-50 px-2 py-1 rounded">
                    <Activity className="w-3 h-3" /> FDA Cleared
                  </span>
               </div>

               {/* Best Seller Badge with Glow */}
               <div className="absolute top-8 left-8">
                  <div className="relative">
                    <div className="absolute inset-0 bg-luxury-bronze blur-md opacity-20"></div>
                    <div className="relative bg-deep-charcoal text-white text-[10px] font-bold px-4 py-2 rounded-full uppercase tracking-wider shadow-lg">
                      Clinic Favorite
                    </div>
                  </div>
               </div>
               
               {/* Product Image */}
               <img 
                 src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1887&auto=format&fit=crop" 
                 alt="HairMax LaserBand" 
                 className="w-full h-auto object-contain drop-shadow-xl transform transition-transform duration-700 group-hover:scale-105 group-hover:-rotate-1"
               />
            </div>
          </motion.div>

          {/* --- RIGHT: The Sales Pitch --- */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            
            {/* Review Count */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex text-luxury-bronze gap-0.5">
                {[1,2,3,4,5].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-sm text-deep-charcoal font-medium border-b border-gray-200 pb-0.5">
                4.9/5 from 128 Clinical Reviews
              </span>
            </div>

            <h2 className="font-serif text-5xl md:text-6xl text-deep-charcoal mb-6 leading-none">
              HairMax® <br/>
              <span className="text-gray-400">LaserBand 82</span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-10 font-light leading-relaxed">
              The gold standard in home hair growth. Medical-grade laser phototherapy energizes follicles to reverse thinning and restore density.
            </p>

            {/* Interactive Tech Specs */}
            <div className="space-y-4 mb-12">
              {[
                { text: "82 Medical-Grade Lasers", sub: "Maximum scalp coverage" },
                { text: "90-Second Treatment", sub: "Fastest treatment time available" },
                { text: "Patented Parting Teeth", sub: "Delivers light directly to follicle" }
              ].map((spec, i) => (
                <div key={i} className="group/item flex items-start gap-4 p-4 rounded-xl hover:bg-white hover:shadow-lg hover:shadow-gray-100 transition-all duration-300 border border-transparent hover:border-gray-50 cursor-default">
                  <div className="mt-1 w-8 h-8 rounded-full bg-luxury-bronze/10 flex items-center justify-center flex-shrink-0 group-hover/item:bg-luxury-bronze group-hover/item:text-white transition-colors">
                    <Check className="w-4 h-4 text-luxury-bronze group-hover/item:text-white transition-colors" />
                  </div>
                  <div>
                    <span className="block text-deep-charcoal font-medium text-lg mb-1">{spec.text}</span>
                    <span className="text-sm text-gray-400 font-light">{spec.sub}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Price & Action Block */}
            <div className="bg-white p-2 rounded-full border border-gray-100 shadow-xl shadow-gray-200/50 flex items-center justify-between pl-8 pr-2 py-2">
              <div className="flex flex-col leading-none">
                <span className="text-xs text-gray-400 uppercase tracking-wider font-bold mb-1">One-time payment</span>
                <span className="text-3xl font-serif text-deep-charcoal">£749.00</span>
              </div>
              
              <button className="relative overflow-hidden bg-deep-charcoal text-white px-8 py-4 rounded-full font-medium transition-all hover:shadow-lg hover:scale-105 active:scale-95 group">
                <span className="relative z-10 flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5" />
                  Add to Cart
                </span>
                {/* Shimmer Effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0"></div>
              </button>
            </div>
            
            <div className="mt-6 flex items-center justify-center gap-6 text-xs text-gray-400">
               <span className="flex items-center gap-1"><Zap className="w-3 h-3" /> Free Express Shipping</span>
               <span className="w-1 h-1 rounded-full bg-gray-300"></span>
               <span>2 Year Warranty</span>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}