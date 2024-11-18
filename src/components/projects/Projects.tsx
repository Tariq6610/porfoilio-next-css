import { forwardRef } from "react"
import { mulish } from "@/utils/fonts"
import styles from "./projects.module.css"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"

gsap.registerPlugin(ScrollTrigger)

const Projects = forwardRef<HTMLDivElement>((__, ref) => {

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
          y:-40,
          stagger: 0.2,
          duration: 1
          
      })
  })

    return (
      <div
        ref={ref}
        className={styles.container}
      >
        <h1 style={{fontSize: 'clamp(40px, 5vw + 1rem, 60px)'}}
          className={`${mulish}`}>
          Proje
          <span style={{background: 'linear-gradient(to right, #fac37b, transparent)'}}>
            cts
          </span>
        </h1>

        <div ref={containerRef} className={styles.cardsContainer}>
          <a href="https://food-panda-mini-hackaton-d2k5n54vi-tariq-syeds-projects.vercel.app/" target="_blank">
              <div className={styles.card}>
                <div>
                  <img src="/projects/FoodPanda.png" alt="" />
                </div>
                <h1 >Food Panda App</h1>
                <div >
                  This project is a mini hackathon submission for a FoodPanda-themed
                  web application. It is a simple, responsive web app designed to
                  display a menu and interact with Firebase for data storage and
                  retrieval.
                </div>
              </div>
          </a>

          <a href="https://lms-cfiw-70qiro9w1-tariq-syeds-projects.vercel.app/" target="_blank">
              <div className={styles.card}>
                <div>
                  <img  src="/projects/lms.png" alt="" />
                </div>
                <h1 >
                  Learning Management System
                </h1>
                <div className="font-bold text-gray-500">
                  This Learning Management System (LMS) provides a seamless platform
                  for both admins and users to manage and access educational
                  content.
                </div>
              </div>
          </a>

          <a href="https://quiz-ciozvsjx9-tariq-syeds-projects.vercel.app/" target="_blank">
              <div className={styles.card}>
                <div>
                  <img  src="/projects/QuizApp.png" alt="" />
                </div>
                <h1 >Quiz App</h1>
                <div className="font-bold text-gray-500">
                  This Quiz App offers an engaging and time-bound quiz experience
                  for users. The app allows users to attempt quizzes within a
                  specific time limit and view their results once the quiz is
                  completed.
                </div>
              </div>
          </a>

          <a href="https://react-assignment-2-5kpg6odmw-tariq-syeds-projects.vercel.app/" target="_blank">
              <div className={styles.card}>
                <div>
                  <img  src="/projects/Recepes.png" alt="" />
                </div>
                <h1>Food Recepes App</h1>
                <div>
                  This Food Recipe App provides users with a vast collection of
                  recipes from around the world, fetching data via an API for a
                  dynamic and constantly updated experience.
                </div>
              </div>
          </a>

          <a href="https://tariq6610.github.io/News_API_Application/" target="_blank">
              <div className={styles.card}>
                <div>
                  <img  src="/projects/News.png" alt="" />
                </div>
                <h1 >News App</h1>
                <div>
                  This News App delivers the latest headlines and breaking
                  news from around the world, fetching data dynamically via an API
                  to provide real-time updates.
                </div>
              </div>
          </a>

          <a href="https://resume-builder-hackathon-v2bc-upto-milestone-5-d314aqgu6.vercel.app/" target="_blank">
              <div className={styles.card}>
                <div>
                  <img  src="/projects/Resume-Builder.png" alt="" />
                </div>
                <h1 >Resume Builder App</h1>
                <div>
                This Resume Builder allows users to easily create, customize, and share their professional resumes. With a simple and intuitive interface, users can build a tailored resume, share it and download it in various formats.
                </div>
              </div>
          </a>

          <a href="https://react-todo-ncdex8xyw-tariq-syeds-projects.vercel.app/" target="_blank">
              <div className={styles.card}>
                <div>
                  <img  src="/projects/Todo.png" alt="" />
                </div>
                <h1>Todo App</h1>
                <div>
                This To-Do Application allows users to create, manage, and track their tasks efficiently. Whether it is for daily chores, work tasks, or personal projects, this app provides a simple, organized way to stay on top of your to-do list.
                </div>
              </div>
          </a>

          <a href="https://governor-website-93skgsmyh-tariq-syeds-projects.vercel.app/" target="_blank">
              <div className={styles.card}>
                <div>
                  <img  src="/projects/Governor.png" alt="" />
                </div>
                <h1>Governor website Clone</h1>
                <div>
                This Governor Website Clone replicates the structure and design of a government portal, featuring page routing in Next.js for fast, seamless navigation and dynamic content management
                </div>
              </div>
          </a>

          <a href="https://tariq6610.github.io/Ramzan_countDown/" target="_blank">
              <div className={styles.card}>
                <div>
                  <img  src="/projects/Ramadan.png" alt="" />
                </div>
                <h1>Ramadan Countdown App</h1>
                <div>
                The Ramadan Countdown App provides users with an accurate countdown to the next Ramadan, displaying the exact number of days, hours, minutes, and seconds remaining.
                </div>
              </div>
          </a>

        </div>
      </div>
    );
  }) 


Projects.displayName = "Projects";
export default Projects