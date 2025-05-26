import React from 'react';

// Example SVG Icons (replace with your actual SVGs or an icon library)
const LightbulbIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-amber-500">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.311a2.996 2.996 0 01-3.75 0M1.5 12a10.5 10.5 0 0110.5-10.5h0A10.5 10.5 0 0122.5 12h0a10.5 10.5 0 01-10.5 10.5h0A10.5 10.5 0 011.5 12z" />
  </svg>
);

const GridIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-amber-500">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25h-2.25a2.25 2.25 0 01-2.25-2.25v-2.25z" />
  </svg>
);

const SparklesIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-amber-500">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L1.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09l2.846.813-.813 2.846a4.5 4.5 0 00-3.09 3.09zM18.25 12L16 6.75l-2.25 5.25a4.5 4.5 0 01-3.09 3.09L5.25 16l5.25 2.25a4.5 4.5 0 013.09 3.09L16 21.75l2.25-5.25a4.5 4.5 0 013.09-3.09l5.25-2.25-5.25-2.25a4.5 4.5 0 01-3.09-3.09z" />
  </svg>
);


const featuresData = [
  {
    icon: <LightbulbIcon />,
    title: 'Instant Drafts',
    description: 'Go from a simple prompt to a full presentation draft in seconds. Let AI handle the heavy lifting.',
  },
  {
    icon: <GridIcon />,
    title: 'Smart Templates',
    description: 'Choose from a variety of professionally designed templates that adapt to your content.',
  },
  {
    icon: <SparklesIcon />,
    title: 'AI Content Assist',
    description: 'Get AI-powered suggestions for text, images, and layouts to enhance your slides.',
  },
];

const Features = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-neutral-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Unlock the Power of AI Presentations
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            Vivid offers cutting-edge features to transform your ideas into stunning visuals.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <div key={index} className="bg-neutral-800 p-6 rounded-xl shadow-lg flex flex-col items-center text-center hover:bg-neutral-700/70 transition-colors">
              <div className="mb-4 p-3 bg-neutral-700 rounded-full">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-neutral-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;