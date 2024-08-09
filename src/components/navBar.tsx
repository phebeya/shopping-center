import React from "react";

const NavBar = () => {
  return (
   
    <div className=" border-b border-gray-400 py-6  lg:block   ">
      
      <div className=" container sm:flex justify-between items-center  ">
     
        <div className="  font-bold text-4xl text-center pb-4 sm:pb-0 text-blackish font-serif">
          EZICHOICE
        </div>


        <div className="flex w-fit gap-4  font-medium py-4 text-blackish">
          <div className="space-x-3  grid md:grid-cols-5 hover:text-gray-800 ">
          
            <a className="navBar__link relative " href="#">
              Home
            </a>
            <a className="navBar__link relative " href="#">
              DropDown
            </a>
            <a className="navBar__link relative " href="#">
              Service
            </a>
            <a className="navBar__link relative " href="#">
              Pricing
            </a>
            <a className="navBar__link relative " href="#">
              Contact
            </a>
         
        </div>
        </div>
    </div>
 </div>
  );
};

export default NavBar;
