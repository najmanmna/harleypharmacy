import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Treatments from "@/components/Treatments";
import FeaturedProducts from "@/components/FeaturedProducts"; // <--- Updated Import
import ClinicPartner from "@/components/ClinicPartner";
import Footer from "@/components/Footer";
import Authority from "@/components/Authority";
import WhyChooseUs from "@/components/WhyChooseUs";
import FinalMessage from "@/components/FinalMessage";
import TrustStrip from "@/components/TrustStrip"; // <--- New Component for Social Proof

export default function Home() {
  return (
    <main className="min-h-screen bg-medical-white">

      <Hero />
      <TrustStrip /> {/* <--- New Component for Social Proof */}
      <WhyChooseUs /> {/* <--- Placed here for immediate trust building */}
          <Authority />
      <HowItWorks />
      <Treatments />
      <FeaturedProducts />
   
      <ClinicPartner />
      <FinalMessage />

    </main>
  );
}