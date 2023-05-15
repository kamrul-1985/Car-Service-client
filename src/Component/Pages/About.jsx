import React from 'react';
import img1 from '../../assets/images/about_us/person.jpg'
import img2 from '../../assets/images/about_us/parts.jpg'

const About = () => {
      return (
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
   <div className='relative '>
      <img src={img1} alt="" className='w-3/4 rounded' />
      <img src={img2} alt="" className='w-2/5 rounded border-8 border-white absolute top-2/3 right-8'/>
   </div>
    <div className="card flex w-full max-w-sm">
      <div className="text-center lg:text-left px-4">
      <h1 className="text-2xl font-bold text-red-400">About Us</h1>
      <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className='btn btn-success'>Get More Info</button>
    </div>
    </div>
  </div>
</div>
      );
};

export default About;