import React from 'react';
import styles  from '../style';
import CardCompany from './card_company';



const Perusahaan = () => (
  <div className="px-32 object-top">
  <section id='companies' className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col  rounded-[24px] box-shadow bg-white section-container w-max-auto`}>
 
    <div className="flex-1 flex flex-col" style={{ width: '80px', height: 'auto'}}>
      <div> 
      <h4 className={`${styles.paragraph} flex-1 font-poppins font-semibold ss:text-[40px] text-[40px]`} style={{ color: '#F55F1D' }}>OUR COMPANY</h4>
      <h1 className="flex-1 font-poppins font-semibold ss:text-[30px] text-[30px] text-black ss:leading-[70.8px] leading-[75px]">
                    <span className="text-black">Get information about your </span>{" "}
                    <span className="text-orange">dream company</span>{" "}
                </h1>
    </div>
    
    <div className="mt-auto">
      <CardCompany />
    </div>

    <div>

    </div>
    </div>
   
   </section>
   </div>
)

export default Perusahaan;