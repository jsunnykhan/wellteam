import Image from "next/image";
import Link from "next/link";
import React from "react";
import ButtonComponent from "../../common/ButtonComponent";

function Header() {
  const onLoginHandler = (event: any) => {
    console.log("Login");
  };
  return (
    <header className="bg-primary sticky top-0 z-50 py-4">
      <div className="w-[80%] flex items-center justify-center mx-auto">
        <div className="flex-1">
          <Link href="#home" passHref>
            <Image
              className="cursor-pointer "
              alt="wellteam"
              src="/logo.png"
              width={150}
              height={50}
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

            <Link href="#membership">
              <a className="text-white font-medium text-lg cursor-pointer">
                Membership
              </a>
            </Link>
            <Link href="#program">
              <a className="text-white font-medium text-lg cursor-pointer">
                Programs
              </a>
            </Link>

            <Link href="#article">
              <a className="text-white font-medium text-lg  cursor-pointer">
                Articles
              </a>
            </Link>
          </nav>

          <ButtonComponent
            title="Login"
            bg_color="bg-white"
            url="/arrow.svg"
            text_color="text-black"
            onClickHandler={onLoginHandler}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
