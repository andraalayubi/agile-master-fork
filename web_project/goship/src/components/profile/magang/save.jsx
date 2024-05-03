import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router

const Buttonsave = () => {
  return (
    <div className='flex flex-col  w-full h-full'>
      <div className=''>
        {/* Ganti button dengan Link */}
        <Link to="/login">
          <button className='outline bg-orange text-white hover:bg-white font-bold w-[345px] py-2 border-orange hover:text-orange outline-orange rounded'>
            Save Changes
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Buttonsave;
