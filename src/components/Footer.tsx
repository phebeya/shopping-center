import React from 'react'

const Footer = () => {
  return (
    <div className="bg-blackish text-gray-300 text-left py-8 md:pb-30 font-bold text-4xl grid grid-cols-5 row-span-2 space-x-5">
      <div className="px-4 py-3 space-x-3 " > EZIchoice <br />
      <div className="text-sm py-2">© 2024 EziChoice. All rights reserved</div></div> 
        

       
        <div className= "bg-blackish text-gray-300 text-left py-6  text-base grid-cols-4 ">
        Deals
        <div className="py-3">products <br />
        Services<br />
        Events
       
        </div>
        </div>
        <div className= "bg-blackish text-gray-300 text-left py-6 text-base ">
      Company
      <div className="py-3">About <br />
        Jobs<br />
      Branding
        </div>
        </div>
        <div className= "bg-blackish text-gray-300 text-left py-6  text-base ">
       Resource
       <div className="py-3">College <br />
        Support<br />
        Safety
        </div>
        </div>
        <div className= "bg-blackish text-gray-300 text-left py-6 text-base ">
      Policies
      <div className="py-3">Terms <br />
       Privacy<br />
      Condition
        </div>

       
        </div>
        <div className="w-full  sm:w-[300px] md:w-[40%]  relative ps-5 col-span-3 font-serif text-base space-y-3 ">
        <input className="border-gray-200 border p-2 px-4 text-blackish rounded-lg w-full text-lg" type="text"  placeholder="E-mail"/>
        <div className="bg-blue-500 sm:w-[180px] sm:h-[45px] rounded-md text-lg text-center py-2  "><button />Subscribe</div>

       
       </div>
       
        </div>
       
 
   
  );
};

export default Footer;