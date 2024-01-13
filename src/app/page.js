import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import CardSection from "./components/CardSection";


export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col bg-[#fff3dd] mx-auto px-12 py-16"
      id="home"
    >
      <Navbar />
      <div class="container mx-auto px-12 py-4">
        <HeroSection />
      </div>
      <div class="container mx-auto px-12 py-4">
        <CardSection />
      </div>
    </main>
  );
}
