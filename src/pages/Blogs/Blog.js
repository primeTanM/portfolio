import React from "react";
import { motion } from "framer-motion/dist/framer-motion";

const Blog = () => {
  return (
    <motion.div
      className="blog"
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      // exit={{ opacity: 0, transistion: {duration : 0.3}}}
      initial={{x:500, opacity: 0 }}
      animate={{x: 0, opacity: 1, transition:{duration: 0.5, ease:'easeOut'}}}
      exit={{ x: -500, opacity: 0,  transition:{duration: 0.5, ease:'easeIn'}}}
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
      <p style={{ fontSize: "2rem" }}>Coming Soon...</p>
      <img
        src={
          "https://i.pinimg.com/originals/de/32/d6/de32d6f4a601b278c99fd36347dc0dbe.gif"
        }
        alt=""
      />
    </motion.div>
  );
};

export default Blog;
