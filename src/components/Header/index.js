import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <svg width="36" height="40" viewBox="0 0 36 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M29.3689 10.5304C29.6796 10.8428 30.049 11.0907 30.4559 11.2598C30.8628 11.4288 31.2992 11.5156 31.7398 11.5152C32.1804 11.5149 32.6166 11.4273 33.0232 11.2576C33.4298 11.0879 33.7989 10.8394 34.109 10.5265C34.4192 10.2135 34.6644 9.84224 34.8304 9.4341C34.9964 9.02597 35.08 8.589 35.0765 8.14843C35.0728 7.70781 34.9821 7.27229 34.8094 6.86689C34.6367 6.46153 34.3855 6.09433 34.0703 5.7865C31.2597 3.00421 27.6874 1.11765 23.8048 0.365274C19.9222 -0.387103 15.9037 0.0284772 12.2573 1.55953C8.61094 3.09054 5.50032 5.66825 3.31867 8.96684C1.13667 12.2654 -0.0180489 16.1368 0.000207603 20.0915C0.018113 24.0461 1.20829 27.907 3.42013 31.1855C5.63198 34.4639 8.76612 37.0131 12.4265 38.5105C16.0868 40.0082 20.1089 40.3871 23.9844 39.5989C27.8599 38.811 31.4148 36.892 34.1998 34.084C34.5085 33.7726 34.7529 33.4033 34.9188 32.9971C35.0848 32.5912 35.1691 32.1566 35.1671 31.7177C35.1651 31.2792 35.0767 30.8453 34.9069 30.4408C34.7372 30.0364 34.4895 29.6695 34.1779 29.3605C33.8663 29.0519 33.497 28.8076 33.091 28.6418C32.685 28.4758 32.2503 28.3915 31.8117 28.3933C31.3731 28.3954 30.9392 28.4839 30.5347 28.6534C30.1303 28.8234 29.7633 29.0712 29.4546 29.3826C27.5988 31.255 25.2294 32.5354 22.6461 33.0613C20.0628 33.5872 17.3816 33.3352 14.9414 32.3374C12.5013 31.3396 10.4117 29.6407 8.9371 27.4552C7.46254 25.27 6.66908 22.6966 6.6568 20.0602C6.64486 17.4239 7.41479 14.8433 8.86934 12.6445C10.3239 10.4458 12.3978 8.72772 14.8287 7.70757C17.2595 6.68742 19.9383 6.41101 22.5263 6.91327C25.1144 7.41554 27.4953 8.67393 29.3682 10.5293L29.3689 10.5304Z" fill="url(#paint0_linear)" />
          <path d="M14.0752 19.9995C14.0752 22.9964 16.5045 25.4255 19.5012 25.4255C22.498 25.4255 24.9273 22.9964 24.9273 19.9995C24.9273 17.0028 22.498 14.5735 19.5012 14.5735C16.5045 14.5735 14.0752 17.0028 14.0752 19.9995Z" fill="url(#paint1_linear)" />
          <defs>
            <linearGradient id="paint0_linear" x1="-20.2564" y1="19.9999" x2="50.711" y2="19.9999" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00CD9E" />
              <stop offset="1" stopColor="#38A3DC" />
            </linearGradient>
            <linearGradient id="paint1_linear" x1="-20.2824" y1="19.9995" x2="50.7118" y2="19.9995" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00AB9E" />
              <stop offset="1" stopColor="#38A3DC" />
            </linearGradient>
          </defs>
        </svg>
        <span className="ml-3 text-xl">Code Share</span>
      </Link>
      <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center">
        <a href="https://github.com/hellovietduc/vscode-code-share" className="hover:text-gray-900" rel="noopener noreferrer" target="_blank">VSCode extension</a>
      </nav>
      <Link to="/share" className="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0">New share
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
        </svg>
      </Link>
    </header>
  );
}

export default Header;
