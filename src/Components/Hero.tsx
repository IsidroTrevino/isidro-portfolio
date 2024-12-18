import React from "react";

function Hero() {
  return (
    <div className="pt-32 flex flex-row justify-center gap-20" id="Home">
      <div className="w-2/5 p-8">
        <h1 className=" text-4xl text-white font-bold">Hey! I&apos;m Isidro</h1>
        <p className="text-gray-200 text-lg mt-5">
          I am a 19 year old Software Enginner from Mexico. <br />I really like
          to develop full-stack web and mobile applications, as well as backend
          development.
        </p>
      </div>
      <div className="w-fit">
        <img src="../public/me.jpg" alt="" className="w-60 rounded-3xl" />
      </div>
    </div>
  );
}

export default Hero;
