import React from 'react';

const Hero = () => {
  return (
    <section className="relative pt-12 pb-20 md:pt-16 md:pb-24">
      <div className="absolute inset-0 hero-bg-gradient opacity-80 top-[-50px]"></div>
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <a href="#" className="bg-neutral-700 hover:bg-neutral-600 text-neutral-100 font-medium py-2.5 px-6 rounded-full inline-flex items-center text-sm shadow-md border border-neutral-600">
            Explore Creative AI
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4 ml-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white leading-tight mb-12 md:mb-16">
          From A Prompt To A <br className="hidden sm:block" /> Presentation
        </h1>
      </div>
    </section>
  );
};

export default Hero;