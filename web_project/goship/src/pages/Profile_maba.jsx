import React, { useEffect, useState } from 'react'
import styles from "../style";
import {Navbar, Identitas, Formprofile, Instruction} from "../components/profile/magang"


const Profilemaba = (loggedUser) => {
  const [user, setUser] = useState(null)

  useEffect(()=>{
    if(loggedUser != null){
      setUser(loggedUser);
    }
  },[user])
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