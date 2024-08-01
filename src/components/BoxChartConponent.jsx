import { useState } from "react";
import ChartAllUsers from "./ChartComponent";
import CryptoData from "../data/cryptoData"; // مسیر به فایل CryptoData.js

const BoxChartComponent = () => {
    const [activeButton, setActiveButton] = useState(null);
    const [visibleCount, setVisibleCount] = useState(5); // تعداد داده‌های نمایش داده شده
    const [isShowingMore, setIsShowingMore] = useState(false); // وضعیت دکمه "نمایش بیشتر"

    const handleShowMoreClick = () => {
        if (isShowingMore) {
            setVisibleCount(5); // برگرداندن به 5 مورد اول
        } else {
            setVisibleCount(CryptoData.length); // نمایش تمامی داده‌ها
        }
        setIsShowingMore(!isShowingMore); // تغییر وضعیت دکمه
    };

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };

    const buttonClass = (buttonName) =>
        `px-4 py-2 rounded-md text-sm text-text2 cursor-pointer ${
            activeButton === buttonName ? 'bg-yellow-600 text-text2' : 'text-text2'
        }`;

    return (
        <div className="bg-sectionBack2 ">
            <div className="SectionTwoHome w-full lg:w-[85%] min-h-[400px] mx-auto pb-[80px]">
                <div className="flex flex-col md:flex-row justify-between items-center pt-6">
                    <div className="BtnSectionTwoRight flex gap-2 h-16 items-center justify-center md:justify-start p-2 w-full lg:w-2/3">
                        <span
                            onClick={() => handleButtonClick('all')}
                            className={buttonClass('all')}
                        >
                            همه
                        </span>
                        <span
                            onClick={() => handleButtonClick('hot')}
                            className={buttonClass('hot')}
                        >
                            داغ ترین ها
                        </span>
                        <span
                            onClick={() => handleButtonClick('profit')}
                            className={buttonClass('profit')}
                        >
                            بیشترین سود
                        </span>
                        <span
                            onClick={() => handleButtonClick('loss')}
                            className={buttonClass('loss')}
                        >
                            بیشترین ضرر
                        </span>
                    </div>
                    <div className="BtnSectionTwoLeft flex justify-center gap-2 h-16 md:justify-end p-2 w-1/3 items-center">
                        <span
                            onClick={() => handleButtonClick('usdt')}
                            className={buttonClass('usdt')}
                        >
                            USDT
                        </span>
                        <span
                            onClick={() => handleButtonClick('btc')}
                            className={buttonClass('btc')}
                        >
                            BTC
                        </span>
                        <span
                            onClick={() => handleButtonClick('toman')}
                            className={buttonClass('toman')}
                        >
                            تومان
                        </span>
                    </div>
                </div>
                <div>
                    <div className="w-full min-h-[600px] mx-auto pb-[80px]">
                        <div className="overflow-x-auto"> {/* اضافه کردن اسکرول افقی */}
                            <table className="w-full bg-[#004d00] table-auto rounded-xl mt-10">
                                <thead className="bg-smallBox1 text-content2 py-8">
                                    <tr>
                                        <th className="py-8 rounded-tr-lg text-center">نام ارز</th>
                                        <th className="p-4 text-center">نمودار</th>
                                        <th className="p-4 text-center">قیمت 24 ساعته</th>
                                        <th className="p-4 text-center">تغییر در هفته</th>
                                        <th className="p-4 rounded-tl-lg text-center">عملیات</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {CryptoData.slice(0, visibleCount).map((crypto) => (
                                        <tr key={crypto.id} className="border-t border-gray-300">
                                            <td className="pr-4 py-6 flex items-center">
                                                {crypto.icon} {/* استفاده از آیکون */}
                                                <span className="mr-2 text-text2">{crypto.name}</span>
                                            </td>
                                            <td className="p-4">
                                                <ChartAllUsers /> {/* نمودار */}
                                            </td>
                                            <td className="p-4 text-center">
                                                <p className="text-[#63db45]">{crypto.value} USDT</p>
                                            </td>
                                            <td className="p-4 text-center">
                                                <p className="text-[#c94a4a]">{crypto.percentage}%</p>
                                            </td>
                                            <td className="p-4 text-center">
                                                <button className="border-2 rounded-xl px-4 py-2 text-sm text-content2 hover:bg-[#FFA115] hover:text-white">
                                                    معامله
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="flex justify-center mt-4">
                            <button
                                onClick={handleShowMoreClick}
                                className="border-2 bg-header2 rounded-xl px-8 py-3 text-sm text-content2 hover:bg-green-800 hover:text-white"
                            >
                                {isShowingMore ? 'بستن' : 'نمایش بیشتر'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BoxChartComponent;
