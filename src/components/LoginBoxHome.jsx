import { Link } from "react-router-dom";

export default function LoginBoxHome() {
  return (
    <div className="loginBoxHome w-full min-h-[600px]">
  <div className="content w-full lg:w-[85%] mx-auto flex flex-col lg:flex-row items-center min-h-96 py-10 justify-center gap-4 lg:gap-6">
    <div className="flex-1 flex flex-col items-center lg:items-start justify-center p-6">
      <h3 className="text-3xl font-bold py-10 text-smallBox2">تنها یک قدم</h3>
      <p className="text-smallBox2 text-lg mt-10 w-full md:w-[60%] text-start">
        ما با شناخت دغدغه های کسب و کار و سرمایه گذاری شما هستیم و ابتدا پنلی لمن و بعد ارزان در دسترس شما ساخته ایم تا بتوانیم زمان صرف شما در محیط سرمایه گذاری و کسب ثروت را به حداقل برسانیم
      </p>
    </div>
    <div className="flex items-center justify-center gap-4 lg:gap-6">
      <Link to={"/login"}>
      <button className="bg-green-600 w-[112px] text-content2 py-2 px-6 rounded-lg shadow-md hover:bg-green-700">
        ورود
      </button>
      </Link>
      <Link to={"/register"}>
      <button className="bg-blue-600 w-[112px] text-content2 py-2 px-6 rounded-lg shadow-md hover:bg-blue-700">
        ثبت نام
      </button>
      </Link>
      
    </div>
  </div>
</div>

  );
}

