import FaqSection from "./sections/Faq";
import HeroSection from "./sections/Hero";
import TahapanSection from "./sections/Tahapan";
import TentangSection from "./sections/Tentang";
import TimelineSection from "./sections/Timeline";

const Home = () => {
  return (
    <main>
      <HeroSection />
      <TentangSection />
      <TahapanSection />
      <TimelineSection />
      <FaqSection />
    </main>
  );
};

export default Home;
