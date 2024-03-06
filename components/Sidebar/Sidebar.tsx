"use client";

import Image from "next/image";
import { useState } from "react";
import { assets } from "@/assets/assets";

export default function Sidebar() {
  const [extended, setExtended] = useState(false);

  return (
    <nav className="bg-secondary w-fit shrink-0 min-h-screen p-5 flex flex-col justify-between rounded-md">
      <div>
        <Image
          src={assets.menu_icon}
          alt="menu-icon"
          className="w-10 cursor-pointer px-2"
          onClick={() => setExtended(!extended)}
        />

        <div className="flex items-center gap-2 bg-primary my-3 px-4 py-2 rounded-full cursor-pointer">
          <Image src={assets.plus_icon} alt="new chat" className="w-4" />
          {extended && <span>new chat</span>}
        </div>

        {extended && (
          <div>
            <h5 className="mt-6 mb-3">Recent</h5>

            <div className="flex items-center gap-2 my-1 px-4 py-2 rounded-full cursor-pointer hover:bg-primary">
              <Image
                src={assets.message_icon}
                alt="message-icon"
                className="w-6"
              />
              <span>what is react js...</span>
            </div>
          </div>
        )}
      </div>

      <div>
        <div className="flex items-center gap-2 my-1 px-4 py-2 rounded-full cursor-pointer hover:bg-primary">
          <Image
            src={assets.question_icon}
            alt="message-icon"
            className="w-5"
          />
          {extended && <span>help</span>}
        </div>

        <div className="flex items-center gap-2 my-1 px-4 py-2 rounded-full cursor-pointer hover:bg-primary">
          <Image src={assets.history_icon} alt="message-icon" className="w-5" />
          {extended && <span>activity</span>}
        </div>

        <div className="flex items-center gap-2 my-1 px-4 py-2 rounded-full cursor-pointer hover:bg-primary">
          <Image src={assets.setting_icon} alt="message-icon" className="w-5" />
          {extended && <span>settings</span>}
        </div>
      </div>
    </nav>
  );
}
