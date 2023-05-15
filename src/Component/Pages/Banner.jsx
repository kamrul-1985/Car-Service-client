import React from 'react';
import Img1 from '../../assets/images/banner/1.jpg'
import Img2 from '../../assets/images/banner/2.jpg'
import Img3 from '../../assets/images/banner/3.jpg'
import Img4 from '../../assets/images/banner/4.jpg'
import Img5 from '../../assets/images/banner/5.jpg'
import Img6 from '../../assets/images/banner/6.jpg'


const Banner = () => {
      return (
            <>
            <div className="carousel w-full h-[600px]">
  <div id="slide1" className="carousel-item relative w-full max-h-screen">
    <img src={Img1} className="w-full rounded-xl" />
    <div className="absolute flex transform -translate-y-1/2 right-5 bottom-5 gap-5">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle bg-orange-600">❯</a>
    </div>
    <div className="absolute h-full top-0 left-0 flex items-center  bg-gradient-to-r from-[#151515] to-transparent [#151515] rounded-xl">
      <div className='w-1/2 mx-20 '>
      <h1 className='text-5xl text-white font-bold'>Affordable Price For Car Servicing</h1>
      <p className='text-xl text-white py-4'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
      <div className='flex text-center gap-5'>
      <button className='btn bg-orange-600'>Discover More </button>
      <button className=' btn btn-outline btn-warning'>Latest Project</button>
      </div>
      </div> 
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full max-h-screen">
    <img src={Img2} className="w-full rounded-xl" />
    <div className="absolute flex transform -translate-y-1/2 right-5 bottom-5 gap-5">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle bg-orange-600">❯</a>
    </div>
    <div className="absolute h-full top-0 left-0 flex items-center  bg-gradient-to-r from-[#151515] to-transparent [#151515] rounded-xl">
      <div className='w-1/2 mx-20 '>
      <h1 className='text-5xl text-white font-bold'>Affordable Price For Car Servicing</h1>
      <p className='text-xl text-white py-4'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
      <div className='flex text-center gap-5'>
      <button className='btn bg-orange-600'>Discover More </button>
      <button className=' btn btn-outline btn-warning'>Latest Project</button>
      </div>
      </div> 
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full max-h-screen">
    <img src={Img3} className="w-full rounded-xl" />
    <div className="absolute flex transform -translate-y-1/2 right-5 bottom-5 gap-5">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle bg-orange-600">❯</a>
    </div>
    <div className="absolute h-full top-0 left-0 flex items-center  bg-gradient-to-r from-[#151515] to-transparent [#151515] rounded-xl">
      <div className='w-1/2 mx-20 '>
      <h1 className='text-5xl text-white font-bold'>Affordable Price For Car Servicing</h1>
      <p className='text-xl text-white py-4'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
      <div className='flex text-center gap-5'>
      <button className='btn bg-orange-600'>Discover More </button>
      <button className=' btn btn-outline btn-warning'>Latest Project</button>
      </div>
      </div> 
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full max-h-screen">
    <img src={Img4} className="w-full rounded-xl" />
    <div className="absolute flex transform -translate-y-1/2 right-5 bottom-5 gap-5">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide5" className="btn btn-circle bg-orange-600">❯</a>
    </div>
    <div className="absolute h-full top-0 left-0 flex items-center  bg-gradient-to-r from-[#151515] to-transparent [#151515] rounded-xl">
      <div className='w-1/2 mx-20 '>
      <h1 className='text-5xl text-white font-bold'>Affordable Price For Car Servicing</h1>
      <p className='text-xl text-white py-4'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
      <div className='flex text-center gap-5'>
      <button className='btn bg-orange-600'>Discover More </button>
      <button className=' btn btn-outline btn-warning'>Latest Project</button>
      </div>
      </div> 
    </div>
  </div>
  <div id="slide5" className="carousel-item relative w-full max-h-screen">
    <img src={Img5} className="w-full rounded-xl" />
    <div className="absolute flex transform -translate-y-1/2 right-5 bottom-5 gap-5">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide6" className="btn btn-circle bg-orange-600">❯</a>
    </div>
    <div className="absolute h-full top-0 left-0 flex items-center  bg-gradient-to-r from-[#151515] to-transparent [#151515] rounded-xl">
      <div className='w-1/2 mx-20 '>
      <h1 className='text-5xl text-white font-bold'>Affordable Price For Car Servicing</h1>
      <p className='text-xl text-white py-4'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
      <div className='flex text-center gap-5'>
      <button className='btn bg-orange-600'>Discover More </button>
      <button className=' btn btn-outline btn-warning'>Latest Project</button>
      </div>
      </div> 
    </div>
  </div>
  <div id="slide6" className="carousel-item relative w-full max-h-screen">
    <img src={Img6} className="w-full rounded-xl" />
    <div className="absolute flex transform -translate-y-1/2 right-5 bottom-5 gap-5">
      <a href="#slide5" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle bg-orange-600">❯</a>
    </div>
    <div className="absolute h-full top-0 left-0 flex items-center  bg-gradient-to-r from-[#151515] to-transparent [#151515] rounded-xl">
      <div className='w-1/2 mx-20 '>
      <h1 className='text-5xl text-white font-bold'>Affordable Price For Car Servicing</h1>
      <p className='text-xl text-white py-4'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
      <div className='flex text-center gap-5'>
      <button className='btn bg-orange-600'>Discover More </button>
      <button className=' btn btn-outline btn-warning'>Latest Project</button>
      </div>
      </div> 
    </div>
  </div>
</div>
            </>
      );
};

export default Banner;