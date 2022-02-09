import Image from "next/image";
import React from "react";

function ListItem({ title }: { title: string }) {
  return (
    <div className="flex gap-3 max-w-lg">
      <Image
        src="/arrowwhite.svg"
        width={30}
        height={20}
        layout="fixed"
        alt="arrow"
      />

      <p>{title}</p>
    </div>
  );
}

export default ListItem;
