import React from "react"; // Menambahkan impor React
import styles from "../style";
<<<<<<< HEAD
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
=======
import {Navbar,Hero,AddExperience, Footer, Cardintern} from "../components";



const Home = () => {
  return (
     <>
    <div className="bg-orange-gradient-navbar w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar  />
>>>>>>> dbd0b5972f4ca7be807fc76e1f3df1e9d00728aa
        </div>
      </div>

<<<<<<< HEAD
      <div className={`bg-repeat bg-orange-gradient overflow-visible ${styles.flexStart} pb-20`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
=======
    <div className={`bg-repeat bg-orange-gradient overflow-visible ${styles.flexStart} pb-32 `}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
>>>>>>> dbd0b5972f4ca7be807fc76e1f3df1e9d00728aa
      </div>

<<<<<<< HEAD
      <div className={`bg-repeat overflow-visible ${styles.flexStart} pb-15 page-background`}>
  <div className={`${styles.boxWidth}`}>
    <Perusahaan />
  </div>
</div>


      <div className={`bg-white overflow-visible ${styles.flexCenter} pt-20`}>
        <div className={`${styles.boxWidth}`}>
          <AddExperience />
        </div>
=======
    <div className={` overflow-hidden ${styles.flexCenter} `}>
      <div className={`${styles.boxWidth}`}>
        <div className={``}>
          <AddExperience />
        </div>
          <Footer />
>>>>>>> dbd0b5972f4ca7be807fc76e1f3df1e9d00728aa
      </div>

      
    </>
  );
};

export default Home;
