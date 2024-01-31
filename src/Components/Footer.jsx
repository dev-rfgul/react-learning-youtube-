import React from 'react'

function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-white h-22 flex align-middle justify-between">
      <h1 className="text-4xl font-semibold">
        <span className="text-red-400">F</span>
        <span className="text-blue-400">O</span>
        <span className="text-yellow-400">O</span>
        <span className="text-blue-900">T</span>
        <span className="text-purple-600">E</span>
        <span className="text-green-600">R</span>
      </h1>
      <h1 className="text-xl font-semibold">All Rights Reserved</h1>
      <div className="flex space-between items-center">
        <h1 className="text-1xl text-blue-400">Contact us</h1>
        <h1 className="text-1xl ml-2 text-green-600">Location</h1>
        <h1 className="text-1xl"></h1>
      </div>
    </footer>
  );
}

export default Footer