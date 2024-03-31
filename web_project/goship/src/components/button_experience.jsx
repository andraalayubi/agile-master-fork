import React, { useState } from 'react';
import CardForm from './form_post';

const ButtonExperience = () => {
  const [showForm, setShowForm] = useState(false); 
  const handleClick = () => {
    setShowForm(true);
  };

  return (
    <div className='xl:max-w-[1280px] w-full h-full'>
      <button class="bg-orange text-white hover:bg-white font-bold py-2 px-4 border-b-2 border-white hover:text-black rounded-lg "
        onClick={handleClick}>
        Add Experience
      </button>
      {showForm && <CardForm onClose={() => setShowForm(false)} />} {/* Conditionally render the form */}
    </div>
  );
};

export default ButtonExperience;
