import Image from "next/image";
import heroMaleFemale from "@/assets/hero-malefemale.png";
import heroMaleFemale2 from "@/assets/hero-malefemale2.png";

const HeroSection = () => {
  return (
    <section className="mx-auto max-w-screen-xl pt-24">
      <div className="mb-8 mt-4 flex items-center gap-4 px-4 md:mt-24">
        <div className="hidden lg:block">
          <Image width={500} height={0} alt="Hero" src={heroMaleFemale} className="h-auto" />
        </div>
        <div className="flex w-full flex-col justify-center gap-4 text-center lg:mb-44">
          <div>
            <span className="text-3xl font-semibold leading-normal md:text-[40px]">
              Program Magang Kerja <br /> PT Pertamina Hulu Rokan <br /> Wilayah Kerja Rokan
            </span>
          </div>
          <div className="py-2">
            <span className="text-balance text-sm md:text-base">
              Raih kesempatan untuk mendapatkan pengalaman terbaik <br className="hidden sm:block" />
              dengan bergabung dalam program magang di perusahaan migas BUMN <br className="hidden sm:block" />
              PT Pertamina Hulu Rokan WK-Rokan.
            </span>
          </div>
          <div className="mx-auto w-fit cursor-pointer rounded-lg bg-rose-500 px-4 py-2 text-lg hover:bg-rose-600">
            <span>
              Hasil Akhir Seleksi Program Magang sudah diumumkan, <br /> Silahkan cek hasil seleksi pada akun
              pendaftaran.
            </span>
          </div>
        </div>
        <div className="hidden lg:block">
          <Image width={500} height={0} alt="Hero" src={heroMaleFemale2} className="h-auto" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
