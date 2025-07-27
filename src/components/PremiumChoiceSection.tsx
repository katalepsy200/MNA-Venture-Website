import React from 'react';

const PremiumChoiceSection = () => {
  return (
    <div className="relative py-12 md:py-16 overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600">
      {/* Wavy background elements */}
      <div className="absolute inset-0">
        <svg className="absolute bottom-0 left-0 w-full h-20 md:h-32 text-white/10" fill="currentColor" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
        <svg className="absolute top-0 right-0 w-full h-20 md:h-32 text-white/5" fill="currentColor" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path d="M0,224L48,208C96,192,192,160,288,160C384,160,480,192,576,208C672,224,768,224,864,208C960,192,1056,160,1152,160C1248,160,1344,192,1392,208L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>
      </div>
      
      {/* Floating geometric shapes - hidden on mobile for cleaner look */}
      <div className="absolute inset-0 hidden md:block">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-white/10 rounded-lg rotate-45 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 bg-white/10 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-lg animate-pulse" style={{animationDelay: '0.5s'}}></div>
      </div>
      
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 justify-items-center">
          <div className="max-w-4xl text-center">
            <button className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold text-xs md:text-sm mb-3 md:mb-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Why we do what we do?
              <svg className="inline w-3 h-3 md:w-4 md:h-4 ml-1 md:ml-2" fill="currentColor" viewBox="0 0 16 16"><path d="M6 13l5-5-5-5v10z"/></svg>
            </button>
            <h1 className="mt-3 md:mt-4 text-2xl md:text-3xl lg:text-4xl font-bold text-white drop-shadow-lg leading-tight px-2">
              We want to build companies that lead the future
            </h1>
            <p className="text-base md:text-lg mt-6 md:mt-8 text-gray-100 drop-shadow px-4 md:px-0 leading-relaxed">
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-xl md:rounded-2xl"></div>
            </div>
          </div>
          
          <div className="max-w-6xl w-full mt-12 md:mt-16 px-4 md:px-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
              {/* Investment Statistics */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/20">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1 md:mb-2">$2.5B+</div>
                  <div className="text-base md:text-lg text-gray-200 mb-2 md:mb-4">Total Investments</div>
                  <div className="text-xs md:text-sm text-gray-300 leading-relaxed">Across diverse portfolio companies</div>
                </div>
              </div>
              
              {/* Success Rate */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/20">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1 md:mb-2">94%</div>
                  <div className="text-base md:text-lg text-gray-200 mb-2 md:mb-4">Success Rate</div>
                  <div className="text-xs md:text-sm text-gray-300 leading-relaxed">Of ventures achieve growth targets</div>
                </div>
              </div>
              
              {/* Global Reach */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/20">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1 md:mb-2">25+</div>
                  <div className="text-base md:text-lg text-gray-200 mb-2 md:mb-4">Countries</div>
                  <div className="text-xs md:text-sm text-gray-300 leading-relaxed">Global presence and impact</div>
                </div>
              </div>
            </div>
            
            {/* Call to Action - Stacked on mobile */}
            <div className="text-center mt-8 md:mt-12">
              <div className="flex flex-col md:flex-row items-center justify-center space-y-3 md:space-y-0 md:space-x-4">
                <button className="w-full md:w-auto bg-white text-purple-600 hover:bg-gray-100 font-semibold py-3 px-6 md:px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  Explore Our Portfolio
                </button>
                <button className="w-full md:w-auto border-2 border-white text-white hover:bg-white hover:text-purple-600 font-semibold py-3 px-6 md:px-8 rounded-full transition-all duration-300 transform hover:scale-105">
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