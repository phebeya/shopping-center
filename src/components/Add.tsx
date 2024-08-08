"use client";

import React from "react";
import Slider from "react-slick";
import Slide from "./Slide";


const Add = () => {
    var settings = {
        dots: true,
        infinite:true,
        slidesToShow: 1,
        slidesToScroll:1,
        autoplay: true,
        pauseOnHover: false,
    };


    const slideData =[
        {
           id:0,
          img: "/p1.jpg",
          title:"Hello...",
          mainTitle:"Lets,Start your life with new Fashions..",
         
        },
        {
            id:1,
           img: "/p2.jpg",
           title:"Hello...",
           mainTitle:"Change Your LifeStyle With us...",
          
         },
         {
            id:2,
           img: "/p5.jpg",
           title:"Hello...",
           mainTitle:"The Offers are waitting...",
          
         },
         {
            id:3,
           img: "/p10.jpg",
           title:"Hello...",
           mainTitle:"We are eager to provide our service to you..",
          
         },
        
    ];
    

  return <div>
   <div className="container pt-6 lg:pt-0  ">
    <Slider {...settings}>
        {slideData.map((item) =>(
             <Slide key={item.id}
             img={item.img}
             title={item.title}
             mainTitle={item.mainTitle}/>
             
            ) )}
    </Slider>
   </div>

  </div>;
  
};

export default Add;
