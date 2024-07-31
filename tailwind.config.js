/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        header2: '#004d00',
        content2: '#ffffff',
        footer2: '#004d00',
        text2: '#ffd700',
        smallBox1: '#1c1c1c', // خاکستری تیره
        smallBox2: '#2e2e2e', // خاکستری تیره‌تر
        sectionBack1: '#f5f5f5', // خاکستری روشن
        sectionBack2: '#e0e0e0', // خاکستری ملایم
        accent1: '#b0b0b0', // خاکستری مایل به سفید (برای استفاده در باکس‌های کوچک یا سکشن‌های ثانویه)
        accent2: '#d1d1d1', // خاکستری ملایم‌تر (برای پس‌زمینه‌های خاص یا عناصر اضافی)
      },
    },
  },
  plugins: [],
}

