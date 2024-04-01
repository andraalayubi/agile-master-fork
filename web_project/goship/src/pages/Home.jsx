import React from "react"; // Menambahkan impor React
import styles from "../style";
import { Navbar, Hero, AddExperience, Footer } from "../components";
import Perusahaan from "../components/company";

const Home = () => {
  return (
    <>
      <div className="w-full bg-orange-gradient-navbar">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
      </div>

      <div className={` bg-orange-gradient overflow-visible ${styles.flexStart} pb-80`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      
      <div className="relative">
        <div className={`${styles.boxWidth} absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4`}>
          <Perusahaan />
        </div>
      </div>


      <div className={`bg-white ${styles.flexCenter} pt-80 `}>
        <div className={`${styles.boxWidth}`}>
          <AddExperience />
          <Footer />
        </div>
      </div>

      
    </>
  );
};

export default Home;
