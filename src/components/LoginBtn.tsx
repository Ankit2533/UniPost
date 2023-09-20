import React from 'react'
import Image from 'next/image'

const LoginBtn = () => {
  return (
    
    <div>
        <button className="flex gap-2 ">
        <Image
          src="icons_meta.svg"
          width={25}
          height={40}
          alt="Profile Pic"
        />
        <div className="font-bold">
        Continue with Meta</div>
      </button>
    </div>
  )
}

export default LoginBtn