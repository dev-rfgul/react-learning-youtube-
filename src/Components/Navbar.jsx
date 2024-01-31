import React from "react";
import { motion } from "framer-motion";
function Navbar() {
  return (
    <>
      <div className="bg-white h-22 w12 flex align-middle justify-between items-center">
        <h1 className="text-4xl font-semibold">
          <div className="flex">
            <motion.div
              className="text-blue-400"
              drag
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            >
              N
            </motion.div>
            <motion.div
              className="text-orange-400"
              drag
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            >
              A
            </motion.div>
            <motion.div
              className="text-purple-400"
              drag
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            >
              V
            </motion.div>
            <motion.div
              className="text-pink-400"
              drag
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            >
              B
            </motion.div>
            <motion.div
              className="text-yellow-400"
              drag
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            >
              A
            </motion.div>
            <motion.div
              className="text-green-400"
              drag
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            >
              R
            </motion.div>
          </div>
        </h1>
        <div className="flex space-between">
          <motion.h1
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            className="text-1xl text-green-400"
          >
            Download CV
          </motion.h1>
          <motion.h1
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            className="text-1xl ml-4"
          >
            {" "}
            <span className="text-blue-400">GitHub</span>{" "}
          </motion.h1>
          <motion.h1
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            className="text-1xl ml-4 text-red-400"
          >
            Instagram
          </motion.h1>
        </div>
      </div>
    </>
  );
}

export default Navbar;
