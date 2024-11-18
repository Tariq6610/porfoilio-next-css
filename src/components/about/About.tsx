import { forwardRef } from "react"
import { mulish } from "@/utils/fonts"
import styles from "./about.module.css"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef } from "react"

gsap.registerPlugin(ScrollTrigger)

type AboutProp = {
  scrollToContact: () => void;
};

const About = forwardRef<HTMLDivElement, AboutProp>(({scrollToContact}, ref) =>  {

  const imageBoxRef = useRef(null)
  const imageRef = useRef(null)
  const TextContainerRef = useRef(null)
  const containerRef = useRef(null)
  const borderRef = useRef(null)

  useGSAP(()=>{
    const tl = gsap.timeline(
      {
        scrollTrigger: {
          trigger: containerRef.current,
          scroller: 'body',
          start: "top center", 
          end: "bottom center",
        }
      }
    )
    tl.from(TextContainerRef.current,{
      x: -50,
      opacity: 0,
      duration: 1.1,
    },'a')

    tl.from(imageBoxRef.current,{
      opacity: 0,
      x: 50,
      duration: 0.8,
    },"a")
    tl.from(imageRef.current,{
      opacity: 0,
      x:30,
      duration: 0.4
    })
    tl.to(borderRef.current,{
      borderWidth: 8,
      borderColor: '#fca5a5'
    })
  })

  return (
    <section ref={containerRef}>
      <div ref={ref} className={styles.container}>
          <div ref={imageBoxRef} className={styles.imageContainer}>
           <div ref={borderRef} className={styles.imageBorder} >
            <img ref={imageRef} style={{position: 'relative', zIndex: '20'}} src="/profile-2.jpg" alt="" />
           <div className={styles.styleBox}></div>
           </div>
          </div>
          <div ref={TextContainerRef} className={styles.outerTextContainer}>
           <div className={styles.innerTextContainer}>
          <h1 style={{fontSize: 'clamp(40px, 5vw + 1rem, 60px)'}} className={`${mulish}`} >About <span style={{fontWeight: 'bold', background: 'linear-gradient(to right, #fac37b, transparent)'}}>
             Me
            </span></h1>
          <p className={styles.para}>
            <span></span>
            I M an enthusiastic <span style={{fontWeight:'bold'}} >web developer</span>. A detail-oriented and innovative programmer. Passionate about solving complex problems and creating efficient, scalable code for {/*both*/} <span style={{fontWeight:'bold'}}>front-end</span>{/*and back-end*/} systems. Seeking an opportunity to contribute to a dynamic development team and utilize my expertise
          </p>
          <div className={styles.skillsWrap}>
            <div className={styles.badgeWrap}><span style={{fontSize: '1.25rem', fontWeight: 'bold', fontStyle: 'italic'}}>My skills are : </span><div >HTML</div> <div >CSS</div><div >Bootsratp</div> <div >Tailwind</div> <div >JavaScript</div> <div >TypeScript</div> <div >React.Js</div> <div >Next.js</div> <div >Firebase</div>
            </div>
          </div>
          <button onClick={scrollToContact} className={styles.btn}>Contact Me</button>
           </div>
          </div>
      </div>
    </section>
  )
}
)

About.displayName = "About";
export default About