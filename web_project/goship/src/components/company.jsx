import React from 'react';
import styles  from '../style';
import CardCompany from './card_company';



const Perusahaan = () => (

  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-white-gradient-2 rounded-[24px] box-shadow section-container` }>
 
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
)

export default Perusahaan;