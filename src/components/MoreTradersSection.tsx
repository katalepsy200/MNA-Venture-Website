import React from 'react';

const MoreTradersSection = () => {
  return (
    <div className="container mx-auto mt-8 mb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="md:col-span-2 text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold">
            More than <span className="text-blue-600">23,000</span> traders joined
          </h1>
        </div>
        <div className="flex flex-col items-center bg-no-repeat bg-top-left p-6 rounded-lg shadow-md" style={{backgroundImage: 'url(https://www.indonez.com/html-demo/equity/img/in-equity-4-blob-1.svg)'}}>
          <div className="flex items-center mb-4">
            <div className="bg-blue-600 rounded-full p-1 mr-4">
              <img className="rounded-full w-24 h-24 object-cover" src="https://www.indonez.com/html-demo/equity/img/blockit/in-team-1.png" alt="client-1" width={100} height={100} />
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-0">Angela Nannenhorn</h5>
              <p className="text-gray-500 mt-0">from United Kingdom</p>
            </div>
          </div>
          <blockquote className="italic text-gray-700">
            <p>Very convenience for trader, spread for gold is relatively low compare to other broker</p>
          </blockquote>
        </div>
        <div className="flex flex-col items-center bg-no-repeat bg-top-left p-6 rounded-lg shadow-md" style={{backgroundImage: 'url(https://www.indonez.com/html-demo/equity/img/in-equity-4-blob-2.svg)'}}>
          <div className="flex items-center mb-4">
            <div className="bg-blue-600 rounded-full p-1 mr-4">
              <img className="rounded-full w-24 h-24 object-cover" src="https://www.indonez.com/html-demo/equity/img/blockit/in-team-8.png" alt="client-2" width={100} height={100} />
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-0">Wade Palmer</h5>
              <p className="text-gray-500 mt-0">from Germany</p>
            </div>
          </div>
          <blockquote className="italic text-gray-700">
            <p>One of the best FX brokers, I have been using! their trading conditions are excellent</p>
          </blockquote>
        </div>
        <div className="md:col-span-2 text-center mt-8">
          <a href="#" className="text-blue-600 hover:underline font-medium inline-flex items-center">
            See more traders stories from all over the world
            <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MoreTradersSection; 