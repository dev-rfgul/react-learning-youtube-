import React from 'react'
import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-white h-22 flex align-middle justify-between">
      <div className="flex text-4xl font-semibold">
            <motion.div
              className="text-blue-400"
              drag
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            >
              F
            </motion.div>
            <motion.div
              className="text-orange-400"
              drag
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            >
              O
            </motion.div>
            <motion.div
              className="text-purple-400"
              drag
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            >
              O
            </motion.div>
            <motion.div
              className="text-pink-400"
              drag
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            >
              T
            </motion.div>
            <motion.div
              className="text-yellow-400"
              drag
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            >
              E
            </motion.div>
            <motion.div
              className="text-green-400"
              drag
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            >
              R
            </motion.div>
          </div>
      <motion.h1 drag  className="text-xl font-semibold">All Rights Reserved</motion.h1>
      <div className="flex space-between items-center">
        <motion.h1  drag className="text-1xl text-blue-400">Contact us</motion.h1>
        <motion.h1 drag className="text-1xl ml-2 text-green-600">Location</motion.h1>
        <h1 className="text-1xl"></h1>
      </div>
    </footer>
  );
}

export default Footer