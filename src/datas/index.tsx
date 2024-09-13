import { benefitType, faqType, stepType, timelineProgramType } from "@/types";
import { Briefcase, House, Medal, Wallet } from "lucide-react";

export const benefitProgram: benefitType[] = [
  {
    id: 1,
    icon: <Wallet className="text-white" />,
    title: "Uang",
    desc: "Saku",
  },
  {
    id: 2,
    icon: <House className="text-white" />,
    title: "BPJS",
    desc: "Kesehatan",
  },
  {
    id: 3,
    icon: <Briefcase className="text-white" />,
    title: "BPJS",
    desc: "Ketenagakerjaan",
  },
  {
    id: 4,
    icon: <Medal className="text-white" />,
    title: "Certificate",
    desc: "of Completion",
  },
];

export const stepData: stepType[] = [
  {
    id: 1,
    desc: "Membuat Akun Pendaftaran",
  },
  {
    id: 2,
    desc: "Melengkapi Data Diri",
  },
  {
    id: 3,
    desc: "Submit Berkas Pendaftaran",
  },
  {
    id: 4,
    desc: "Screening Kualifikasi Pendaftar",
  },
  {
    id: 5,
    desc: "Tes TPA & Validasi Berkas",
  },
  {
    id: 6,
    desc: "Seleksi Wawancara",
  },
  {
    id: 7,
    desc: "Medical Check Up",
  },
];

export const timelineProgramData: timelineProgramType[] = [
  {
    id: 1,
    title: "Launching Pendaftaran",
    desc: "03 Juli 2024, secara resmi pendaftaran program magang PT. Pertamina Hulu Rokan WK-Rokan dibuka.",
  },
  {
    id: 2,
    title: "Tutup Pendaftaran",
    desc: "09 Juli 2024, secara resmi pendaftaran program magang PT. Pertamina Hulu Rokan WK-Rokan ditutup.",
  },
  {
    id: 3,
    title: "Hasil Screening",
    desc: "10 Juli 2024, hasil screening kualifikasi pendaftar diumumkan.",
  },
  {
    id: 4,
    title: "Tes Potensi Akademik (TPA)",
    desc: "11 Juli 2024 - 16 Juli 2024 Pelaksanaan Tes Potensi Akademik bagi peserta yang lolos screening",
  },
  {
    id: 5,
    title: "Hasil Ujian TPA & Validasi Berkas",
    desc: "20 Juli 2024, hasil seleksi TPA & Validasi Berkas Pendaftar diumumkan.",
  },
  {
    id: 6,
    title: "Wawancara",
    desc: "22 - 25 Juli 2024 Pelaksanaan wawancara bagi peserta yang dinyatakan lolos.",
  },
  {
    id: 7,
    title: "Hasil Wawancara",
    desc: "29 Juli 2024, hasil seleksi wawancara diumumkan.",
  },
  {
    id: 8,
    title: "Medical Check Up",
    desc: "01 Agustus 2024, pelaksanaan test medical check up bagi peserta yang lolos seleksi wawancara.",
  },
  {
    id: 9,
    title: "Kelulusan",
    desc: "Hasil kelulusan program magang diumumkan sebelum 19 Agustus 2024.",
  },
];

export const faqData: faqType[] = [
  {
    id: 1,
    title: "Berapa lama program magang ini dilaksanakan",
    desc: "Pendaftar yang dinyatakan lolos, akan mengikuti program magang selama kurang lebih 6",
  },
  {
    id: 2,
    title: "Apakah pendaftar boleh mahasiswa aktif/belum lulus",
    desc: "Tidak, untuk mendaftar pada program ini pendaftar harus sudah lulus dari perguruan tinggi pada jenjang pendidikan D3/D4/S1 yang di buktikan dengan Ijazah atau SKL jika ijazah belum keluar",
  },
  {
    id: 3,
    title: "Apakah ada batasan usia",
    desc: "Tidak, usia pendaftar tidak dibatasi",
  },
  {
    id: 4,
    title: "Dimana saja wilayah magang dilaksanakan",
    desc: "Magang dilaksanakan di wilayah provinsi Riau dan DKI Jakarta",
  },
  {
    id: 5,
    title: "Apakah pendaftar dapat memilih lokasi penempatan magang",
    desc: "Tidak, setelah memilih wilayah magang (Riau/Jakarta) pendaftar harus bersedia ditempatkan di seluruh lokasi kerja PT. Pertamina Hulu Rokan WK-Rokan di wilayah tersebut",
  },
  {
    id: 6,
    title: "Kenapa ada pembagian wilayah magang Riau dan DKI Jakarta",
    desc: "Untuk magang di wilayah Riau pendaftar harus kelahiran/berdomisili/lulusan perguruan tinggi di Riau. Ketentuan ini cukup terpenuhi salah satu saja tidak harus seluruhnya, contoh pendaftar lahir di Riau meskipun tidak tinggal dan berkuliah di Riau, atau pendaftar berdomisili di Riau meskipun bukan kelahiran dan lulusan perguruan tinggi di Riau, atau pendaftar lulusan perguruan tinggi di Riau meskipun bukan kelahiran dan tinggal di Riau. \n\nSedangkan untuk magang di wilayah DKI Jakarta maka tidak ada batasan kelahiran, domisili maupun lulusan perguruan tinggi tertentu.",
  },
  {
    id: 7,
    title: "Bagaimana jika pendaftar memenuhi kriteria untuk magang di wilayah Riau dan DKI Jakarta",
    desc: "Pendaftar bebas menentukan pilihan wilayah magang sesuai keinginan pendaftar",
  },
  {
    id: 8,
    title: "Apakah satu orang dapat mendaftar lebih dari satu kali",
    desc: "Tidak, untuk mendaftar di program ini pendaftar harus menggunakan NIK dan hanya dapat digunakan satu kali",
  },
];
