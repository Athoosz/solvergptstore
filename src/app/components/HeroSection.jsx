import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12 mt-6">
        <div className="col-span-7 place-self-center text-center sm:text-left ">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#59362E] to-[#260101]">
              OIIIIII
            </span>
            <br></br>
          </h1>
          <p className="text-[#260101] text-base sm:text-lg mb-6 lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ipsa
            sint ullam voluptas ratione nostrum error provident veritatis
            delectus magni iste nobis dolorum, expedita saepe, alias iusto
            explicabo dolore? Provident.
          </p>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0 lg:ml-28">
          <div className="rounded-full bg-[#fff3dd] w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] relative ml-10">
            <Image
              src="/images/logo.jpg"
              alt="hero image"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
