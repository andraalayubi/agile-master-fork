import React from 'react'
import styles from "../style";
import {Navbar, Identitas, Formprofile, Instruction} from "../components/profile/magang"


const Profilemaba = () => {
  return (
    <>
    <div className=" pb-20">
        <Navbar />
    </div>

    <div className="flex flex-row px-20">
        <Identitas />
        <div className='px-6'>
          <Formprofile />
        </div>
        <div className='flex flex-col'>
       
            <Instruction />
          </div>
    </div>

      <div>
          <div className={`${styles.flexCenter} py-16 `}>
           
          </div>
      </div>

    </>
  )
}

export default Profilemaba