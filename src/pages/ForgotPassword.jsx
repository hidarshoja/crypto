import React, { useState, useEffect } from 'react';

export default function ForgotPassword() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPasswordMessage, setShowPasswordMessage] = useState(false);

  useEffect(() => {
    let timer;
    if (showPasswordMessage) {
      timer = setTimeout(() => setShowPasswordMessage(false), 10000);
    }
    return () => clearTimeout(timer);
  }, [showPasswordMessage]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 8) {
      alert('طول پسورد حتما باید بیشتر از 8 کاراکتر باشد');
      return;
    }
    if (password === confirmPassword) {
      console.log('Passwords match');
      // Call API or handle the password reset logic here
    } else {
      console.log('Passwords do not match');
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setShowPasswordMessage(true);
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8" dir='rtl'>
      <div className='rounded-lg w-[320px] md:w-[500px] mx-auto mt-10 py-10 bg-gray-300 px-6 shadow-2xl'>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            رمز عبور خود را بازیابی کنید
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  رمز عبور جدید
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={password}
                  onChange={handlePasswordChange}
                  className="block w-full rounded-md border-0 py-2 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  dir='ltr'
                />
                {showPasswordMessage && (
                  <span className="text-red-500 text-sm">
                    طول پسورد حتما باید بیشتر از 8 کاراکتر باشد
                  </span>
                )}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="confirm-password" className="block text-sm font-medium leading-6 text-gray-900">
                  تکرار رمز عبور جدید
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="confirm-password"
                  name="confirm-password"
                  type="password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="block w-full rounded-md border-0 py-2 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  dir='ltr'
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm leading-6 text-white shadow-sm hover:bg-green-500 disabled:bg-green-300"
              >
                ارسال
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
