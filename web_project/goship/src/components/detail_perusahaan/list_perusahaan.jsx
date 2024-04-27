import React from 'react'
import styles from "../../style";
import Cardintern from './card_intern';

const Listperusahaan = () => {
  return (
    <>
    <section id="" className={` flex md:flex-row flex-col`}>
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-10`}>
            <div className="flex flex-row justify-between items-center w-full">
                <h1 className="flex-1 font-poppins font-semibold ss:text-[30px] text-orange ss:leading-[50.8px]">
                    OUR COMPANIES <br className="sm:block hidden" />{" "}
                </h1>
            </div>
            <div className="flex flex-row justify-between items-center w-full">
                <h1 className="flex-1 font-poppins font-semibold ss:text-[40px] text-black ss:leading-[75.8px] leading-[60px]">
                    <span className="text-black ">Get information about your</span>{" "}
                    <span className="text-orange">dream company</span>{" "}
                </h1>
            </div>
        </div>
        
    </section>
    <div className={`${styles.flexCenter} content-center items-center py-5`}>
        <Cardintern />
    </div>
        
    </>
  )
}

export default Listperusahaan