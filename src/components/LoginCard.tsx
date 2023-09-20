import React from "react";
import Image from "next/image";
import LoginBtn from "./LoginBtn";


const LoginCard = () => {
  return (
    <main className="text-text_secondary">
      <div>Login to Your Account</div>
      <button className="flex gap-2 white_btn">
        <Image
          src="icons_google.svg"
          width={25}
          height={40}
          alt="Profile Pic"
        />
        <div className="font-bold">
        Continue with Google</div>
      </button>
      <button className="flex gap-2 white_btn">
        <Image
          src="icons_meta.svg"
          width={25}
          height={40}
          alt="Profile Pic"
        />
        <div className="font-bold">
        Continue with Meta</div>
      </button>
      <div className="white_btn">
      <LoginBtn src="icons_meta"/></div>
    </main>
  );
};

export default LoginCard;
