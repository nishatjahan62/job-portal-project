import React from "react";
import { motion, scale } from "motion/react";

const Banner = () => {
  return (
    <div className="lg:mx-20 mx-5">
      <div className="hero bg-blue-100 my-10 py-10  rounded-lg">
        <div className="hero-content flex-col lg:flex-row-reverse gap-20">
          <motion.img
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            src={"/team01.jpg"}
            className="max-w-md rounded-lg shadow-2xl "
          />
          <div>
            <motion.h1
              initial={{ scale: 0 }}
              animate={{ scale: 1, transition: { duration: 4 } }}
              className="text-5xl font-bold"
            >
              Remote Job For you!
            </motion.h1>
            <p className="py-6">Find best remote jobs for yourself.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
