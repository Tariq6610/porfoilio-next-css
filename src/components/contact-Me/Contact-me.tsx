import { FormEvent, forwardRef, useRef } from "react"
import emailjs from '@emailjs/browser';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaWhatsappSquare, FaLinkedin, FaFacebookSquare } from "react-icons/fa";
import styles from "./contact.module.css"


const ContactMe = forwardRef<HTMLDivElement>((__, ref) => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e : FormEvent) => {
    e.preventDefault();
    if(form.current)
    emailjs
      .sendForm(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!, form.current, {
        publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      })
      .then(
        () => {
          toast.success('Email has sent Successfully!');
        },
        (error) => {
          toast.error('FAILED...', error.text);
          console.log('FAILED...', error.text)
        },
      );
  };

  return (
    <>
      <div ref={ref} className={styles.container}>
        <div className={styles.card}>
          <h1
            style={{
              position: "relative",
              left: "-80px",
              display: "flex",
              top: "3.5rem",
              fontSize: "1.875rem",
              fontWeight: "bold",
            }}
          >
            Contact{" "}
            <span
              style={{
                fontWeight: "bold",
                background: "linear-gradient(to right, #fac37b, transparent)",
              }}
            >
              Me
            </span>
          </h1>
          <div
            style={{
              fontFamily: "'Lucida Sans', sans-serif",
              position: "relative",
              fontSize: "0.875rem",
              top: "4rem",
            }}
          >
            <div>
              <p style={{ marginBottom: "1rem" }}>
                i will read all emails. Send me any message you want and i will
                get back to you.
              </p>
              <p>
                i need your <span style={{ fontWeight: "bold" }}>Name</span> and{" "}
                <span style={{ fontWeight: "bold" }}>Email Address</span>, but
                you will not receive anything other than your reply
              </p>
            </div>
          </div>
        </div>
        <div className={styles.formContainer}>
          <div>
            <h1
              style={{
                marginBottom: "1.5rem",
                fontWeight: "bold",
                fontSize: "1.25rem",
              }}
            >
              send Me A Message
            </h1>
            <form ref={form} onSubmit={sendEmail}>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                  gap: "1.25rem",
                }}
              >
                <div style={{ width: "47%" }} className={styles.inputWrap}>
                  <input
                    style={{
                      width: "100%",
                      backgroundColor: "transparent",
                      padding: "0.5rem",
                      height: "100%",
                    }}
                    type="text"
                    placeholder="First Name"
                    name="user_name"
                    required
                  />
                </div>
                <div style={{ width: "47%" }} className={styles.inputWrap}>
                  <input
                    style={{
                      width: "100%",
                      backgroundColor: "transparent",
                      padding: "0.5rem",
                      height: "100%",
                    }}
                    type="email"
                    placeholder="Email Address"
                    name="user_email"
                    required
                  />
                </div>
                <div style={{ width: "100%" }} className={styles.inputWrap}>
                  <input
                    style={{
                      width: "100%",
                      backgroundColor: "transparent",
                      padding: "0.5rem",
                      height: "100%",
                    }}
                    type="text"
                    placeholder="Subject"
                    name="user_subject"
                    required
                  />
                </div>
                <div
                  style={{ width: "100%", height: "11rem" }}
                  className={styles.inputWrap}
                >
                  <textarea
                    style={{
                      width: "100%",
                      backgroundColor: "transparent",
                      padding: "0.5rem",
                      height: "100%",
                    }}
                    placeholder="Message"
                    name="user_message"
                    required
                  />
                </div>
                <button type="submit" value="Send" className="">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className={styles.socials}>
          <div style={{ width: "50%" }}>
            <p>Does not send Emails</p>
            <p style={{ fontWeight: "bold" }}>Write me on my social network</p>
          </div>
          <div style={{ display: "flex", gap: "0.5rem", color: "white" }}>
            <a href="https://wa.me/923449179576" target="_blank">
              <button>
                <FaWhatsappSquare />
              </button>
            </a>
            <a
              href="https://www.linkedin.com/in/tariq-syed-788940289/"
              target="_blank"
            >
              <button>
                <FaLinkedin />
              </button>
            </a>
            <a href="https://www.facebook.com/tariq.syed.393/" target="_blank">
              <button>
                <FaFacebookSquare />
              </button>
            </a>
          </div>
        </div>
      </div>
      <div>
        <div className={styles.footer}>
          <div>
            <p style={{ color: "#9ca3af" }}>Does not send Emails</p>
            <p style={{ color: "#d1d5db", fontWeight: "bold" }}>
              Write me on my social network
            </p>
          </div>
          <div style={{ display: "flex", gap: "0.5rem", color: "white" }}>
            <a href="https://wa.me/923449179576" target="_blank">
              <button>
                <FaWhatsappSquare />
              </button>
            </a>
            <a
              href="https://www.linkedin.com/in/tariq-syed-788940289/"
              target="_blank"
            >
              <button>
                <FaLinkedin />
              </button>
            </a>
            <a href="https://www.facebook.com/tariq.syed.393/" target="_blank">
              <button>
                <FaFacebookSquare />
              </button>
            </a>
          </div>
        </div>
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
    </>
  );
}) 

ContactMe.displayName = "ContactMe";
export default ContactMe