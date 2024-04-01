import React from "react"; // Menambahkan impor React
import styles from "../style";
import { Navbar, Hero, AddExperience } from "../components";
import Perusahaan from "../components/company";

const Home = () => {
  return (
    <>
      <div className="w-full">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
      </div>

      <div className={`bg-repeat bg-orange-gradient overflow-visible ${styles.flexStart} pb-20`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-repeat overflow-visible ${styles.flexStart} pb-15 page-background`}>
  <div className={`${styles.boxWidth}`}>
    <Perusahaan />
  </div>
</div>


      <div className={`bg-white overflow-visible ${styles.flexCenter} pt-20`}>
        <div className={`${styles.boxWidth}`}>
          <AddExperience />
        </div>
      </div>

      
    </>
  );
};

export default Home;
