import React from "react";
import {
  FaInstagram,
  FaTelegram,
  FaMobileAlt,
  FaExchangeAlt,
  FaUserAlt,
  FaProductHunt,
  FaHeadset,
  FaArrowUp
} from "react-icons/fa";


export default function FooterComponent() {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div dir="rtl">
      <div className="footerBoxComponents w-full flex flex-col md:flex-row items-center justify-between">
      <div className=" py-8 flex gap-3 items-center justify-start space-x-3 lg:space-x-6 pr-3 lg:pr-12">
        <input
          type="text"
          className="py-2 px-6 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="با ما در ارتباط باشید "
        />
        <button className="py-2 px-6 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
          ارسال
        </button>
      </div>
        <div className="pl-3 lg:pl-12 flex items-center gap-4">
          <span className="text-text2 md:hidden">رفتن به ابتدای صفحه </span>
          <button
          onClick={scrollToTop} 
          className="cursor-pointer p-2 border-2 border-text2 rounded-full hover:bg-yellow-100"
          >

        <FaArrowUp size={24} className="text-text2" />
          </button>
      </div>
      </div>

      <div
        className="footerBoxComponents flex  flex-col items-center justify-center lg:flex-row  py-8"
        dir="rtl"
      >
        <div className="w-full lg:w-1/4 px-4 mb-4 lg:mb-0">
          <h3 className="text-xl text-text2 font-bold mb-2">
            پلتفرم های مبادله ارزهای دیجیتال
          </h3>
          <ul className="footerUl">
            <li>
              <FaExchangeAlt />
              <span> بایننس</span>
            </li>
            <li>
              <FaExchangeAlt />
              <span> کوین‌بیس</span>
            </li>
            <li>
              <FaExchangeAlt />
              <span> کراکن</span>
            </li>
            <li>
              <FaExchangeAlt />
              <span> بیتفینکس</span>
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-1/4 px-4 mb-4 lg:mb-0">
          <h3 className="text-xl text-text2 font-bold mb-2">دسترسی سریع</h3>
          <ul className="footerUl">
            <li>
              <FaInstagram />
              <span> اینستاگرام</span>
            </li>
            <li>
              <FaTelegram />
              <span> تلگرام</span>
            </li>
            <li>
              <FaMobileAlt />
              <span> تماس با ما</span>
            </li>
            <li>
              <FaUserAlt />
              <span> درباره ما</span>
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-1/4 px-4 mb-4 lg:mb-0">
          <h3 className="text-xl text-text2 font-bold mb-2">خدمات و محصولات</h3>
          <ul className="footerUl">
            <li>
              <FaProductHunt />
              <span> کیف پول دیجیتال</span>
            </li>
            <li>
              <FaProductHunt />
              <span> کارت‌های هدیه</span>
            </li>
            <li>
              <FaProductHunt />
              <span> دوره‌های آموزشی</span>
            </li>
            <li>
              <FaProductHunt />
              <span> تحلیل بازار</span>
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-1/4 px-4">
          <h3 className="text-xl text-text2 font-bold mb-2">پشتیبانی</h3>
          <ul className="footerUl">
            <li>
              <FaHeadset />
              <span> سوالات متداول</span>
            </li>
            <li>
              <FaHeadset />
              <span> راهنمای استفاده</span>
            </li>
            <li>
              <FaHeadset />
              <span> گزارش مشکل</span>
            </li>
            <li>
              <FaHeadset />
              <span> تماس با پشتیبانی</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-smallBox1">
        <div className="text-right mx-auto  w-full px-1 lg:w-[90%] text-sm text-text2 py-4">
          © کپی برداری از مطالب سایت با ذکر لینک منبع، بلامانع می باشد
        </div>
      </div>
    </div>
  );
}
