import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import FeaturedProject from "../Components/FeaturedProject";
import ClientWork from "../Components/ClientWork";
import Contact from "../Components/Contact";
import Background from "../Components/Background";
import WhatsAppButton from "../Components/WhatsAppButton";
import TikTokButton from "../Components/TikTokButton";

export default function Home() {
  return (
    <div className="w-full relative overflow-x-hidden">
      <Background />
      <Navbar />
      <Hero />
      <FeaturedProject />
      <ClientWork />
      <Contact />
      <WhatsAppButton />
      <TikTokButton />
    </div>
  );
}
