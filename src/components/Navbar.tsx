"use client";
import Home from "@/app/page";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import { IconButton } from "@mui/material";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <main>
      <div className="m-4 text-purple-500">
        <div className="flex justify-between items-center">
          <div className="flex">
            <IconButton size="medium" color="inherit">
              <AcUnitIcon />
            </IconButton>
            <div className="mt-2">UniPost</div>
          </div>
          <div className="flex gap-4 my-auto">
            <div>Feature</div>
            <div>Discover</div>
            <div>Stories</div>
            <div>Community</div>
            <div>Blog</div>
          </div>
          <div className="flex" >
            <div className="flex mt-3 gap-4">
            <div>Login</div>
            <div>See Details</div>|
            </div>
            <div>
            {!toggle ? (
              <div
                onClick={() => {
                  setToggle(true);
                }}
              >
                <Image
            // className="border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
            src="toggle-off.svg"
            width={45}
            height={40}
            alt="Profile Pic"
        />
              </div>
            ) : (
              <div
                onClick={() => {
                  setToggle(false);
                }}
              >
                <Image className=""
            // className="border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
            src="toggle-on.svg"
            width={45}
            height={40}
            alt="Profile Pic"
        />
                
                
              </div>
            )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Navbar;
