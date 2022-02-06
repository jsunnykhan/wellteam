import Image from 'next/image';
import React from 'react'

function GalleryComponent() {
  return (
    <div className="grid grid-cols-6 grid-rows-2 gap-4 grid-flow-col-dense">
      <div className="col-span-2 row-span-2">
        <Image
          className="rounded-2xl"
          src="/1.jpg"
          alt="Nice picture "
          width={500}
          height={700}
          layout="responsive"
        />
      </div>
      <div className="col-span-2 row-span-2 col-start-5">
        <Image
          className="rounded-2xl"
          src="/5.jpg"
          alt="Nice picture "
          width={500}
          height={700}
          layout="responsive"
        />
      </div>
      <div className="bg-secondary rounded-2xl flex">
        <p className="font-bold m-auto text-center">
          13+
          <br />
          Programs
        </p>
      </div>
      <div className="col-span-2">
        <Image
          className="rounded-2xl"
          src="/3.jpg"
          alt="Nice picture "
          width={1080}
          height={720}
          layout="responsive"
        />
      </div>
      <div>
        <Image
          className="rounded-2xl"
          src="/4.jpg"
          alt="Nice picture "
          width={500}
          height={720}
          layout="responsive"
        />
      </div>
    </div>
  );
}

export default GalleryComponent
