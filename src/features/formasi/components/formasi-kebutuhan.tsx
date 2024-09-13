import { formasiType } from "@/types";

const FormasiKebutuhanData = ({ id, department, requirements }: formasiType) => {
  return (
    <div className="flex flex-col gap-1">
      <h3 className="font-semibold text-yellow-400 md:text-lg">{department}</h3>
      <ul className="flex flex-col gap-y-0.5 pl-5">
        {requirements.map((requirement) => (
          <li key={id} className="list-disc text-xs leading-normal text-gray-700 md:text-sm">
            {requirement}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FormasiKebutuhanData;
