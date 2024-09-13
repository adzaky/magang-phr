import { stepData } from "@/datas";
import CardTahapan from "./components/card-tahapan";

const TahapanSection = () => {
  return (
    <section id="tahapan" className="bg-[#deeaf4]">
      <div className="mx-auto flex max-w-screen-xl flex-col gap-2 px-6 py-2 md:gap-8 md:py-14">
        <div className="mx-auto w-fit">
          <h2 className="text-center text-lg font-medium text-blue-600 md:text-2xl">Tahapan Pendaftaran</h2>
          <div className="ml-auto h-1 w-2/3 place-self-end rounded-full bg-yellow-200"></div>
        </div>
        <div className="flex items-center gap-2 overflow-x-scroll py-3 md:justify-evenly md:gap-8 md:overflow-hidden">
          {stepData.map(({ id, desc }) => (
            <CardTahapan key={id} id={id} desc={desc} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TahapanSection;
