"use client"
import { useState, forwardRef } from "react";
import { BsMenuButtonWide } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import styles from "./header.module.css"

type HeaderProps = {
  scrollToHero: () => void,
  scrollToAbout: () => void;
  scrollToServices: () => void;
  scrollToProjects: () => void;
  scrollToContact: () => void;
};


const Header = forwardRef<HTMLElement, HeaderProps>(({ 
  scrollToHero, 
  scrollToAbout,
  scrollToServices,
  scrollToProjects,
  scrollToContact},ref) => {
    const [navVisibility, setnavVisibility] = useState(false)

    function visibility(){
      setnavVisibility(!navVisibility)
      console.log("ok");
      
    }
  
    return (
      <>
      <header ref={ref} >
        <div className={styles.bigNav}>
          <div style={{display:'flex',justifyContent:'center', alignItems:'center',gap:'0.75rem'}} >
            <h1 style={{ width: '3rem', height: '3rem', display: 'flex', fontWeight: 'bold', justifyContent: 'center', alignItems: 'center', borderRadius: '9999px', backgroundColor: 'black', color: 'white' }}>
              T
             </h1>
            <h1 style={{fontWeight:'bold'}}>M Tariq</h1>
            <a href="https://github.com/Tariq6610" target="_blank"><div style={{fontSize:"1.5rem",lineHeight: '2rem'}} className="text-2xl"><FaGithub /></div></a>
            </div>
          <div style={{display:'flex',alignItems:'center'}}>
            <ul>
              <li onClick={scrollToHero}>Home</li>
              <li onClick={scrollToAbout}>About</li>
              <li onClick={scrollToServices}>Services</li>
              <li onClick={scrollToProjects}>Projects</li>
              <li onClick={scrollToContact}>Contact Me</li>
            </ul>
          </div>
          <div onClick={visibility} className={styles.menuBurger}><BsMenuButtonWide /></div>
        </div>
        <div className={`${styles.mobNav} ${navVisibility ? styles.mobNavVisible : styles.mobNavHidden}`}>
        <h1 style={{ width: '3rem', height: '3rem', display: 'flex', fontWeight: 'bold', justifyContent: 'center', alignItems: 'center', borderRadius: '50%', backgroundColor: 'black', color: 'white' }}
        >T</h1>
          <div>
            <div style={{ display: 'flex', fontWeight: 'bold', flexDirection: 'column', alignItems: 'center', gap: '2.5rem', color: '#cbd5e1' }}>
              <div style={{cursor: 'pointer'}}  onClick={() => {scrollToHero(); visibility()}}>Home</div>
              <div style={{cursor: 'pointer'}}  onClick={() => {scrollToAbout(); visibility()}}>About</div>
              <div style={{cursor: 'pointer'}}  onClick={() => {scrollToServices(); visibility()}}>Services</div>
              <div style={{cursor: 'pointer'}}  onClick={() => {scrollToProjects(); visibility()}}>Projects</div>
              <div style={{cursor: 'pointer'}}  onClick={() => {scrollToContact(); visibility()}}>Contact Me</div>
              <div onClick={visibility} style={{ padding: '0.75rem 0.75rem', backgroundColor: 'black', color: 'white', cursor: 'pointer', position: 'absolute', top: '1.5rem', right: '1rem' }}>X</div>
            </div>
          </div>
        </div>
      </header>
      </>
    )
})

Header.displayName = "Header";
export default Header