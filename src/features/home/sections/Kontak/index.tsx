import { Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const KontakSection = () => {
  return (
    <section id="kontak" className="bg-sky-700">
      <div className="mx-auto grid max-w-screen-xl grid-rows-2 gap-4 px-6 py-6 text-white md:grid-cols-3 md:grid-rows-1 md:gap-8 md:py-12">
        <div className="flex flex-col gap-8">
          <Link href="/">
            <Image width={150} height={50} alt="Logo" src="/phr-logo-white.png" />
          </Link>
          <h2 className="text-balance text-xl font-bold md:w-2/3">
            Program Magang Kerja PT Pertamina Hulu Rokan Wilayah Kerja Rokan
          </h2>
          <div className="flex flex-col">
            <span className="font-semibold">UPT PPM Politeknik Caltex Riau</span>
            <p>Jl. Umban Sari No.1, Umbansari, Kec. Rumbai, Kota Pekanbaru, Riau 28265</p>
          </div>
        </div>
        <div className="flex flex-col gap-4 md:col-span-2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15958.480837624786!2d101.426097!3d0.570975!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d5ab67086f2e89%3A0x65a24264fec306bb!2sPoliteknik%20Caltex%20Riau!5e0!3m2!1sid!2sid!4v1726156724044!5m2!1sid!2sid"
            loading="lazy"
            className="h-full rounded-xl border-4 border-white"
          ></iframe>
          <div className="flex rounded-2xl bg-white p-4">
            <div className="flex w-full items-center gap-3">
              <div className="rounded-full bg-sky-600 p-3">
                <Phone className="size-5 text-white" />
              </div>
              <Link href="" className="text-sm text-sky-600">
                Kontak
              </Link>
            </div>
            <div className="flex w-full items-center gap-3">
              <div className="rounded-full bg-sky-600 p-3">
                <Phone className="size-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-sky-600">Email</span>
                <Link href="mailto:magangphr@pcr.ac.id" className="text-xs text-gray-500">
                  magangphr@pcr.ac.id
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KontakSection;
