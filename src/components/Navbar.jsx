import React from 'react';

const Navbar = () => {
  return (
    <header className="py-5 sticky top-0 z-50 bg-neutral-950/80 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center space-x-2.5">
          <div className="w-7 h-7 bg-neutral-300 rounded-full"></div>
          <span className="text-2xl font-bold text-white">Vivid</span>
        </div>
        <nav className="hidden md:flex space-x-8 items-center">
          <a href="#" className="text-amber-500 hover:text-amber-400 font-medium">Home</a>
          <a href="#features" className="hover:text-neutral-300 font-medium">Features</a>
          <a href="#" className="hover:text-neutral-300 font-medium">Pricing</a>
          <a href="#" className="hover:text-neutral-300 font-medium">Contact</a>
        </nav>
        <div>
          <a href="#" className="bg-neutral-800 hover:bg-neutral-700 text-neutral-200 font-medium py-2 px-5 rounded-lg text-sm">
            Log in
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;