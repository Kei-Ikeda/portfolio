import React, { useState } from 'react';
import Head from 'next/head';

interface props {
  children: React.ReactNode;
}

const Layout: React.FC<props> = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name='description' content='Kei Ikeda portfolio' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={`${isDark ? 'dark' : ''}`}>
        <div
          className={`font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover overflow-scroll h-screen w-full dark:filter dark:grayscale dark:brightness-50 fixed transition duration-500`}
          style={{
            backgroundImage: "url('https://source.unsplash.com/1L71sPT5XKc')",
          }}
        />
        <div className={`font-sans antialiased text-gray-900 leading-normal tracking-wider overflow-scroll h-screen`}>{children}</div>
        <div className={`absolute top-0 right-0 h-12 w-18 p-4 px-6 flex gap-x-2 items-center`}>
          <p className={`text-slate-50`}>show {isDark ? 'day' : 'night'} mode →</p>
          <button
            className={`js-change-theme focus:outline-none text-2xl`}
            onClick={toggleDarkMode}
          >
            {isDark ? '🌞' : '🌙'}
          </button>
        </div>
      </div>
    </>
  );
};

export default Layout;
