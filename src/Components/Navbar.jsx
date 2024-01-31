import React from "react";

function Navbar() {
  return (
    <>
      <div className="bg-white h-22 w12 flex align-middle justify-between items-center">
        <h1 className="text-4xl font-semibold">
        <span className='text-red-400'>N</span>
            <span className='text-blue-400'>A</span><span className='text-yellow-400'>V</span><span className='text-blue-900'>B</span><span className='text-purple-600'>A</span><span className='text-green-600'>R</span>
        </h1>
        <div className="flex space-between">
          <h1 className="text-1xl text-green-400">Download CV</h1>
          <h1 className="text-1xl ml-4">
            {" "}
            <span className="text-blue-400">GitHub</span>{" "}
          </h1>
          <h1 className="text-1xl ml-4 text-red-400">Instagram</h1>
        </div>
      </div>
    </>
  );
}

export default Navbar;
