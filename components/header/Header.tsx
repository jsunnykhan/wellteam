import Image from "next/image";
import Link from "next/link";
import React from "react";
import ButtonComponent from "../common/ButtonComponent";

function Header() {
  const onLoginHandler = (event: any) => {
    console.log("Login");
  };
  return (
    <header className="flex bg-primary py-3 sticky top-0 z-50 items-center justify-center">
      <div className="flex-1">
        <Link href="#home" passHref>
          <Image
            className="cursor-pointer "
            alt="wellteam"
            src="/logo.png"
            width={150}
            height={50}
            layout="fixed"
          />
        </Link>
      </div>
      <div className="flex gap-6">
        <nav className="hidden lg:flex gap-10 items-center">
          <Link href="#challenge" passHref>
            <a className="text-white font-medium text-lg cursor-pointer">
              Challenges
            </a>
          </Link>

          <Link href="#footer">
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

        <ButtonComponent
          title="Login"
          bg_color="bg-white"
          url="/arrow.svg"
          text_color="text-black"
          onClickHandler={onLoginHandler}
        />
      </div>
    </header>
  );
}

export default Header;
