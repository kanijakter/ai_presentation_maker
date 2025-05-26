import React from 'react';

const Footer = () => {
  return (
    <footer className="py-10 border-t border-neutral-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-6 h-6 bg-neutral-400 rounded-full"></div>
            <span className="text-xl font-semibold text-neutral-300">Vivid</span>
        </div>
        <nav className="flex justify-center space-x-6 mb-4">
            <a href="#" className="text-neutral-400 hover:text-amber-500 text-sm">About</a>
            <a href="#features" className="text-neutral-400 hover:text-amber-500 text-sm">Features</a>
            <a href="#" className="text-neutral-400 hover:text-amber-500 text-sm">Pricing</a>
            <a href="#" className="text-neutral-400 hover:text-amber-500 text-sm">Terms of Service</a>
            <a href="#" className="text-neutral-400 hover:text-amber-500 text-sm">Privacy Policy</a>
        </nav>
        <p className="text-sm text-neutral-500">© {new Date().getFullYear()} Vivid. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;