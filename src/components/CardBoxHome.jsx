import  { useState, useEffect } from 'react';
import { FaArrowUp, FaArrowDown ,FaGift,  FaDollarSign, FaExchangeAlt, FaBriefcase, FaPiggyBank, FaShieldAlt, FaCoins } from 'react-icons/fa';
import { SiPlatformdotsh } from "react-icons/si";


const initialPrices = [
  { name: 'تتر', price: 1.0, direction: null },
  { name: 'بیتکوین', price: 30000, direction: null },
  { name: 'اتریوم', price: 2000, direction: null }
];

const boxData = [
    { name: 'امکان دریافت کارت به کارت هدیه کریپتویی', icon: FaGift, bgColor: 'bg-blue-500', hoverColor: 'bg-blue-700' },
    { name: 'اولین پلتفرم OTC دیجیتال', icon: SiPlatformdotsh, bgColor: 'bg-green-500', hoverColor: 'bg-green-700' },
    { name: 'بهینه ترین قیمت', icon: FaDollarSign, bgColor: 'bg-yellow-500', hoverColor: 'bg-yellow-700' },
    { name: 'بازار B2B', icon: FaExchangeAlt, bgColor: 'bg-red-500', hoverColor: 'bg-red-700' },
    { name: 'صندوق های ثروت آفرینی', icon: FaBriefcase, bgColor: 'bg-purple-500', hoverColor: 'bg-purple-700' },
    { name: 'صندوق درآمد ثابت', icon: FaPiggyBank, bgColor: 'bg-orange-500', hoverColor: 'bg-orange-700' },
    { name: 'بازارهای بیمه', icon: FaShieldAlt, bgColor: 'bg-teal-500', hoverColor: 'bg-teal-700' },
    { name: 'امکان دریافت کارت به کارت هدیه کریپتویی', icon: FaCoins, bgColor: 'bg-gray-500', hoverColor: 'bg-gray-900' }
  ];

const fetchPrices = async () => {
  // اینجا باید کدهای دریافت قیمت از بک‌اند نوشته شود.
  // در اینجا به عنوان مثال مقادیر تصادفی را برمی‌گردانیم.
  return initialPrices.map(item => ({
    ...item,
    price: item.price * (1 + (Math.random() - 0.5) / 10) // تغییر قیمت تصادفی
  }));
};

export default function CardBoxHome() {
  const [prices, setPrices] = useState(initialPrices);

  useEffect(() => {
    const updatePrices = async () => {
      const newPrices = await fetchPrices();
      setPrices(prevPrices =>
        prevPrices.map((item, index) => ({
          ...item,
          price: newPrices[index].price,
          direction: newPrices[index].price > item.price ? 'up' : 'down'
        }))
      );
    };

    updatePrices();
    const interval = setInterval(updatePrices, 1000); // هر 10 ثانیه قیمت‌ها به‌روزرسانی می‌شوند.

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='bg-[#004d00]'>
    <div className=' text-white p-4 w-full lg:w-[85%] mx-auto'>
      <div className='flex flex-wrap justify-center md:justify-between gap-4'>
        {prices.map((item, index) => (
          <div key={index} className='flex justify-between items-center bg-gray-200 p-4 rounded-lg w-64 h-16 min-w-[200px]'>
            <div className='flex items-center mb-2'>
              <span className='mr-2 text-lg font-semibold text-[#004d00]'>{item.name}</span>
              {item.direction === 'up' ? (
                <FaArrowUp className='text-green-500' />
              ) : (
                <FaArrowDown className='text-red-500' />
              )}
            </div>
            <span className={`text-lg font-semibold ${item.direction === 'up' ? 'text-green-500' : 'text-red-500'}`}>
              {item.price.toFixed(2)}
            </span>
          </div>
        ))}
      </div>
    </div>
    <div className='flex flex-wrap items-center justify-center gap-8 px-2 py-12 w-full lg:w-[85%] mx-auto'>
        {boxData.map((box, index) => (
          <div
            key={index}
            className={`flex cursor-pointer flex-col items-center justify-center w-60 h-40 p-4 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 ${box.bgColor} hover:${box.hoverColor}`}
          >
            <box.icon className='text-4xl mb-2 text-white' />
            <span className='text-white text-center font-semibold'>{box.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
