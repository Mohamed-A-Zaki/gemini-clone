import { assets } from "@/assets/assets";
import Image from "next/image";

export default function MainHeader() {
  return (
    <div className="flex items-center justify-between p-2">
      <h1 className="text-2xl">Gemini</h1>
      <Image src={assets.user_icon} alt="user" className="w-9 rounded-full" />
    </div>
  );
}
