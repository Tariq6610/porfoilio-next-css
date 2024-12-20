import { forwardRef } from "react";
import { mulish } from "@/utils/fonts";
import styles from "./hero.module.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

const Hero = forwardRef<HTMLDivElement>((__,ref) => {

  gsap.registerPlugin(ScrollTrigger)

const containerRef = useRef(null)
const textRef = useRef(null)
const imageContainerRef = useRef(null)
const imageRef = useRef(null)

  useGSAP(()=>{
    const tl = gsap.timeline(
      {
        scrollTrigger:{
          trigger: containerRef.current,
        }
      }
    )
    tl.from(textRef.current,{
      xPercent : -30,
      delay: 1,
      duration: 1.3,
      opacity: 0,
    }, "a")

    tl.from(imageContainerRef.current,{
      xPercent : 30,
      delay: 1,
      duration: 1.3,
      opacity: 0,
      transition: ""
    },"a")

    tl.to(imageRef.current, {
      x: -24,
      y: -24,
    })
    
  })


  return (
    <section ref={containerRef}>
      <div ref={ref} className={styles.container}>
        <div ref={textRef} className={styles.textContainer}>
          <h1 style={{width: 'fit-content', marginBottom: '2rem', marginTop: '1rem', fontSize: 'clamp(40px, 5vw + 1rem, 60px)'}}
            className={`${mulish}`}>M Tariq</h1>
          <p className={styles.paragraph}>
            <span style={{fontWeight: 'bold', background: 'linear-gradient(to right, #fac37b, transparent)'}}>
              Frontend Developer
            </span>
            , with knowledge in web development and design, i offer the best
            projects resulting in qualitywork
          </p>
          <div className={styles.svgContainer}>
            <svg
              width="53"
              height="81"
              viewBox="0 0 53 81"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M51.0477 1.17087C40.4513 17.1607 29.0523 32.4971 19.0372 48.8629C13.2804 58.2703 -3.92008 86.412 2.91504 77.7563C14.1498 63.5292 23.3468 47.4314 33.901 32.6695C37.9902 26.9499 42.2523 21.395 46.5698 15.8481C48.2313 13.7136 49.8214 12.2153 47.4714 15.8092C36.9829 31.8496 25.4188 47.1543 14.8614 63.1553C13.7348 64.8628 10.6583 70.0727 12.1285 68.6502C17.5175 63.4362 22.0878 57.1433 26.7655 51.3269C32.3983 44.3228 37.6555 36.9359 43.6299 30.2146C45.776 27.8003 48.0708 24.232 50.6916 22.3437C55.3294 19.0022 45.7662 32.6808 42.8159 37.5768C37.9058 45.7249 32.2719 53.4829 27.191 61.523"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
        <div ref={imageContainerRef} className={styles.imageOuterContainer}>
          <div ref={imageRef} className={styles.imageInnerContainer}>
            <img style={{width: '100vw', objectFit: 'cover'}}  src="/profile.jpg" alt="" />
          </div>
          <div className={styles.boderBox}></div>
          <div style={{position: 'absolute'}}>
      
          </div>
        </div>
      </div>
    </section>
  );
})

Hero.displayName = "Hero";
export default Hero