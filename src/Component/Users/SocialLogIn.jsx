import React from 'react';
import { BsFacebook } from "react-icons/bs";
import { BsGoogle } from "react-icons/bs";


const SocialLogIn = () => {
      return (
            <div className='text-center flex justify-center items-center gap-4'>
                  <button className="btn btn-circle text-5xl">
                  < BsFacebook />
</button>
<button className="btn btn-circle text-5xl">
                  < BsGoogle />
</button>
<button className="btn btn-circle btn-outline">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button>
            </div>
      );
};

export default SocialLogIn;