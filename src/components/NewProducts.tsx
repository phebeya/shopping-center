
import React from "react";
import ProductCard from "./ProductCard";

const productsData = [
    {
        img:"/p6.jpg",
        title:"Samsung Galaxy S21",
       desc:"97% Off",
       rating:4,
       price: "749",

          
        },
      {
        img:"/p6.jpg",
        title:"Samsung Galaxy S21",
       desc:"97% Off",
       rating:4,
       price:"749",

          
        },
        {
            img:"/p6.jpg",
            title:"Samsung Galaxy S21",
           desc:"97% Off",
           rating:4,
           price:"749",
    
              
            },
        {
        img: "/p6.jpg",
        title:"Samsung Galaxy S21",
       desc:"97% Off",
       rating:4,
       price: "749",

          
        },
        {
        img: "/p7.jpg",
        title:"Samsung Galaxy S21",
       desc:"97% Off",
       rating:4,
       price: "749",

          
        },
        {
        img:"/p7.jpg",
        title:"Samsung Galaxy S21",
       desc:"97% Off",
       rating:4,
       price:"749",

          
        },
        {
        img: "/p7.jpg",
        title:"Samsung Galaxy S21",
       desc:"97% Off",
       rating:4,
       price:"800",

          
        },
        {
            img:"/p7.jpg",
            title:"Samsung Galaxy S21",
           desc:"97% Off",
           rating:4,
           price:"749",
    
              
            },
        {
            img: "/p8.jpg",
            title:"Samsung Galaxy S21",  
           desc:"97% Off",
           rating:4,
           price:"800",
              
      },
        
      {
        img: "/p8.jpg",
        title:"Samsung Galaxy S21",  
       desc:"97% Off",
       rating:4,
       price:"800",
          
  },
  {
    img: "/p8.jpg",
    title:"Samsung Galaxy S21",  
   desc:"97% Off",
   rating:4,
   price:"800",
      
},
{
    img: "/p8.jpg",
    title:"Samsung Galaxy S21",  
   desc:"97% Off",
   rating:4,
   price:"800",
      
},
{
    img: "/p9.jpg",
    title:"Samsung Galaxy S21",  
   desc:"97% Off",
   rating:4,
   price:"800",
      
},
{
    img: "/p9.jpg",
    title:"Samsung Galaxy S21",  
   desc:"97% Off",
   rating:4,
   price:"800",
      
},

{
    img: "/p9.jpg",
    title:"Samsung Galaxy S21",  
   desc:"97% Off",
   rating:4,
   price:"800",
      
},
{
    img: "/p9.jpg",
    title:"Samsung Galaxy S21",  
   desc:"97% Off",
   rating:4,
   price:"800",
      
},


    
];



const NewProducts = () => {
  return( 
  <div>
    <div className="container pt-16">
   <h2 className="font-medium text-2xl pb-4">Popular Products</h2> 
  <div className=" grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2
  lg:grid-cols-4 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10 ">

{productsData.map((item, index)=> (
    <ProductCard 
     key={index}
    img={item.img}
    title={item.title}
    desc={item.desc}
    rating={item.rating}
    price={item.price}
    />

))}
    
   </div>
    </div>
    </div>
  );
};


export default NewProducts;
