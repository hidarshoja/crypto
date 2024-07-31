

export default function LoginBoxHome() {
  return (
    <div className=' w-full  min-h-96 bg-gradient-to-r from-[#17a417] via-[#007300] to-[#088208]'>
    
      <div className='w-full lg:w-[85%] mx-auto flex flex-col lg:flex-row items-center min-h-96 py-10 justify-center  gap-4 lg:gap-6'>
      <div className='flex-1 flex flex-col items-center lg:items-start justify-center  p-6'>
        <h3 className='text-2xl font-semibold mb-4 text-text2'>تنها یک قدم</h3>
        <p className='text-text2 w-[60%] text-start'>
          ما با شناخت دغدغه های کسب و کار و سرمایه گذاری شما هستیم و ابتدا پنلی لمن و بعد ارزان در دسترس شما ساخته ایم تا بتوانیم زمان صرف شما در محیط سرمایه گذاری و کسب ثروت را به حداقل برسانیم
        </p>
      </div>

      <div className='flex items-center justify-center gap-4 lg:gap-6 '>
        <button className='bg-green-600 w-[112px] text-content2 py-2 px-6 rounded-lg shadow-md hover:bg-green-700 '>
          ورود
        </button>
        <button className='bg-blue-600 w-[112px] text-content2 py-2 px-6 rounded-lg shadow-md hover:bg-blue-700'>
          ثبت نام
        </button>
      </div>
      </div>
    </div>
  );
}

