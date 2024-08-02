import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const [showPasswordMessage, setShowPasswordMessage] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (name === 'password') {
      setShowPasswordMessage(true);
      setTimeout(() => setShowPasswordMessage(false), 10000);
    }
  };

  const handleRegister = async () => {
    if (formData.password.length < 8) {
      alert('طول پسورد حتما باید بیشتر از 8 کاراکتر باشد');
      return;
    }
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
        <div className="mx-auto w-full lg:w-[420px] border px-5 py-2 shadow-xl rounded-lg">
          <div className='w-full flex flex-col items-center justify-center'>
            <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-header2">
              ثبت نام
            </h2>
            <p className="mt-2 text-sm leading-6 text-header2">
              قبلاً ثبت نام کرده اید؟
              <Link to="/login" className="font-semibold text-red-500 hover:text-indigo-500">
                به حساب خود وارد شوید
              </Link>
            </p>
          </div>

          <div className="mt-10">
            <form action="#" method="POST" className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-header2 text-right">
                    نام
                  </label>
                  <div className="mt-2">
                    <input
                      id="first-name"
                      name="firstName"
                      type="text"
                      dir='rtl'
                      value={formData.firstName}
                      onChange={handleChange}
                      autoComplete="given-name"
                      required
                      className="block w-full rounded-md border-0 pr-2 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-header2 text-right">
                    نام خانوادگی
                  </label>
                  <div className="mt-2">
                    <input
                      id="last-name"
                      name="lastName"
                      type="text"
                      dir='rtl'
                      value={formData.lastName}
                      onChange={handleChange}
                      autoComplete="family-name"
                      required
                      className="block w-full rounded-md border-0 pr-2 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-header2 text-right">
                    ایمیل
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      dir='ltr'
                      value={formData.email}
                      onChange={handleChange}
                      autoComplete="email"
                      required
                      className="block w-full rounded-md border-0 pl-3 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium leading-6 text-header2 text-right">
                    شماره تماس
                  </label>
                  <div className="mt-2">
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      dir='ltr'
                      value={formData.phone}
                      onChange={handleChange}
                      autoComplete="tel"
                      required
                      className="block w-full rounded-md border-0 pl-3 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-header2 text-right">
                    رمز ورود
                  </label>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      dir='ltr'
                      value={formData.password}
                      onChange={handleChange}
                      autoComplete="new-password"
                      required
                      className="block w-full rounded-md border-0 py-1.5 pl-3 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    {showPasswordMessage && (
                      <span className="text-red-500 text-xs">
                        طول پسورد حتما باید بیشتر از 8 کاراکتر باشد
                      </span>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="confirm-password" className="block text-sm font-medium leading-6 text-header2 text-right">
                    تکرار رمز ورود
                  </label>
                  <div className="mt-2">
                    <input
                      id="confirm-password"
                      name="confirmPassword"
                      type="password"
                      dir='ltr'
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      autoComplete="new-password"
                      required
                      className="block w-full rounded-md border-0 py-1.5 pl-3 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>

              <div>
                <button
                  type="button"
                  onClick={handleRegister}
                  className="flex w-full justify-center rounded-md bg-header2 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  ثبت نام
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
            src="/img/login1.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
