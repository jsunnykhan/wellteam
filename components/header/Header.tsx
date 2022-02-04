import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
  const loginClickHandler = (event: any) => {
    console.log("first");
  };
  return (
    <header className="flex bg-primary py-3 sticky top-0 z-50 items-center justify-center">
      <div className="cursor-pointer flex-1 w-60">
        <Image
          alt="wellteam"
          src="/logo.png"
          width={150}
          height={50}
          layout="fixed"
        />
      </div>

      <nav className="hidden lg:flex gap-10 items-center">
        <Link href="#challenge" as='/challenge' passHref>
         
          <a className="text-white font-medium text-lg cursor-pointer">
            Challenges
          </a>
        </Link>

        <Link href="#footer" as='/footer'>
          <a className="text-white font-medium text-lg cursor-pointer">
            Membership
          </a>
        </Link>

        <p className="text-white font-medium text-lg cursor-pointer">
          Programs
        </p>

        <p className="text-white font-medium text-lg  cursor-pointer">
          Articles
        </p>
      </nav>

      <div
        onClick={() => console.log("Hello")}
        className="flex rounded-full bg-white px-7 py-2 cursor-pointer ml-10"
      >
        <button
          type="button"
          className="font-serif font-bold text-black text-lg"
        >
          Login
        </button>
        <div className="ml-2 mt-1">
          <Image
            src="/arrow.svg"
            alt="arrow"
            width={30}
            height={20}
            layout="fixed"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
