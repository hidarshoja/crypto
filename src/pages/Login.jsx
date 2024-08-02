import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', formData);
      console.log('Response from server:', response.data);
      console.log(`formData`, formData);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="flex min-h-full flex-1 w-full h-screen" dir='rtl'>
      <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24 w-1/2" dir='rtl'>
        <div className="mx-auto w-full max-w-sm lg:w-96 border px-5 py-2 shadow-xl rounded-lg">
          <div className='w-full flex flex-col items-center justify-center'>
            <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-header2">
              به حساب خود وارد شوید
            </h2>
            <p className="mt-2 text-sm leading-6 text-header2">
              ثبت نام نکرده اید؟
              <Link to="/register" className="font-semibold text-red-500 hover:text-indigo-500">
                یک دوره آزمایشی رایگان 14 روزه را شروع کنید
              </Link>
            </p>
          </div>

          <div className="mt-10">
            <form action="#" method="POST" className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-header2 text-right">
                  ایمیل
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="text"
                    dir='ltr'
                    autoComplete="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 pl-3 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-header2 text-right">
                  پسورد
                </label>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    dir='ltr'
                    autoComplete="current-password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 pl-3 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="rememberMe"
                    type="checkbox"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="remember-me" className="mr-3 block text-sm leading-6 text-color2">
                    مرا به خاطر بسپار
                  </label>
                </div>

                <div className="text-sm leading-6">
                  <Link to="/forgot" className="font-semibold text-color2 hover:text-indigo-500">
                    رمز عبور خود را فراموش کرده اید؟
                  </Link>
                </div>
              </div>

              <div>
                <button
                  type="button"
                  onClick={handleLogin}
                  className="flex w-full justify-center rounded-md bg-header2 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  ورود
                </button>
              </div>
            </form>
          </div>

          <div className="mt-10">
            <div className="relative">
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full" />
              </div>
              <div className="relative flex justify-center text-sm font-medium leading-6">
                <span className="bg-white px-6 text-gray-900"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative hidden flex-1 lg:block w-1/2 bg-white">
        <div className='w-[70%] flex items-center justify-center'>
          <img
            className="absolute left-1/4 inset-0 h-full w-[90%]"
            src="/img/login4.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
