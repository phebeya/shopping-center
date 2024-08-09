import Image from "next/image";
import React from "react";

interface propsType {
  img: String;
  title: String;
  mainTitle: String;
}

const Slide: React.FC<propsType> = ({ img, title, mainTitle }) => {
  return (
    <div className="outline-none border-none relative">
      <div
        className="absolute left-[30px] md:left-[70px] max-w-[250px] sm:max-w-[350px] top-[50%] 
    -translate-y-[50%] space-y-2 lg:space-y-4 bg-[#be5e5ea2] sm:bg-transparent p-4 sm:p-0 rounded-lg sm:rounded-none"
      >
        <h3 className="text-pink-800 text-[50px] font-semibold lg:text-[40px] italic py-29 ">
          {title}
        </h3>
        <h2 className="text-yellow-700 text-[20px] md:text-[44px] font-semibold  leading-[1.2] font-serif italic">
          {mainTitle}
        </h2>
      </div>
      <Image
        className=" w-[100%] h-[550px] rounded-xl 
     object-cover object-right md:object-left-bottom py-5 box-content"
        src={img}
        alt="banner"
        width={3000}
        height={500}
      />
    </div>
  );
};

export default Slide;
