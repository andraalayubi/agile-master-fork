import React,{useRef, useState,useEffect} from 'react'
import styles from "../style";
import { Footer } from "../components";
import { Navbar,Hero,Listperusahaan } from "../components/detail_perusahaan";


const useIsVisible = (ref) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const { current: observedElement } = ref;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null, // viewport
        rootMargin: '0px', // no margin
        threshold: 0.5, // 50% of the element is visible
      }
    );

    if (observedElement) {
      observer.observe(observedElement);
    }
  
    return () => {
      if (observedElement) {
        observer.unobserve(observedElement);
      }
    };
  }, [ref]);

  return isVisible;
};

const Detailperusahaan = () => {
  const ref = useRef();
    const isVisible = useIsVisible(ref);

  return (
    <>
        
        <div className={` overflow-visible ${styles.flexStart} `}>
            <div className={`${styles.boxWidth}`}>
                <div className=" pb-16">
                    <Navbar />
                </div>
            <div ref={ref} className={`transition-opacity ease-in duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}>
                <Hero />
            </div>
        </div>
        </div>
       
        <div className={` py-28  ${styles.flexStart} `}>
            <div className={`${styles.boxWidth}`}>
                <Listperusahaan />
            </div>
        </div>

        <div>
          <div className={`${styles.flexCenter} `}>
            <div className={`${styles.boxWidth}`}>
              <Footer />
            </div>
          </div>
        </div>
    </>
  )
}

export default Detailperusahaan