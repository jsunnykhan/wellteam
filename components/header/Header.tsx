import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="flex mt-5 py-3 sm:mt-10 sticky top-0 z-50">
      <div className="cursor-pointer flex-1 w-60">
        <Link href="/" passHref>
          <Image
            alt="wellteam"
            src="https://static.wixstatic.com/media/6c8d7e_4384b65b31894af2b8a6d6a590728942~mv2.png/v1/fill/w_169,h_40,al_c,q_85,usm_0.66_1.00_0.01/White%20text%20on%20Transparent.webp"
            width={120}
            height={40}
          />
        </Link>
      </div>

      <nav className="hidden sm:flex gap-10 items-center">
        <Link href="/challenge" passHref>
          <p className="text-white font-medium text-lg cursor-pointer">
            Challenges
          </p>
        </Link>
        <Link href="/members" passHref>
          <p className="text-white font-medium text-lg cursor-pointer">
            Membership
          </p>
        </Link>
        <Link href="/programs" passHref>
          <p className="text-white font-medium text-lg cursor-pointer">
            Programs
          </p>
        </Link>
        <Link href="/article" passHref>
          <p className="text-white font-medium text-lg  cursor-pointer">
            Articles
          </p>
        </Link>

        <button
          type="button"
          className="rounded-full bg-white px-7 py-2 cursor-pointer font-serif font-bold text-lg"
        >
          Login
        </button>
      </nav>
    </header>
  );
}

export default Header;
