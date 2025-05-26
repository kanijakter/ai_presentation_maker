import React from 'react';

const GetStarted = () => {
  return (
    <section className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center -mt-10 md:-mt-16 pb-16 md:pb-24">
       <div className="bg-neutral-900 p-8 md:p-12 rounded-xl shadow-2xl border border-neutral-800/70">
        <h2 className="text-3xl font-semibold text-white mb-3">How would you like to get started?</h2>
        <p className="text-neutral-400 mb-10 max-w-lg mx-auto">Choose your preferred method to begin creating with Vivid AI.</p>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Card 1: Use a Template */}
          <div className="bg-neutral-800 p-6 rounded-xl shadow-lg text-left flex flex-col justify-between hover:shadow-neutral-700/50 transition-shadow">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Use a Template</h3>
              <p className="text-neutral-400 text-sm mb-6">Write a prompt and leave everything else for us to handle.</p>
            </div>
            <button className="mt-auto w-full bg-neutral-600 hover:bg-neutral-500 text-neutral-100 font-medium py-2.5 px-4 rounded-lg text-sm">
              Continue
            </button>
          </div>

          {/* Card 2: Generate with Creative AI (Highlighted) */}
          <div className="bg-neutral-700 p-6 rounded-xl shadow-xl text-left border-2 border-amber-500 flex flex-col justify-between ring-1 ring-amber-500/50 hover:shadow-amber-500/30 transition-shadow">
            <div>
              <h3 className="text-xl font-semibold text-white mb-1">Generate with</h3>
              <h3 className="text-xl font-semibold text-amber-500 mb-2">Creative AI</h3>
              <p className="text-neutral-300 text-sm mb-6">Write a prompt and leave everything else for us to handle.</p>
            </div>
            <button className="mt-auto w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-2.5 px-4 rounded-lg text-sm">
              Generate
            </button>
          </div>

          {/* Card 3: Start from Scratch */}
          <div className="bg-neutral-800 p-6 rounded-xl shadow-lg text-left flex flex-col justify-between hover:shadow-neutral-700/50 transition-shadow">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Start from Scratch</h3>
              <p className="text-neutral-400 text-sm mb-6">Write a prompt and leave everything else for us to handle.</p>
            </div>
            <button className="mt-auto w-full bg-neutral-600 hover:bg-neutral-500 text-neutral-100 font-medium py-2.5 px-4 rounded-lg text-sm">
              Continue
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;