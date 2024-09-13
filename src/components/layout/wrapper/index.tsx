import Navbar from "@/components/common/navbar/navbar";
import Footer from "@/components/common/footer";
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
