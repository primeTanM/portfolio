import React from "react";
import "./Connect.css";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";
import { FaDev } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";
import { motion } from "framer-motion/dist/framer-motion";

const Connect = () => {
  return (
    <motion.div
      className="connect"
      // initial={{x: 0, opacity: 0}}
      // animate={{x:0, opacity: 1, duration: 3000}}
      // exit={{x:-100, opacity: 0, duration: 3000}}
      initial={{x:500, opacity: 0 }}
      animate={{x: 0, opacity: 1, transition:{duration: 0.5, ease:'easeOut'}}}
      exit={{ x: -500, opacity: 0,  transition:{duration: 0.5, ease:'easeIn'}}}
      // entry={{ opacity: 1, transistion: { duration: 0.5} }}
      style={{
        background: "#201919",
        width: "100vw",
        height: "100vh",
        position: "absolute",
        top: "0",
        bottom: "0",
        right: "0",
        left: "0",
        zIndex: "-1",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="connect-text">
        <h1>
          Let's <span style={{ color: "#de9295" }}>create</span> something great
          !
        </h1>
        <p>
          Or not.If you are someone who likes FRIENDS, Attack on Titan, loves
          playing Table Tennis and Rocket League, or gets lost in space from
          time to time, or just want to chat, get in touch in me. I am sure we
          will have a great experience.{" "}
        </p>

        <p style={{
          fontSize: '1rem', 
          textAlign: 'center',
        }}>
          Made with ♥ by{" "}
          <a style={{
            color: '#de9295'
          }}
            href="https://github.com/primeTanM/portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            primeTanM
          </a>
        </p>
        <div className="social-icons">
          <a
            className="linkedin"
            href="https://www.linkedin.com/in/tanmay-misra/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin />
          </a>
          <a
            className="github"
            href="https://github.com/primeTanM"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub />
          </a>
          <a
            className="insta"
            href="https://www.instagram.com/tanmay.m19/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsInstagram />
          </a>
          <a
            className="dev"
            href="https://dev.to/primetanm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDev />
          </a>
          <a
            className="mail"
            href="mailto:tanmaymisra619@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillMail />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Connect;
