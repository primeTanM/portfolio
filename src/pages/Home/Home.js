import React from "react";
import background from "../../assets/images/home.jpg";
import "./Home.css";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion/dist/framer-motion";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import {  Link } from "react-router-dom";

const Home = () => {
  const el = useRef(null);
  // const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "a Programmer.",
        "a Frontend Developer.",
        "a Software Engineer.",
        "Tanmay Misra.",
      ],
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      // loop: true
    };

    // elRef refers to the <span> rendered below
    const typed = new Typed(el.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.destroy();
    };
  }, []);

  return (
    <motion.div
      className="home-div"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      // exit={{ opacity: 0, transistion: {duration : 0.3}}}
      exit={{ x: -100, opacity: 0,  transition:{duration: 0.3, ease:'easeIn'}}}
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        width: "100vw",
        height: "100vh",
        position: "absolute",
        top: "0",
        bottom: "0",
        right: "0",
        left: "0",
        zIndex: "-1",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="arrowDiv">
          <Link style={{ textDecoration: "None" }} to="/contact">
            <AiOutlineLeft
              style={{ color: "white", fontSize: "50px", marginLeft: "5px" }}
            />
          </Link>
          <Link style={{ textDecoration: "None" }} to="/about">
            <AiOutlineRight
              style={{ color: "white", fontSize: "50px", marginRight: "5px" }}
            />
          </Link>
        </div>
      <div className="intro">
        <h1 className="me">I'm </h1>
        <h1>
          <span ref={el}></span>
        </h1>
      </div>

      <div
        onClick={() =>
          window.open(
            "https://drive.google.com/file/d/1BX8Mf9kAWR6aOGJyZK6ZhXEb6mt00vHv/view?usp=sharing",
            "_blank"
          )
        }
        className="frame"
      ></div>
    </motion.div>
  );
};

export default Home;
