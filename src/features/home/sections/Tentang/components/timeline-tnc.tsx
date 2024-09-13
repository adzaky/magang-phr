import Link from "next/link";
import { CircleCheck } from "lucide-react";

const TimelineTnc = () => {
  return (
    <ol className="relative ml-4 border-s border-dashed border-yellow-400">
      <li className="mb-10 ms-6">
        <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-yellow-400">
          <CircleCheck className="size-4 text-white" />
        </span>
        <p className="mb-4 text-base font-normal text-gray-500">
          Harus kelahiran atau berdomisili atau lulusan perguruan tinggi Riau untuk{" "}
          <strong className="underline">lokasi magang di Provinsi Riau</strong>
        </p>
      </li>
      <li className="mb-10 ms-6">
        <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-yellow-400">
          <CircleCheck className="size-4 text-white" />
        </span>
        <p className="mb-4 text-base font-normal text-gray-500">
          Kelahiran, domisili dan asal perguruan tinggi tidak dibatasi untuk{" "}
          <strong className="underline">lokasi magang di Provinsi DKI. Jakarta</strong>
        </p>
      </li>
      <li className="mb-10 ms-6">
        <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-yellow-400">
          <CircleCheck className="size-4 text-white" />
        </span>
        <p className="mb-4 text-base font-normal text-gray-500">Sudah lulus D3/D4/S1 (tidak ada batasan umur)</p>
      </li>
      <li className="mb-10 ms-6">
        <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-yellow-400">
          <CircleCheck className="size-4 text-white" />
        </span>
        <p className="mb-4 text-base font-normal text-gray-500">Memiliki Ijazah/SKL (Surat Keterangan Lulus)</p>
      </li>
      <li className="mb-10 ms-6">
        <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-yellow-400">
          <CircleCheck className="size-4 text-white" />
        </span>
        <p className="mb-4 text-base font-normal text-gray-500">Memiliki IPK minimal 3.00 (untuk lulusan luar)</p>
      </li>
      <li className="mb-10 ms-6">
        <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-yellow-400">
          <CircleCheck className="size-4 text-white" />
        </span>
        <p className="mb-4 text-base font-normal text-gray-500">
          Lulusan perguruan tinggi dengan minimal akreditasi <strong>B</strong> atau <strong>Baik Sekali</strong>
        </p>
      </li>
      <li className="mb-10 ms-6">
        <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-yellow-400">
          <CircleCheck className="size-4 text-white" />
        </span>
        <p className="mb-4 text-base font-normal text-gray-500">
          Lulusan program studi yang sesuai dengan formasi yang dibutuhkan
        </p>
        <Link href="/formasi-kebutuhan" className="rounded-lg bg-yellow-400 px-5 py-3 text-sm font-medium text-white">
          Lihat Formasi
        </Link>
      </li>
      <li className="ms-6">
        <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-yellow-400">
          <CircleCheck className="size-4 text-white" />
        </span>
        <p className="text-base font-normal text-gray-500">
          Bersedia ditempatkan diseluruh wilayah kerja PT. Pertamina Hulu Rokan, sesuai lokasi magang yang dipilih
          (Riau/Jakarta)
        </p>
      </li>
    </ol>
  );
};

export default TimelineTnc;
