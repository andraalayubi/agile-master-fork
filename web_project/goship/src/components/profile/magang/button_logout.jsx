import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router

const Buttonlogout = () => {
  return (
    <div className='xl:max-w-[1280px] w-full h-full'>
      <div className=''>
        {/* Ganti button dengan Link */}
        <Link to="/login">
          <button className='outline bg-transparent text-orange hover:bg-orange font-bold py-2 px-24   border-orange hover:text-white outline-orange rounded'>
           Logout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Buttonlogout;
