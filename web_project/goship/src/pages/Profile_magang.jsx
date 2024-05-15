import React from 'react'
import styles from "../style";
import {Navbar, CardForm, Identitas, Formprofile, History, Requirement} from "../components/profile/magang"


const Profilemagang = () => {
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
          <div className='pb-8'>
            <History />
          </div>
          <Requirement />
        </div>
    </div>

      <div>
          <div className={`${styles.flexCenter} py-16 `}>
            <div className={`${styles.boxWidth}`}>
              <CardForm />
            </div>
          </div>
      </div>

    </>
  )
}

export default Profilemagang