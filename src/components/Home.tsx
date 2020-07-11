import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home: React.FC = () => {
  return (
    <div className="home container">
      <motion.h2
        initial={{
          opacity: 0,
          y: -50
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        transition={{
          duration: 0.75,
          opacity: {
            delay: 0.35
          }
        }}
      >
        Welcome to Pizza Joint
      </motion.h2>
      <Link to="/base">
        <motion.button
          initial={{
            opacity: 0,
            y: -20,
            // width: 0,
            // height: 0,
          }}
          animate={{
            opacity: 1,
            y: 0,
            // width: "auto",
            // height: "auto",
          }}
          transition={{
            delay: 0.25,
            duration: 0.75,
            opacity: {
              delay: 0.35
            }
            , stiffness: 120
          }}
        >
          Create Your Pizza
        </motion.button>
      </Link>
    </div>
  );
};

export default Home;
