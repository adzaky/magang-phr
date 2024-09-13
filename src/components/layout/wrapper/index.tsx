import Footer from "@/components/common/footer";
import Navbar from "@/components/common/navbar";
import KontakSection from "@/features/home/sections/Kontak";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
      <KontakSection />
      <Footer />
    </>
  );
};

export default Wrapper;
