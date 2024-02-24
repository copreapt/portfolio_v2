import React from 'react'

const Navbar = () => {
  return (
    <div className="w-full flex justify-between py-4 bg-base-300 items-center px-10 cursor-pointer">
      {/* logo */}
      <div>
        <h1 className="text-3xl">Catalin Oprea</h1>
      </div>
      {/* nav links */}
      <div className="flex gap-10 text-xl cursor-pointer">
        <a>Home</a>
        <a>About Me</a>
        <a>Projects</a>
        <a>Contact</a>
      </div>
    </div>
  );
}

export default Navbar