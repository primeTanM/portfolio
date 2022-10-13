import React from "react";
import Tags from "./Tags";
import "./About.css";
import { motion } from "framer-motion/dist/framer-motion";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import {  Link } from "react-router-dom";

const About = () => {
  return (
    <motion.div
      className="about-div"
      // custom="sync"
      initial={{x:100, opacity: 0 }}
      animate={{x: 0, opacity: 1, transition:{duration: 0.3, ease:'easeOut'}}}
      exit={{ x: -100, opacity: 0,  transition:{duration: 0.3, ease:'easeIn'}}}
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
      <div className="arrowDiv">
          <Link style={{ textDecoration: "None" }} to="/">
            <AiOutlineLeft
              style={{ color: "white", fontSize: "50px", marginLeft: "5px" }}
            />
          </Link>
          <Link style={{ textDecoration: "None" }} to="/projects">
            <AiOutlineRight
              style={{ color: "white", fontSize: "50px", marginRight: "5px" }}
            />
          </Link>
        </div>
      <div
        className="about-para"
        style={{
          fontSize: "1.3rem",
          lineHeight: "1.9",
          width: "70%",
          marginTop: "12rem",
        }}
      >
        <div style={{ display: "flex" }}>
          <div style={{ fontSize: "6rem", transform: "translateY(-3.5rem)" }}>
            <span className="singleQuotesLeft">&#8216;</span>
            <span className="singleQuotesLeft" style={{ color: "white" }}>
              &lsquo;{" "}
            </span>
          </div>
          <div>
            Hey guys, I am{" "}
            <span style={{ backgroundColor: "de9295" }}>Tanmay</span> Mishra,
            your friendly neighbourhood developer from India. I am a final year
            student at VIT Vellore pursing Bachelors of Technology in Computer
            Science and Engineering. I would consider myself a very creative
            person, basically a boiling hotpot of ideas about to burst out.
            Since a very young age, I took a likeness to art, designs, UI and
            stuff(btw I sketch also ✏️) which basically made me choose frontend
            development. But I have also experience in backend
            development(NodeJS) although I am still learning. I am also a
            competitive programmer and umm... a leetcoder and I primarily code
            in C++.
          </div>
        </div>
        <br></br>
        My abundant energy fuels me in pursuit of many interests, and hobbies
        and artistic endeavours.I'm a fast learner, able to pick up new skills
        and juggle different projects and roles with relative ease.
        <br></br>
        <br></br>
        Here are some of the tools and skills I am versed with:
      </div>

      <Tags />
    </motion.div>
  );
};

export default About;
