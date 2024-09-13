import { Info } from "lucide-react";
import FormasiKebutuhanData from "./components/formasi-kebutuhan";
import { formasiJakartaData, formasiRiauData } from "@/datas";

const FormasiKebutuhan = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="mx-auto pt-24 md:pb-4">
        <div className="mx-auto mb-8 w-fit px-2">
          <h2 className="text-center text-xl font-medium md:text-2xl">Formasi Kebutuhan</h2>
          <div className="ml-auto h-1 w-4/5 place-self-end rounded-full bg-yellow-200"></div>
        </div>
      </div>
      <div className="flex flex-col gap-2 rounded-t-3xl bg-white px-4 pb-2 pt-12 md:px-36 md:py-20">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3 rounded-lg bg-sky-400 p-5">
            <Info className="size-5 rounded-full bg-white text-sky-400" />
            <span className="text-xs sm:text-sm md:text-lg">Formasi Kebutuhan wilayah Magang Riau</span>
          </div>
          <div className="flex flex-col gap-4 p-6 md:p-14">
            {formasiRiauData.map(({ id, department, requirements }) => (
              <FormasiKebutuhanData key={id} id={id} department={department} requirements={requirements} />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3 rounded-lg bg-sky-400 p-5">
            <Info className="size-5 rounded-full bg-white text-sky-400" />
            <span className="text-xs sm:text-sm md:text-lg">Formasi Kebutuhan wilayah Magang Jakarta</span>
          </div>
          <div className="flex flex-col gap-4 p-6 md:p-14">
            {formasiJakartaData.map(({ id, department, requirements }) => (
              <FormasiKebutuhanData key={id} id={id} department={department} requirements={requirements} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormasiKebutuhan;
