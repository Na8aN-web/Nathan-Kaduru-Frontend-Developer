import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white p-4 flex justify-between w-full items-center border-b-[1px] border-b-gray-800">
      <div className="flex items-center space-x-2">
        <h1 className='font-mont text-[24px] text-gray-800 font-light'>SpaceX</h1>
      </div>
    </nav>
  );
};

export default Navbar;
