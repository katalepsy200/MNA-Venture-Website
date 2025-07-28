import React from 'react';

const PremiumChoiceSection = () => {
  return (
    <div className="relative py-12 md:py-16 overflow-hidden" style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #f1f5f9 100%)' }}>
      {/* Wavy background elements */}
      <div className="absolute inset-0">
        <svg className="absolute bottom-0 left-0 w-full h-20 md:h-32" fill="currentColor" viewBox="0 0 1440 320" preserveAspectRatio="none" style={{ color: 'rgb(102 126 234 / 0.3)' }}>
          <path d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
        <svg className="absolute top-0 right-0 w-full h-20 md:h-32" fill="currentColor" viewBox="0 0 1440 320" preserveAspectRatio="none" style={{ color: 'rgb(102 126 234 / 0.2)' }}>
          <path d="M0,224L48,208C96,192,192,160,288,160C384,160,480,192,576,208C672,224,768,224,864,208C960,192,1056,160,1152,160C1248,160,1344,192,1392,208L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>
      </div>
      
      {/* Floating geometric shapes - hidden on mobile for cleaner look */}
      <div className="absolute inset-0 hidden md:block">
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full animate-pulse" style={{ backgroundColor: 'rgb(147 197 253 / 0.2)' }}></div>
        <div className="absolute top-20 right-20 w-16 h-16 rounded-lg rotate-45 animate-pulse" style={{backgroundColor: 'rgb(147 197 253 / 0.2)', animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 rounded-full animate-pulse" style={{backgroundColor: 'rgb(147 197 253 / 0.2)', animationDelay: '2s'}}></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 rounded-lg animate-pulse" style={{backgroundColor: 'rgb(147 197 253 / 0.2)', animationDelay: '0.5s'}}></div>
      </div>
      
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-amber-50/30 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 justify-items-center">
          <div className="max-w-4xl text-center">
            <button className="inline-flex items-center bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold text-xs md:text-sm mb-3 md:mb-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Why we do what we do?
              <svg className="inline w-3 h-3 md:w-4 md:h-4 ml-1 md:ml-2" fill="currentColor" viewBox="0 0 16 16"><path d="M6 13l5-5-5-5v10z"/></svg>
            </button>
            <h1 className="mt-3 md:mt-4 text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 drop-shadow-lg leading-tight px-2">
              We want to build companies that lead the future
            </h1>
            <p className="text-base md:text-lg mt-6 md:mt-8 text-gray-600 drop-shadow px-4 md:px-0 leading-relaxed">
              At MNA Ventures we believe that everything is achievable through commitment and proper planning. This is why we back all our investments with extensive planning and data-driven results.
            </p>
          </div>
          
          <div className="w-full flex justify-center mt-8 md:mt-12 px-4 md:px-0">
            <div className="relative max-w-4xl mx-auto w-full">
              <img 
                className="mx-auto rounded-xl md:rounded-2xl shadow-2xl w-full h-auto" 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&dpr=2&q=80" 
                alt="Innovation and Technology" 
                width={758} 
                height={334} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 via-transparent to-transparent rounded-xl md:rounded-2xl"></div>
            </div>
          </div>
          
          <div className="max-w-6xl w-full mt-12 md:mt-16 px-4 md:px-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {/* Investment Statistics */}
              <div className="group bg-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-blue-200/30 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-full -translate-y-12 translate-x-12"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-6 mx-auto shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">$2.5B+</div>
                    <div className="text-lg md:text-xl font-semibold text-gray-800 mb-3">Total Investments</div>
                    <div className="text-sm text-gray-600 leading-relaxed">Across diverse portfolio companies with proven track records</div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
              
              {/* Success Rate */}
              <div className="group bg-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-green-200/30 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-green-500/10 to-green-600/10 rounded-full -translate-y-12 translate-x-12"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl mb-6 mx-auto shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">98%</div>
                    <div className="text-lg md:text-xl font-semibold text-gray-800 mb-3">Success Rate</div>
                    <div className="text-sm text-gray-600 leading-relaxed">Of ventures achieve growth targets and exceed expectations</div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
              
              {/* Global Reach */}
              <div className="group bg-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-purple-200/30 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-full -translate-y-12 translate-x-12"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl mb-6 mx-auto shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">25+</div>
                    <div className="text-lg md:text-xl font-semibold text-gray-800 mb-3">Countries</div>
                    <div className="text-sm text-gray-600 leading-relaxed">Global presence and impact across diverse markets</div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            </div>
            
            {/* Call to Action - Stacked on mobile */}
            <div className="text-center mt-8 md:mt-12">
              <div className="flex flex-col md:flex-row items-center justify-center space-y-3 md:space-y-0 md:space-x-4">
                <button className="w-full md:w-auto bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-semibold py-3 px-6 md:px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  Explore Our Portfolio
                </button>
                <button className="w-full md:w-auto border-2 border-amber-600 text-amber-700 hover:bg-amber-600 hover:text-white font-semibold py-3 px-6 md:px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                  Join Our Network
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumChoiceSection; 