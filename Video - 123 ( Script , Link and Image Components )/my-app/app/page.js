import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="container mx-auto my-4 size-80 bg-slate-200 relative">
        <Image
          className="object-contain bg-slate-200"
          fill={true}
          src="http://www.menucool.com/slider/prod/image-slider-3.jpg"
          alt="Picture of the author"
        />
      </div>
    </>
  );
}
