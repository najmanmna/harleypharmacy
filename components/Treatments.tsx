"use client";

import { ArrowUpRight, Plus } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const categories = [
  {
    id: 1,
    title: "Hair Restoration",
    subtitle: "Clinical treatments for regrowth & density.",
    tags: ["Finasteride", "Minoxidil", "Laser Therapy"],
    image: "https://plus.unsplash.com/premium_photo-1740761649107-6b218198d09c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    colSpan: "md:col-span-2", 
  },
  {
    id: 2,
    title: "Dermatology",
    subtitle: "Prescription skincare & acne care.",
    tags: ["Acne", "Anti-Aging", "Eczema"],
    image: "https://images.unsplash.com/photo-1713085085470-fba013d67e65?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    colSpan: "md:col-span-1",
  },
  {
    id: 3,
    title: "Men's Health",
    subtitle: "Discreet solutions for confidence.",
    tags: ["ED Treatment", "PE", "Testosterone"],
    image: "https://plus.unsplash.com/premium_photo-1661685000513-2e1cfde0907a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    colSpan: "md:col-span-1",
  },
  {
    id: 4,
    title: "Weight Management",
    subtitle: "Medically supported weight loss.",
    tags: ["GLP-1", "Orlistat", "Diet Plans"],
    image: "https://plus.unsplash.com/premium_photo-1726876998600-ba6286df9c80?q=80&w=1216&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    colSpan: "md:col-span-2",
  },
];

export default function Treatments() {
  return (
    <section className="py-24 bg-white relative">
      {/* Background Decor - Minimalist grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div 
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="h-px w-8 bg-luxury-bronze"></span>
              <span className="text-luxury-bronze font-bold tracking-widest text-xs uppercase">
                Curated Formulary
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-deep-charcoal leading-tight">
              Tailored Treatments<span className="text-luxury-bronze">.</span>
            </h2>
          </motion.div>
          
          <Link 
            href="/treatments" 
            className="group flex items-center gap-2 text-sm font-semibold text-deep-charcoal pb-1 transition-all"
          >
            <span className="relative">
               View Full Directory
               <span className="absolute bottom-0 left-0 w-full h-px bg-gray-200 group-hover:bg-luxury-bronze transition-colors"></span>
            </span>
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-luxury-bronze group-hover:text-white transition-all">
               <ArrowUpRight className="w-4 h-4" />
            </div>
          </Link>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer ${cat.colSpan}`}
            >
              {/* Image Container with Parallax Zoom */}
              <div className="absolute inset-0 overflow-hidden">
                <img 
                  src={cat.image} 
                  alt={cat.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
              </div>

              {/* Content Panel (Glassmorphism Slide-Up) */}
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 transform transition-transform duration-500">
                
                {/* Title & Icon Row */}
                <div className="flex items-end justify-between mb-2">
                   <h3 className="font-serif text-3xl text-white group-hover:text-white/90 transition-colors">
                     {cat.title}
                   </h3>
                   {/* The Animated "Plus" Button */}
                   <div className="w-10 h-10 rounded-full border border-white/30 backdrop-blur-sm flex items-center justify-center text-white group-hover:bg-white group-hover:text-deep-charcoal transition-all duration-300">
                      <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
                   </div>
                </div>

                {/* Subtitle */}
                <p className="text-gray-300 text-sm font-light mb-6 border-l border-white/30 pl-3">
                  {cat.subtitle}
                </p>

                {/* Tags (Reveal on Hover) */}
                <div className="flex flex-wrap gap-2 h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                  {cat.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-medium uppercase tracking-wider text-white bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}