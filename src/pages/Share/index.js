import React from 'react';

function SharePage() {
  return (
    <section className="container px-5 py-24 mx-auto relative">
      <div className="flex flex-col text-center w-full mb-12">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Share Your Code</h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Paste your code here and get a sharable link in a second</p>
      </div>
      <div className="lg:w-1/2 md:w-2/3 mx-auto">
        <div className="flex flex-wrap -m-2">
          <div className="p-2 w-full">
            <textarea className="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none h-48 focus:border-green-500 text-base px-4 py-2 resize-none block" placeholder="Your awesome code..."></textarea>
          </div>
          <div className="p-2 w-full">
            <button className="flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">Share</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SharePage;
