import React from "react";
import { motion } from "framer-motion"

function Products() {
  return (
    <>
      <div className="flex relative align-middle justify-center items-center mb-5 ">
        <motion.div drag dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }} className="text-white w-44 h-32 bg-red-800 rounded-xl p-5 m-5   items-center justify-center">
          hello i am product component made by fahad
        </motion.div>

        <motion.div  drag dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }} className="text-white w-44 h-32 bg-blue-800 rounded-xl p-5 m-5  items-center justify-center">
          hello i am product component made by fahad
        </motion.div>

        <motion.div drag dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}  className="text-white w-44 h-32 bg-yellow-800 rounded-xl p-5 m-5  items-center justify-center">
          hello i am product component made by fahad
        </motion.div>
      </div>

      <div className="flex relative align-middle justify-center items-center mb-5">
        <motion.div  drag dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}  className="text-white w-44 h-32 bg-pink-800 rounded-xl p-5 m-5  items-center justify-center">
          hello i am product component made by fahad
        </motion.div>

        <motion.div drag dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}   className="text-white w-44 h-32 bg-purple-800 rounded-xl p-5 m-5  items-center justify-center">
          hello i am product component made by fahad
        </motion.div>
      </div>
    </>
  );
}

export default Products;
