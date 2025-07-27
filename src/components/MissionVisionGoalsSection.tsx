import React from 'react';
import { useInView } from './useInView';

const MissionVisionGoalsSection: React.FC = () => {
  const [quoteRef, quoteInView] = useInView<HTMLQuoteElement>({ threshold: 0.2 });
  const [card1Ref, card1InView] = useInView<HTMLDivElement>({ threshold: 0.2 });
  const [card2Ref, card2InView] = useInView<HTMLDivElement>({ threshold: 0.2 });
  const [card3Ref, card3InView] = useInView<HTMLDivElement>({ threshold: 0.2 });

  const cards = [
    {
      id: 1,
      title: 'Mission',
      description: 'We aim to identify high-potential ventures and provide the investments needed to unlock growth, shaping a stronger future',
      color: 'bg-purple-500',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      ref: card1Ref,
      inView: card1InView
    },
    {
      id: 2,
      title: 'Vision',
      description: 'Integrity, awareness and objective advice. These principles have enabled us to transform small and medium-sized companies into industry leaders.',
      color: 'bg-blue-500',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      ref: card2Ref,
      inView: card2InView
    },
    {
      id: 3,
      title: 'Goals',
      description: 'To provide smart, low-risk investments that empower businesses to achieve significant milestones that would otherwise be out of reach.',
      color: 'bg-green-500',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      ref: card3Ref,
      inView: card3InView
    }
  ];

  return (
    <section id="about" className="py-16 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Top wavy background */}
      <div className="absolute top-0 left-0 w-full h-40 pointer-events-none opacity-40">
        <svg viewBox="0 0 1440 160" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,160 Q360,80 720,160 T1440,160 L1440,0 L0,0 Z" fill="rgb(247, 244, 239)" fillOpacity="1" />
          <path d="M0,120 Q360,40 720,120 T1440,120 L1440,0 L0,0 Z" fill="#e2cbb3" fillOpacity="0.9" />
        </svg>
      </div>
      
      {/* Radial gradient background */}
      <div className="absolute inset-0 bg-gradient-radial from-amber-100/40 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-center">
            <div className="text-2xl md:text-3xl font-light text-gray-400 mb-4 tracking-widest uppercase">Building</div>
            <div className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              <span className="block">GLOBAL</span>
              <span className="block text-amber-600">IMPACT</span>
            </div>
            <div className="text-lg md:text-xl font-medium text-gray-500 mt-6 tracking-wide">through bold investments & strategic partnerships</div>
          </h2>
        </div>

        {/* Quote section */}
        <div className="max-w-4xl mx-auto mb-12">
          <blockquote 
            ref={quoteRef}
            className={`text-lg text-purple-700 font-medium italic bg-purple-50 border-l-4 border-purple-400 rounded-r-xl p-6 shadow-lg transition-all duration-700 ${
              quoteInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            We believe in the power of vision, the courage of bold action, and the value of purposeful partnerships. Our mission, vision, and goals drive us to create lasting impact for founders, investors, and communities worldwide.
          </blockquote>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {cards.map((card) => (
            <div
              key={card.id}
              ref={card.ref}
              className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden relative ${
                card.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className={`${card.color} p-4 rounded-xl shadow-lg mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    {card.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                      {card.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-gray-600 text-base leading-relaxed">
                  {card.description}
                </p>
              </div>
              
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Wavy background */}
      <div className="absolute bottom-0 left-0 w-full h-40 pointer-events-none opacity-40">
        <svg viewBox="0 0 1440 160" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,0 Q360,80 720,0 T1440,0 L1440,160 L0,160 Z" fill="rgb(247, 244, 239)" fillOpacity="1" />
          <path d="M0,40 Q360,120 720,40 T1440,40 L1440,160 L0,160 Z" fill="#e2cbb3" fillOpacity="0.9" />
        </svg>
      </div>
    </section>
  );
};

export default MissionVisionGoalsSection; 