import React from "react";

const Navbar = () => {
   return (
      <>
      <header>
         <nav className="flex w-full items-center justify-between px-2 md:px-7 h-14 md:min-h-24 bg-black">
            {/* logo */}
            <div>
               <img
                  src="/images/logo/logo.png"
                  className="w-24 md:w-full"
                  alt="logo"
               ></img>
            </div>
            {/* search input*/}
            <div className="flex items-center justify-between px-2 md:px-4 bg-gray-700 w-18 md:w-[409px] md:h-[35px] rounded-md">
               {/* search form */}
               <form action="#" autoComplete="off">
                  <input
                     type="text"
                     placeholder="جستجوی سریع..."
                     className="bg-transparent font-MorabbaLight border-none outline-0  focus:border-gray-700"
                     
                  ></input>
               </form>
               {/* svg serch */}
               <svg className="w-5 h-5 text-white">
                  <use href="#search"></use>
               </svg>
            </div>
            {/* login button */}
            <div className="hidden md:inline-block">
               <a
                  href="#"
                  className="text-white bg-blue-600 p-2 md:p-4 rounded-md font-MorabbaLight "
               >
                  ورود/ثبت نام
               </a>
            </div>
         </nav>
         </header>
      </>
   );
};

export default Navbar;
