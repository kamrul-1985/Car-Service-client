import React from 'react';
import { BsArrowRight } from "react-icons/bs";

const ServiceCard = ({service}) => {

      const{_id, title, img , price} = service;

      return (
            <div>
                <div className="card w-[100%] bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img} alt="Shoes" className="rounded-xl h-44" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{title}</h2>
    <p className='text-red-400 text-xl  front-bold'>${price}</p>
    <button className='text-xl font-bold'> <BsArrowRight/> </button>
    
  </div>
</div>  
            </div>
      );
};

export default ServiceCard;