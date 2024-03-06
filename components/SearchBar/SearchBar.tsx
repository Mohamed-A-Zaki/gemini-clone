import { assets } from "@/assets/assets";
import Image from "next/image";

export default function SearchBar() {
  return (
    <div className="bg-secondary rounded-[40px] px-4 py-1 flex items-center gap-3">
      <input
        type="text"
        placeholder="Enter a prompt here"
        className="w-full p-2 text-lg bg-transparent outline-none border-none"
      />

      <Image
        src={assets.send_icon}
        alt="send_icon"
        className="w-6 cursor-pointer"
      />

      <Image
        src={assets.gallery_icon}
        alt="gallery_icon"
        className="w-6 cursor-pointer"
      />

      <Image
        src={assets.mic_icon}
        alt="gallery_icon"
        className="w-6 cursor-pointer"
      />
    </div>
  );
}
