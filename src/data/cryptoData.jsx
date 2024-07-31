
import { FaBitcoin , FaEthereum , FaDollarSign , FaLink , FaDog } from "react-icons/fa";
import { SiBinance , SiRipple , SiCardano , SiLitecoin , SiBlockchaindotcom  , SiPolygon , SiStellar  , SiHedera , SiBitcoincash   } from "react-icons/si";
import { FaHillAvalanche } from "react-icons/fa6";
import { BiPolygon } from "react-icons/bi";

const CryptoData = [
  {
    id: 1,
    name: "بیتکوین",
    pair: "BTC / USDT",
    value: "0.6359",
    percentage: "-2.58",
    transactions: "24.9B",
    icon: <FaBitcoin size={24} color="#FFD700" />
  },
  {
    id: 2,
    name: "اتریوم",
    pair: "ETH / USDT",
    value: "10.6359",
    percentage: "-2.58",
    transactions: "24.9B",
    icon: <FaEthereum size={24} color="#FFD700" />
  },
  {
    id: 3,
    name: "بایننس کوین",
    pair: "BNB / USDT",
    value: "23.6359",
    percentage: "-2.58",
    transactions: "24.9B",
    icon: <SiBinance size={24} color="#FFD700" />
  },
  {
    id: 4,
    name: "ریپل",
    pair: "XRP / USDT",
    value: "0.6359",
    percentage: "-2.58",
    transactions: "34.5B",
    icon: <SiRipple  size={24} color="#FFD700" />
  },
  {
    id: 5,
    name: "یو اس دی کوین",
    pair: "USDC / USDT",
    value: "5.1239",
    percentage: "-2.58",
    transactions: "41.9B",
    icon: <FaDollarSign size={24} color="#FFD700" />
  },
  {
    id: 6,
    name: "کاردانو",
    pair: "ADA / USDT",
    value: "10.59",
    percentage: "-2.58",
    transactions: "124.9B",
    icon: <SiCardano  size={24} color="#FFD700" />
  },
  {
    id: 7,
    name: "چین لینک",
    pair: "LINK / USDT",
    value: "0.6359",
    percentage: "-2.58",
    transactions: "4.9B",
    icon: <FaLink size={24} color="#FFD700" />
   },
  {
    id: 8,
    name: "اولنج",
    pair: "AVAX / USDT",
    value: "0.6359",
    percentage: "-2.58",
    transactions: "24.9B",
    icon: <FaHillAvalanche size={24} color="#FFD700" />
  },
  {
    id: 9,
    name: "دوج کوین",
    pair: "DOGE / USDT",
    value: "0.6359",
    percentage: "-2.58",
    transactions: "84.9B",
    icon: <FaDog size={24} color="#FFD700" />
  },
  {
    id: 10,
    name: "ترون",
    pair: "TRX / USDT",
    value: "0.6359",
    percentage: "-2.58",
    transactions: "94.9B",
    icon: <SiBlockchaindotcom  size={24} color="#FFD700" />
  },
  {
    id: 11,
    name: "سولانا",
    pair: "SOL / USDT",
    value: "0.6359",
    percentage: "-2.58",
    transactions: "11.9B",
    icon: <SiPolygon  size={24} color="#FFD700" />
  },
  {
    id: 12,
    name: "لایت کوین",
    pair: "LTC / USDT",
    value: "0.6359",
    percentage: "-2.58",
    transactions: "5.2B",
    icon: <SiLitecoin  size={24} color="#FFD700" />
  },
  {
    id: 13,
    name: "استلار",
    pair: "XLM / USDT",
    value: "0.6359",
    percentage: "-2.58",
    transactions: "3.1B",
    icon: <SiStellar  size={24} color="#FFD700" />
  },
  {
    id: 14,
    name: "پالیگان",
    pair: "MATIC / USDT",
    value: "0.6359",
    percentage: "-2.58",
    transactions: "9.4B",
    icon: <BiPolygon size={24} color="#FFD700" />
  },
  
  {
    id: 17,
    name: "هدرا",
    pair: "HEDERA / USDT",
    value: "0.6359",
    percentage: "-2.58",
    transactions: "6.8B",
    icon: <SiHedera  size={24} color="#FFD700" />
  },
  
 
  
  {
    id: 20,
    name: "بیت کوین کش",
    pair: "BCH / USDT",
    value: "0.6359",
    percentage: "-2.58",
    transactions: "12.5B",
    icon: <SiBitcoincash  size={24} color="#FFD700" />
  },
];

export default CryptoData;
