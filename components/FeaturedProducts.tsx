"use client";

import { ShoppingBag, Star, Plus, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const products = [
  {
    id: 1,
    name: "HairMax® LaserBand 82",
    tagline: "Clinical Laser Therapy",
    price: "£849.00",
    rating: 4.9,
    reviews: 128,
    image: "https://www.harleypharmacy.co.uk/wp-content/uploads/2025/11/image-30-1.jpg",
    badge: "Best Seller",
    badgeColor: "bg-deep-charcoal text-white"
  },
  {
    id: 2,
    name: "Maximum Growth Therapy (MGT TM)",
    tagline: "Regrowth Treatment",
    price: "£79.99",
    rating: 4.8,
    reviews: 843,
    image: "https://www.harleypharmacy.co.uk/wp-content/uploads/2025/11/Landmark-MGT-3-10_-copy.png",
    badge: "Essential",
    badgeColor: "bg-luxury-bronze text-white"
  },
  {
    id: 3,
    name: "Complete DHT Inhibitor & Hair Nutritional",
    tagline: "Daily DHT Blocker",
    price: "£14.50",
    rating: 4.7,
    reviews: 2105,
    image: "https://www.harleypharmacy.co.uk/wp-content/uploads/2025/11/Landmark-Complete3-10_-copy.png",
    badge: "Prescription Only",
    badgeColor: "bg-blue-900 text-white"
  },
  {
    id: 4,
    name: "DHT Blocking Hair Loss Shampoo",
    tagline: "Scalp Health Complex",
    price: "£18.00",
    rating: 4.6,
    reviews: 320,
    image: "https://www.harleypharmacy.co.uk/wp-content/uploads/2025/11/Landmark-DHT-Shampoo3-10_-copy.png",
    badge: null,
    badgeColor: ""
  }
];

export default function FeaturedProducts() {
  return (
    <section className="py-24 bg-medical-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
           <div>
              <span className="text-luxury-bronze font-bold tracking-widest text-xs uppercase mb-2 block">
                Shop The Collection
              </span>
              <h2 className="font-serif text-4xl text-deep-charcoal">
                Clinical Favorites
              </h2>
           </div>
           <button className="hidden md:flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-luxury-bronze transition-colors">
              View All Products <ArrowRight className="w-4 h-4" />
           </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-2xl p-4 transition-all duration-300 hover:shadow-xl hover:shadow-gray-200/50 border border-transparent hover:border-gray-50"
            >
              
              {/* Image Area */}
              <div className="relative aspect-[4/5] bg-gray-50 rounded-xl overflow-hidden mb-6">
                 {/* Badge */}
                 {product.badge && (
                    <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider z-10 ${product.badgeColor}`}>
                       {product.badge}
                    </div>
                 )}
                 
                 {/* Product Image */}
                 <img 
                   src={product.image} 
                   alt={product.name}
                   className="w-full h-full object-cover mix-blend-multiply transition-transform duration-700 group-hover:scale-105" 
                 />

                 {/* "Quick Add" Overlay Button */}
                 <div className="absolute bottom-4 right-4 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <button className="w-10 h-10 rounded-full bg-deep-charcoal text-white flex items-center justify-center hover:bg-black shadow-lg">
                       <Plus className="w-5 h-5" />
                    </button>
                 </div>
              </div>

              {/* Product Info */}
              <div>
                 <div className="flex items-center gap-1 mb-2">
                    <Star className="w-3 h-3 fill-luxury-bronze text-luxury-bronze" />
                    <span className="text-xs text-gray-400 font-medium">{product.rating} ({product.reviews})</span>
                 </div>
                 
                 <h3 className="font-serif text-lg text-deep-charcoal leading-tight mb-1 group-hover:text-luxury-bronze transition-colors">
                    {product.name}
                 </h3>
                 <p className="text-xs text-gray-400 mb-4">{product.tagline}</p>
                 
                 <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                    <span className="font-medium text-deep-charcoal">{product.price}</span>
                    <button className="text-xs font-bold uppercase tracking-wider text-gray-400 hover:text-deep-charcoal transition-colors">
                       View Details
                    </button>
                 </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-12 text-center md:hidden">
            <button className="inline-flex items-center gap-2 px-6 py-3 border border-gray-200 rounded-full text-sm font-medium text-deep-charcoal">
               View All Products <ArrowRight className="w-4 h-4" />
            </button>
        </div>

      </div>
    </section>
  );
}