import { forwardRef } from "react"
import { MdDeveloperBoard, MdDevices } from "react-icons/md";
import { SiXdadevelopers } from "react-icons/si";
import { mulish } from "@/utils/fonts";
import styles from "./services.module.css"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"

gsap.registerPlugin(ScrollTrigger)

const Services = forwardRef<HTMLDivElement>((__, ref) => {

  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(()=>{
      const tl = gsap.timeline(
          {
              scrollTrigger:{
                  trigger: containerRef.current
              }
          }
      )

      tl.from(containerRef.current,{
          opacity:0,
          duration: 1,
          delay: 0.5
      })
      if(containerRef.current)
      tl.from(containerRef.current.children,{
          y:-30,
          stagger: 0.1,
          duration: 0.7
          
      })
  })


    return (
      <div ref={ref} className={styles.container}>
          <h1 style={{fontSize: 'clamp(40px, 5vw + 1rem, 60px)'}}
           className={`${mulish}`}>Servic<span style={{background: 'linear-gradient(to right, #fac37b, transparent)'}}>es</span></h1>
  
      <div ref={containerRef} className={styles.cardsContainer}>
          <div className={styles.card}>
              <div >
            <div className={styles.iconDiv}>
                <div style={{position: 'relative'}} className="relative"><MdDeveloperBoard /></div>
              <div className={styles.redsquare}></div>
              </div>
                  <h1>Front-End Development</h1>
              </div>
              <div style={{ fontWeight: 'bold', color: '#6b7280' }}
              >I build responsive websites using HTML, CSS, JavaScript, and frameworks like React and Next.js, focusing on user-friendly and visually appealing designs.</div>
              <div></div>
          </div>
  
          <div className={styles.card}>
              <div>
              <div className={styles.iconDiv}>
                <div style={{position: 'relative'}} ><SiXdadevelopers />   </div>
              <div className={styles.redsquare}></div>
              </div>
                  <h1>Back-End Development</h1>
              </div>
              <div style={{ fontWeight: 'bold', color: '#6b7280' }}
              >I develop scalable back-end systems using Node.js, Express, and databases like MongoDB and Firebase, ensuring secure and efficient data handling and API integration.</div>
              <div></div>
          </div>
  
          <div className={styles.card}>
              <div>
              <div className={styles.iconDiv}>
                <div style={{position: 'relative'}} ><MdDevices /></div>
              <div className={styles.redsquare}></div>
              </div>
                  <h1>Full-stack Development</h1>
              </div>
              <div style={{ fontWeight: 'bold', color: '#6b7280' }}
              >I create complete web applications using React, Next.js, Node.js, and Express, ensuring seamless integration between front-end and back-end for optimal performance.</div>
              <div></div>
          </div>
      </div>
      </div>
    )
  }) 

Services.displayName = "Services"
export default Services