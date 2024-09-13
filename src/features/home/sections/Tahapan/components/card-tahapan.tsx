import { stepType } from "@/types";

const CardTahapan = ({ id, desc }: stepType) => {
  return (
    <div className="flex h-44 w-36 shrink-0 flex-col items-center justify-center gap-4 rounded-3xl border border-blue-600 bg-white px-3 py-2">
      <div className="flex size-12 items-center justify-center rounded-full bg-yellow-400 p-1">
        <span className="block text-lg text-white">{id}</span>
      </div>
      <span className="block text-balance text-center text-sm text-blue-600">{desc}</span>
    </div>
  );
};

export default CardTahapan;
