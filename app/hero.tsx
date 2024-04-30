import Image from "next/image";

export default function Hero() {
  return (
    <>
      <Image
        src="/phonebg2.png"
        width={700}
        height={1000}
        alt="Picture of the author"
        className="h-screen"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                     bg-white bg-opacity-75 w-4/5 h-2/5 rounded-[15px] content-center justify-items-center">
        <p className="text-5xl text-black text-center font-bold m-2">Hi there, I'm Eeshita</p>
        <p className="text-1xl text-black text-center">ee • she • tah</p>
      </div>
    </>
  );
}
