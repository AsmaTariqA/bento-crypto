import React, { useMemo, useState, useRef, useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import bit1 from './img/bit1.svg';
import eth1 from './img/eth1.svg';
import course1 from './img/101.svg';
import wallet from './img/portfolio-1.webp';
import watch from './img/watch.webp';

gsap.registerPlugin(ScrollTrigger);

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);



const Hero = () => {
  const [marketData, setMarketData] = useState({
    bitcoin: { price: 29345.67, change: 3.45 },
    ethereum: { price: 1745.5, change: -1.28 },
    binance: { price: 290.75, change: 0.75 },
    litecoin: { price: 130.1, change: 1.12 },
  });
  const cardRef = useRef();
  useEffect(() => {
    const elements = document.querySelectorAll('.nav-animation'); 
    elements.forEach((item) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 100, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.7,
          delay:1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top bottom",
            end: "bottom top",
            toggleActions: "play none none none",
          },
        }
      );
    });
  
    // Market Div Animation
    gsap.fromTo(
      '.market-div',
      { opacity: 0, scale:0, },
      {
        opacity: 1,
      
        scale:1,
        duration:1.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: '.hero-title',
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  
    gsap.fromTo(
      '.bitcoin',
      { opacity: 0, x: 20, y: 70 },
      {
        opacity: 1,
        x: 0,
        y:0,
        duration: 1.5,
        delay: 1.6,  
        ease: "power3.out",
        scrollTrigger: {
          trigger: '.hero-title',
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
     
    gsap.fromTo(
      '.eth',
      { opacity: 0, x: -40, y: 60 },
      {
        opacity: 1,
        x: 0,
        y:0,
        duration: 1.5,
        delay: 1.7,  
        ease: "power3.out",
        scrollTrigger: {
          trigger: '.hero-title',
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
         
    gsap.fromTo(
      '.course',
      { opacity: 0, x: -40, y: -60 },
      {
        opacity: 1,
        x: 0,
        y:0,
        duration: 1.5,
        delay: 1.8,  
        ease: "power3.out",
        scrollTrigger: {
          trigger: '.hero-title',
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
    gsap.fromTo(
      '.wallet',
      { opacity: 0, x: -40, y: -60 },
      {
        opacity: 1,
        x: 0,
        y:0,
        duration: 1.5,
        delay: 1.9,  
        ease: "power3.out",
        scrollTrigger: {
          trigger: '.hero-title',
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
    
  }, []);
  
  
    

  
  const chartData = useMemo(
    () => ({
      labels: ['Bitcoin', 'Ethereum', 'BNB', 'LTC'],
      datasets: [
        {
          label: 'Market Price ($)',
          data: [29345.67, 17425.5, 2905.75, 130.1],
          backgroundColor: [
            '#0f2d2f',
            '#79D7BE',
            '#387478',
            'rgba(75, 192, 192, 0.5)',
          ],
          borderColor: [
            '#0f2d2f',
            '#79D7BE',
            '#387478',
            'rgba(75, 192, 192, 1)',
          ],
          borderWidth: 1,
        },
      ],
    }),
    []
  );

  const chartOptions = useMemo(
    () => ({
      responsive: true,
      plugins: {
        legend: {
          display: true,
          position: 'top',
          labels: {
            color: 'white',
          },
        },
        title: {
          display: true,
          text: 'Cryptocurrency Market Prices',
          color: 'white',
          font: {
            size: 18,
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: 'white',
          },
        },
        y: {
          beginAtZero: true,
          ticks: {
            color: 'white',
          },
          grid: {
            color: 'rgba(255, 255, 255, 0.2)',
          },
        },
      },
    }),
    []
  );
  const refreshMarketData = () => {
    setMarketData((prevData) => ({
      bitcoin: {
        price: (prevData.bitcoin.price * (1 + (Math.random() - 0.5) * 0.1)).toFixed(2),
        change: (Math.random() * 10 - 5).toFixed(2),
      },
      ethereum: {
        price: (prevData.ethereum.price * (1 + (Math.random() - 0.5) * 0.1)).toFixed(2),
        change: (Math.random() * 10 - 5).toFixed(2),
      },
      binance: {
        price: (prevData.binance.price * (1 + (Math.random() - 0.5) * 0.1)).toFixed(2),
        change: (Math.random() * 10 - 5).toFixed(2),
      },
      litecoin: {
        price: (prevData.litecoin.price * (1 + (Math.random() - 0.5) * 0.1)).toFixed(2),
        change: (Math.random() * 10 - 5).toFixed(2),
      },
    }));
  }

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-[#0f2d2f] overflow-hidden ">
      <div className="grid grid-cols-4 grid-rows-4 gap-4 w-full h-full p-3">
        {/* Bitcoin */}
        <div className="bitcoin col-span-1 row-span-2 bg-gradient-to-r from-[#134e4a] to-[#27635c] rounded-lg shadow-xl flex items-center justify-center flex-col text-center p-6 overflow-hidden min-h-[300px]">
          <h1 className="text-3xl font-bold text-white">Bitcoin (BTC)</h1>
          <img src={bit1} alt="Bitcoin" className="w-32 h-32" />
          <div className="bg-gradient-to-t from-[#225d58] to-[#1a4c4a] rounded-xl p-4">
            <p className="text-lg text-white truncate">${marketData.bitcoin.price}</p>
            <p className={`text-lg ${marketData.bitcoin.change > 0 ? 'text-green-500' : 'text-red-500'} font-semibold truncate`}>
              Market Trend: {marketData.bitcoin.change > 0 ? `+${marketData.bitcoin.change}%` : `${marketData.bitcoin.change}%`}
            </p>
            <p className="text-md text-white leading-relaxed break-words">
              The leading cryptocurrency by market cap, Bitcoin has a decentralized, peer-to-peer network for secure transactions.
            </p>
          </div>
        </div>
        <div    ref={cardRef} className=" nav-animation col-span-2 row-span-1 bg-gradient-to-t from-[#134e4a] to-[#27635c] rounded-lg shadow-xl flex items-center justify-center p-6">
  <nav className="w-full max-w-6xl flex items-center justify-between text-white">
    {/* Logo Section */}
    <div className="flex items-center space-x-2">
     
      <span className="text-4xl font-bold">Crypto Dashboard</span>
    </div>

    {/* Navbar Links */}
    <div className="flex space-x-8 text-lg" >
      <a href="#home" className="hover:text-teal-400">Home</a>
      <a href="#market" className="hover:text-teal-400">Market</a>
      <a href="#about" className="hover:text-teal-400">About</a>
      <a href="#contact" className="hover:text-teal-400">Contact</a>
    </div>

    {/* Call to Action Button */}
    <div>
      <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-lg">
        Get Started
      </button>
    </div>
  </nav>
</div>


 
        {/* Market Trends */}
        <div className="market-div col-span-2 row-span-2 bg-gradient-to-r from-[#174f4c] to-[#2d6a64] rounded-lg shadow-xl flex items-center justify-center flex-col text-center p-6 col-start-2 row-start-2">
          <h2 className="text-2xl font-bold text-white mb-3">Market Trends</h2>
          <Bar data={chartData} options={chartOptions} />
        </div> 

        {/* Ethereum */}
        <div className="eth col-span-1 row-span-2 rounded-lg bg-gradient-to-t from-[#134e4a] to-[#27635c] shadow-xl flex items-center justify-center flex-col text-center p-6">
          <h1 className="text-3xl font-bold text-white  t">Ethereum (ETH)</h1>
          <img src={eth1} alt="Ethereum" className="w-36 h-36 mb-5" />
          <div className="bg-gradient-to-t from-[#225d58] to-[#1a4c4a] rounded-xl p-4">
            <p className="text-lg text-white truncate">${marketData.ethereum.price}</p>
            <p className={`text-lg ${marketData.ethereum.change > 0 ? 'text-green-500' : 'text-red-500'} font-semibold truncate`}>
              Market Trend: {marketData.ethereum.change > 0 ? `+${marketData.ethereum.change}%` : `${marketData.ethereum.change}%`}
            </p>
            <p className="text-md text-white leading-relaxed break-words">
              Ethereum is a blockchain platform enabling decentralized applications and smart contracts.
            </p>
          </div>
        </div>

        {/* Crypto 101 */}
        <div className="course col-span-1 row-span-2 bg-gradient-to-r from-[#256e69] to-[#2c7c74] rounded-lg shadow-xl flex items-center justify-center flex-col text-center p-6">
          <h1 className="text-3xl font-bold text-white  t">Crypto 101</h1>
          <img src={course1} alt="Bitcoin" className="w-44 h-44 " />
          <div className="bg-gradient-to-t from-[#2f7c76] to-[#1a4c4a] rounded-xl p-2">
            <p className="text-lg text-white">Learn the basics of cryptocurrency.</p>
            <p className="text-sm text-gray-300 mt-2">Understand blockchain technology, the difference between various types of cryptocurrencies, and how they work.</p>
            <button className="bg-teal-500 text-white rounded-lg px-3 py-1 mt-4">Start Learning</button>
          </div>
        </div>

        {/* Crypto Wallet */}
        <div className="wallet col-span-1 row-span-2 bg-gradient-to-r from-[#256e69] to-[#2c7c74] rounded-lg shadow-xl flex items-center justify-center flex-col text-center p-6">
          <h1 className="text-3xl font-bold text-white  t">Crypto Wallet</h1>
          <img src={wallet} alt="Bitcoin" className="w-44 h-44 " />
          <div className="bg-gradient-to-r from-[#2d8680] to-[#1a4c4a] rounded-xl p-2">
            <p className="text-lg text-white">Securely store your digital assets.</p>
            <p className="text-md text-gray-300 mt-2">A cryptocurrency wallet is a tool that allows users to interact with blockchain networks, storing and securing private keys.</p>
          </div>
        </div>

        {/* Market Watch */}
        <div className="nav-animation col-span-2 row-span-1 bg-gradient-to-r from-[#256e69] to-[#2c7c74] rounded-lg shadow-xl flex items-center justify-center p-6">
        <img src={watch} alt="Bitcoin" className="w-36 h-36 " />
  <div className="flex w-full max-w-4xl justify-between items-start rounded-xl p-6">
    {/* Left Section (Heading and Paragraph) */}
    <div className="flex flex-col justify-start space-y-2 w-1/2">
      <p className="text-3xl font-bold text-white">Market Watch</p>
      <p className="text-lg text-white">Monitor real-time market changes and trends.</p>
    </div>

    {/* Right Section (List of Cryptos) */}
    <div className="flex flex-col justify-start items-start space-y-3 w-1/2">
      <ul className="text-md text-white mt-2">
        <li>
          Bitcoin: ${marketData.bitcoin.price} ({marketData.bitcoin.change > 0 ? '+' : ''}{marketData.bitcoin.change}%)
        </li>
        <li>
          Ethereum: ${marketData.ethereum.price} ({marketData.ethereum.change > 0 ? '+' : ''}{marketData.ethereum.change}%)
        </li>
        <li>
          Binance Coin: ${marketData.binance.price} ({marketData.binance.change > 0 ? '+' : ''}{marketData.binance.change}%)
        </li>
        <li>
          Litecoin: ${marketData.litecoin.price} ({marketData.litecoin.change > 0 ? '+' : ''}{marketData.litecoin.change}%)
        </li>
      </ul>
      <button
        onClick={refreshMarketData}
        className="mt-4 bg-teal-500 text-white rounded-lg px-4 py-2"
      >
        Refresh Market Data
      </button>
    </div>
  </div>
</div>

      </div>
    </div>
  );
};

export default Hero;
