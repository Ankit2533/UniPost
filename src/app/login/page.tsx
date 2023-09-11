/* eslint-disable no-unused-vars */
"use client"
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import Image from "next/image"



const Navbar = () => {
  
  const userLoading = false;
  const setUser = "roshan"
  const { data: session } = useSession();
console.log("user is: ", session?.user)
if(userLoading) return( <div>User Loading</div> )
  return (
    <div>
  <div className="shadow-minimal">
      <div className="nav mx-5 mb-3 py-3">
        <div className="flex gap-3 ">
        <Link href='/'>
          <HomeIcon sx={{ fontSize: 30 }} />
          </Link>
          <div className="pt-1 text-gray-blue text-sm">Categories</div>
        </div>
        
        <div className="relative">
          <button className="border rounded-full  text-gray-blue pl-2  py-2 w-64">
            <SearchIcon className="mr-2" /> search for anything
          </button>
        </div>
        {session?.user ? (
          <div className="flex gap-3">
          <div className=" text-gray-blue text-sm">My learning</div>
<FavoriteBorderIcon  />
<ShoppingCartOutlinedIcon  />
<NotificationsNoneIcon />
<AccountCircleIcon />
<Image
            className="border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
            src={session?.user?.image!}
            width={200}
            height={200}
            alt={session?.user?.name ?? "Profile Pic"}
            priority={true}
        />
<Link href="/api/auth/signout">

<button
              className="white_btn px-3 h-8"
              

            >
              Log Out
            </button>
            </Link>

          </div>
        ) : (
          <div className="flex gap-3">
            <ShoppingCartOutlinedIcon className="mt-1" />
            <Link href="/api/auth/signin">
            <button
              className="white_btn px-3 h-8"
              
            >
              Log In
            </button>
            </Link>
            <Link href="/">
            <button
              className="black_btn px-3 h-8"
              
            >
              Sign Up
            </button>
            </Link>
          </div>
        )}
      </div>
      </div>

  

</div>
  );
};

export default Navbar;
