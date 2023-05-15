import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const OurServices = () => {

      const [services, setServices] = useState([]);

       useEffect(() => {
            fetch('Service.json')
            .then(res => res.json())
            .then(data => setServices(data))
      },[])

      return (
            <>
            <div className='text-center mt-8'>
                 <h1 className="text-2xl font-bold text-red-400">About Us</h1>
                 <h1 className="text-4xl font-bold my-5">Our Service Area</h1>
                 <p>the majority have suffered alteration in some form, by injected humour,<br /> or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-3 gap-5 mt-8'>
                 {
                  services.map(service => <ServiceCard
                  key={service._id}
                  service={service}></ServiceCard>)
                 }
            </div>
            </>
      );
};

export default OurServices;