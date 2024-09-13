import React from "react";
import { MessageSquareText } from "lucide-react";
import TimelineTnc from "./components/timeline-tnc";
import { benefitProgram } from "@/datas";

const TentangSection = () => {
  return (
    <section id="tentang" className="rounded-t-3xl bg-white">
      <div className="mx-auto flex max-w-screen-xl flex-col gap-8 px-6 py-8 md:flex-row md:py-28">
        <div className="flex basis-1/2 flex-col justify-between pt-10">
          <div className="mb-16 space-y-8">
            <h1 className="text-xl font-semibold text-blue-700 md:text-2xl">Tentang Program Magang</h1>
            <p className="text-sm text-gray-500 md:text-base">
              Program magang ini bertujuan untuk memberikan pengalaman kerja kepada para lulusan D3/D4/S1 perguruan
              tinggi. Hal ini merupakan wujud kepedulian Perusahaan Pertamina Hulu Rokan terhadap lulusan pendidikan
              tinggi untuk dapat membangun kompetensi, memperluas wawasan dan mendapatkan pengalaman nyata di dunia
              kerja.
            </p>
          </div>
          <div className="flex flex-col gap-6 text-gray-800">
            <div className="flex flex-wrap gap-2 rounded-md bg-[#fff8dd] p-4 md:flex-nowrap">
              <div>
                <MessageSquareText className="size-10 text-yellow-400" />
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="font-semibold md:text-lg">Informasi Penting</h2>
                <p className="text-xs text-gray-600 md:text-sm">
                  Proses rekrutmen/pendaftaran program hanya dilakukan melalui website resmi{" "}
                  <span className="text-red-500">magangphr.id</span> dan tanpa dipungut biaya.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="font-medium text-gray-700">Benefit Program</h2>
              <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
                {benefitProgram.map(({ id, icon, title, desc }) => (
                  <div key={id} className="">
                    <div className="flex items-center gap-2 rounded-md bg-blue-400 p-2">
                      {icon}
                      <div className="flex flex-col text-white">
                        <p className="text-sm font-medium">{title}</p>
                        <p className="text-xs">{desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="basis-1/2 text-black">
          <div className="flex flex-col justify-between gap-4 rounded-3xl bg-[#f5f8fa] p-4 md:p-12">
            <div className="w-fit">
              <h2 className="text-xl font-medium text-blue-400">Ketentuan Pendaftaran</h2>
              <div className="ml-auto h-1 w-2/3 place-self-end rounded-full bg-yellow-200"></div>
            </div>
            <TimelineTnc />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TentangSection;
