import React from 'react';

function Header() {
  return (
    <header className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <button className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-green-500 rounded-full" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <span className="ml-3 text-xl">Code Share</span>
      </button>
      <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center">
        <a href="https://github.com/hellovietduc/vscode-code-share" className="mr-5 hover:text-gray-900" rel="noopener noreferrer" target="_blank">VSCode extension</a>
      </nav>
      <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <a href="/about" className="mr-5 hover:text-gray-900">About</a>
      </nav>
      <button className="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0">Create
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      </button>
    </header>
  );
}

export default Header;
