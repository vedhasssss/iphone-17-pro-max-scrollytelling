import PhoneScroll from "@/components/PhoneScroll";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505]">
      <PhoneScroll />
      <FeaturesSection />
      <Footer />
    </main>
  );
}
