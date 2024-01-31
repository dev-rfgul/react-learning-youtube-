import React, { useState } from "react";
import { motion } from "framer-motion"; 

function Counter() {
    const [firstValue, setfirstValue] = useState(0);

    return (
        <>
            <motion.div  drag className='w-440 h-32 bg-red-600 rounded-xl p-3  text-white mb-5 flex flex-col items-center justify-center'>
                <h1 className="text-6xl font-semibold">{firstValue}</h1>
                <button
                    onClick={() => {
                        setfirstValue(firstValue + 1);
                    }}
                    className="bg-green-600 p-2 rounded-lg"
                >
                    Click to update the value
                </button>
                <div>The date is being updated through state and UseState</div>
            </motion.div>
        </>
    );
}

export default Counter;
