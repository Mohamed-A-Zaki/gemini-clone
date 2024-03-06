import { assets } from "@/assets/assets";
import Image from "next/image";

export default function Cards() {
  const data = [
    {
      id: 1,
      description: "Suggest beautiful places to see on an upcoming road trip",
      icon: assets.compass_icon,
    },
    {
      id: 2,
      description: "Briefly summarize this concept: urban planning",
      icon: assets.bulb_icon,
    },
    {
      id: 3,
      description: "Tell me about React js and React native",
      icon: assets.message_icon,
    },
    {
      id: 4,
      description: "Tell me about React js and React native",
      icon: assets.code_icon,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 my-5">
      {data.map(({ id, icon, description }) => {
        return (
          <div
            key={id}
            className="relative rounded-lg bg-secondary p-3 h-40 cursor-pointer hover:bg-[#dfe4ea]"
          >
            <p className="text-lg text-gray-500">{description}</p>
            <Image
              src={icon}
              alt="compass_icon"
              className="absolute w-8 bottom-2 right-2 p-1 bg-white rounded-full"
            />
          </div>
        );
      })}
    </div>
  );
}
