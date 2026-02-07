"use client";

import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const categories = [
  {
    id: 1,
    title: "Hair Restoration",
    subtitle: "Clinical treatments for regrowth.",
    desc: "Clinically proven treatments for male pattern baldness and density loss.",
    tags: ["Finasteride", "Minoxidil", "Laser Therapy"],
    // YOUR ORIGINAL IMAGE
    image: "https://plus.unsplash.com/premium_photo-1740761649107-6b218198d09c?q=80&w=1170&auto=format&fit=crop",
    size: "large" // Spans 2 cols
  },
  {
    id: 2,
    title: "Dermatology",
    subtitle: "Prescription skincare.",
    desc: "Prescription-grade formulas for acne, aging, and eczema.",
    tags: ["Acne", "Anti-Aging", "Eczema"],
    // YOUR ORIGINAL IMAGE
    image: "https://images.unsplash.com/photo-1713085085470-fba013d67e65?q=80&w=1170&auto=format&fit=crop",
    size: "small"
  },
  {
    id: 3,
    title: "Men's Health",
    subtitle: "Discreet solutions.",
    desc: "Effective solutions for ED, PE, and hormone support.",
    tags: ["ED Treatment", "PE", "Testosterone"],
    // YOUR ORIGINAL IMAGE
    image: "https://plus.unsplash.com/premium_photo-1661685000513-2e1cfde0907a?q=80&w=1170&auto=format&fit=crop",
    size: "tall" // Vertical span (Looks great with this image)
  },
  {
    id: 4,
    title: "Weight Management",
    subtitle: "Medically supported.",
    desc: "GLP-1 medications and plans to help you reach a healthy weight.",
    tags: ["GLP-1", "Orlistat", "Diet Plans"],
    // YOUR ORIGINAL IMAGE
    image: "https://plus.unsplash.com/premium_photo-1726876998600-ba6286df9c80?q=80&w=1216&auto=format&fit=crop",
    size: "small"
  },
  {
    id: 5,
    title: "General Health",
    subtitle: "Everyday essentials.",
    desc: "From allergies to acid reflux, treat common conditions online.",
    tags: ["Hayfever", "Migraine", "Asthma"],
    // New Image to fill the grid gap (Neutral/Clinical)
    image: "https://images.unsplash.com/photo-1529386317747-0a2a51add902?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    size: "large"
  },
];

export default function Treatments() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#4a4a4a_1px,transparent_1px)] [background-size:20px_20px]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <motion.div 
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="max-w-2xl"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-luxury-bronze/10 text-luxury-bronze border border-luxury-bronze/20 text-[10px] font-bold tracking-[0.2em] uppercase mb-4">
               Clinical Formulary
            </span>
            <h2 className="font-serif text-5xl md:text-6xl text-deep-charcoal leading-[0.9]">
              Tailored <span className="text-luxury-bronze italic">Treatments.</span>
            </h2>
          </motion.div>
          
          <Link 
            href="/treatments" 
            className="group hidden md:flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-deep-charcoal hover:text-luxury-bronze transition-colors"
          >
            View All Categories
            <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-luxury-bronze group-hover:border-luxury-bronze group-hover:text-white transition-all duration-300">
               <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
        </div>

        {/* The Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[300px] gap-4">
          
          {categories.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative group rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500
                ${cat.size === 'large' ? 'md:col-span-2 md:row-span-1' : ''}
                ${cat.size === 'small' ? 'md:col-span-1 md:row-span-1' : ''}
                ${cat.size === 'tall' ? 'md:col-span-1 md:row-span-2' : ''}
              `}
            >
              {/* Background Image with Zoom Effect */}
              <div className="absolute inset-0 bg-gray-200">
                <img 
                  src={cat.image} 
                  alt={cat.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-deep-charcoal/20 group-hover:bg-deep-charcoal/10 transition-colors duration-500"></div>
                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal/90 via-deep-charcoal/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              </div>

              {/* Content Panel */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                
                {/* Top Right Arrow (Rotates on Hover) */}
                <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                   <ArrowUpRight className="w-4 h-4" />
                </div>

                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <div className="flex items-center gap-3 mb-2 opacity-80">
                     <span className="h-px w-6 bg-luxury-bronze"></span>
                     <span className="text-luxury-bronze text-xs font-bold uppercase tracking-widest">{cat.subtitle}</span>
                  </div>
                  
                  <h3 className="font-serif text-3xl text-white mb-2 group-hover:text-white transition-colors">
                    {cat.title}
                  </h3>
                  
                  {/* Expandable Description */}
                  <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
                    <div className="overflow-hidden">
                       <p className="text-gray-300 text-sm font-light leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                         {cat.desc}
                       </p>
                       
                       {/* Tags */}
                       <div className="flex flex-wrap gap-2">
                         {cat.tags.map(tag => (
                           <span key={tag} className="text-[10px] text-white bg-white/20 px-2 py-1 rounded border border-white/10 backdrop-blur-sm">
                             {tag}
                           </span>
                         ))}
                       </div>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}

          {/* Mobile "View All" Button (Only visible on small screens) */}
          <div className="md:hidden mt-8 text-center">
             <Link href="/treatments" className="inline-flex items-center gap-2 text-deep-charcoal font-bold border-b border-deep-charcoal pb-1">
               View Full Directory
               <ArrowRight className="w-4 h-4" />
             </Link>
          </div>

        </div>
      </div>
    </section>
  );
}