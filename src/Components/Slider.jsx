import React from 'react'
import { motion } from "framer-motion"

function Slider() {
  return (
    <div className='  p-4 '>
    <motion.div drag dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}  className='w-440 h-32 bg-red-600 rounded-xl p-3  text-white mb-5'> Hello i am Fahad learning React from youtube and this is the last video</motion.div>
    </div>
  )
}

export default Slider