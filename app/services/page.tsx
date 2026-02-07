"use client";

import { motion } from 'framer-motion';
import { ShoppingBag, Stethoscope, Briefcase, CheckCircle2, ArrowRight, Zap, ShieldCheck, Globe } from 'lucide-react';
import Link from 'next/link';

const tiers = [
  {
    title: "For Patients",
    subtitle: "Everyday Care",
    icon: ShoppingBag,
    color: "bg-luxury-bronze",
    features: [
      "Everyday Prescriptions & OTC",
      "Convenient Online Management",
      "Next-Day Nationwide Delivery",
      "Direct Pharmacist Guidance"
    ],
    cta: "Shop as a Patient",
    href: "/treatments"
  },
  {
    title: "For Clinics",
    subtitle: "Prescribing Platform",
    icon: Stethoscope,
    color: "bg-deep-charcoal",
    features: [
      "Secure Digital Prescribing",
      "API & Tech-Enabled Solutions",
      "Specialist Medicines & Devices",
      "Full GPhC/MHRA Compliance"
    ],
    cta: "Partner with Us",
    href: "/clinics"
  },
  {
    title: "For Businesses",
    subtitle: "Corporate Solutions",
    icon: Briefcase,
    color: "bg-blue-900",
    features: [
      "Reliable Bulk Medicine Supply",
      "Workplace Wellness Programs",
      "Scalable Solutions for SMEs",
      "Fully Regulated Partnerships"
    ],
    cta: "Corporate Inquiry",
    href: "/contact"
  }
];

export default function Services() {
  return (
    <section className="py-32 bg-[#F9FAFB] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-luxury-bronze font-bold tracking-[0.2em] uppercase text-[10px] mb-4 block">
              Our Capabilities
            </span>
            <h2 className="font-serif text-4xl md:text-6xl text-deep-charcoal mb-6 leading-tight">
              Pharmacy Services Tailored for <br />
              <span className="italic">Patients, Clinics, & Businesses</span>
            </h2>
            <p className="text-gray-500 text-lg font-light">
              From everyday care to advanced digital prescribing and corporate partnerships.
            </p>
          </motion.div>
        </div>

        {/* Tiers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {tiers.map((tier, index) => (
            <motion.div 
              key={tier.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-[2rem] p-10 shadow-sm border border-gray-100 flex flex-col hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group"
            >
              <div className={`w-14 h-14 rounded-2xl ${tier.color} text-white flex items-center justify-center mb-8 shadow-lg`}>
                 <tier.icon className="w-7 h-7" />
              </div>
              
              <div className="mb-2 text-luxury-bronze font-bold text-[10px] uppercase tracking-widest">{tier.subtitle}</div>
              <h3 className="font-serif text-3xl text-deep-charcoal mb-6">{tier.title}</h3>
              
              <ul className="space-y-4 mb-10 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-gray-500">
                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link href={tier.href} className="w-full py-4 rounded-xl border border-gray-200 text-deep-charcoal font-bold text-center group-hover:bg-deep-charcoal group-hover:text-white transition-all">
                {tier.cta}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* --- WHY HARLEY? (The Trust Strip) --- */}
        <div className="bg-deep-charcoal rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
           <div className="absolute top-0 right-0 w-96 h-96 bg-luxury-bronze/10 rounded-full blur-[100px] -mr-20 -mt-20"></div>
           
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
              <div>
                 <h2 className="font-serif text-4xl mb-8">Why Harley Pharmacy?</h2>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <WhyItem icon={ShieldCheck} title="Trusted & Licensed" desc="GPhC registered and fully compliant." />
                    <WhyItem icon={Globe} title="Seamless Delivery" desc="Next-day dispatch across the UK." />
                    <WhyItem icon={Zap} title="Tech-Enabled" desc="API integration for digital partners." />
                    <WhyItem icon={Stethoscope} title="Dedicated Support" desc="Pharmacist-led clinical team." />
                 </div>
              </div>

              {/* Stats & Trust Signals */}
              <div className="bg-white/5 backdrop-blur-md rounded-3xl p-10 border border-white/10">
                 <div className="grid grid-cols-2 gap-8">
                    <StatItem label="Patients Served" value="10k+" /> {/* */}
                    <StatItem label="Clinics Partnered" value="20+" /> {/* */}
                    <StatItem label="Orders Delivered" value="3k+" /> {/* */}
                    <StatItem label="GPhC Registered" value="Yes" />
                 </div>
                 <div className="mt-10 pt-10 border-t border-white/10 text-center">
                    <p className="text-gray-400 text-sm italic">
                       "Trusted healthcare solutions at scale."
                    </p>
                 </div>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
}

function WhyItem({ icon: Icon, title, desc }: any) {
   return (
      <div className="flex gap-4">
         <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
            <Icon className="w-5 h-5 text-luxury-bronze" />
         </div>
         <div>
            <h4 className="font-bold text-white mb-1">{title}</h4>
            <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
         </div>
      </div>
   );
}

function StatItem({ label, value }: { label: string, value: string }) {
   return (
      <div className="text-center">
         <div className="text-3xl font-serif text-luxury-bronze mb-1">{value}</div>
         <div className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">{label}</div>
      </div>
   );
}