// Home.jsx
import styles from "../style";
import {Navbar,Hero,AddExperience, Footer} from "../components";



const Home = () => {
  return (
     <>
    <div className="bg-orange-gradient-navbar w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar  />
        </div>
      </div>
    </div>

    <div className={`bg-repeat bg-orange-gradient overflow-visible ${styles.flexStart} pb-20`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={` overflow-visible ${styles.flexCenter} pt-20`}>
      <div className={`${styles.boxWidth}`}>
        <AddExperience />
        <Footer />
      </div>
    </div>
    </>
  );
};

export default Home;
