import React from 'react';

const CTA = () => {
  return (
    <section className="py-16 md:py-24 relative">
      {/* Subtle background pattern or gradient (optional) */}
      <div className="absolute inset-0 hero-bg-gradient opacity-30"></div>
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Ready to Revolutionize Your Presentations?
        </h2>
        <p className="text-lg text-neutral-400 mb-8 max-w-xl mx-auto">
          Join thousands of users creating impactful presentations faster than ever before.
        </p>
        <a
          href="#"
          className="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-8 rounded-lg text-lg shadow-md hover:shadow-amber-500/40 transition-all duration-300 transform hover:scale-105"
        >
          Try Vivid For Free
        </a>
      </div>
    </section>
  );
};

export default CTA;