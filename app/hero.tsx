import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative flex flex-col justify-center align-middle">
      <div className="sm:hidden">
        <Image
          src="/phonebg2.png"
          width={700}
          height={1000}
          alt="smallscreen"
          className="h-full"
        />
      </div>
      <div className="hidden sm:block">
        <Image
          src="/mdscreen.png"
          width={2000}
          height={1000}
          alt="big screen"
          className="h-screen object-none"
        />
      </div>
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                     bg-white bg-opacity-75 w-4/5 h-80 sm:h-2/5 rounded-[15px] sm:rounded-[20px] sm:w-3/5 content-center justify-items-center"
      >
        <p className="text-5xl text-black text-center font-bold m-2 sm:text-6xl leading-[70px] sm:leading-relaxed">
          Hi there, I&apos;m Eeshita
        </p>
        <p className="text-1xl text-black text-center">ee • she • tah</p>
      </div>
    </div>
  );
}
