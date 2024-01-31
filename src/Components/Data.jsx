import React from "react";
import { motion } from "framer-motion";

function Data({ name,age , data}) {
  return (
    <>
      <motion.div drag className="text-white w-full h-44 font-semibold  bg-yellow-500">
        <h1 className="text-black">The data is being displayed through Props</h1>
        <h1 className="text-xl">I am {name} and my age is {age} I am a {data.profession} and right now i am {data.job}</h1>
      </motion.div>
    </>
  );
}

export default Data;
