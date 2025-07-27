import React from 'react';

const PopularProductsSection = () => {
  const products = [
    {
      id: 1,
      code: 'DS',
      name: 'Diverse Strategy',
      description: 'Our multi-level approach to finalizing investments & analyzing decisions has allowed us to be on top of competition.   ',
      color: 'bg-red-500',
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      id: 2,
      code: 'ET',
      name: 'Experienced Team',
      description: 'Our highly experienced and qualified team performs recursive financial testing of all our ventures, to make sure we\'re always in control.    ',
      color: 'bg-green-500',
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      id: 3,
      code: 'RF',
      name: 'Result Focused',
      description: 'Our result-based approach ensures that we are clear on what we\'ll be getting out of each business decision.   ',
      color: 'bg-blue-500',
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 4,
      code: 'IE',
      name: 'Industry Expertise',
      description: 'We\'ve been in this industry for 20+ years, and we use that to our full advantage.    ',
      color: 'bg-gray-500',
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    }
  ];

  return (
    <section id="products" className="relative py-16 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Wavy background elements */}
      <div className="absolute inset-0">
        <svg className="absolute bottom-0 left-0 w-full h-32 text-blue-200/30" fill="currentColor" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
        <svg className="absolute top-0 right-0 w-full h-32 text-indigo-200/20" fill="currentColor" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path d="M0,224L48,208C96,192,192,160,288,160C384,160,480,192,576,208C672,224,768,224,864,208C960,192,1056,160,1152,160C1248,160,1344,192,1392,208L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>
      </div>
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-300/20 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-indigo-300/20 rounded-lg rotate-45 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 bg-purple-300/20 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-blue-300/20 rounded-lg animate-pulse" style={{animationDelay: '0.5s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              <div className="text-right">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">FUELING</div>
                <div className="text-base md:text-lg text-gray-500 mt-2">THE FUTURE</div>
              </div>
              <div className="text-center">
                <div className="w-20 h-1.5 bg-blue-600 mx-auto mb-3"></div>
                <div className="text-xl md:text-2xl text-gray-400">VENTURES</div>
              </div>
              <div className="text-left">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-600">THAT</div>
                <div className="text-base md:text-lg text-gray-500 mt-2">CHALLENGE THE NORM</div>
              </div>
            </div>
          </h2>
          <div className="mt-10">
            <p className="text-base md:text-lg text-gray-600 font-light leading-relaxed max-w-4xl mx-auto">
              Collaboratively administrate empowered markets via plug-and-play networks.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className={`${product.color} p-3 rounded-xl shadow-lg mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    {product.icon}
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                      {product.code}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {product.name}
                    </h3>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {product.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <a
                    href="#"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm group-hover:translate-x-1 transition-transform duration-300"
                  >
                    Explore
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>
              </div>
              
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
            <span>Explore for more</span>
            <svg 
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PopularProductsSection; 