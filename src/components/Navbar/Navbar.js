import React from "react";

const Navbar = () => {
   return (
      <>
         {/* list svgs */}
         <svg class="hidden">
            <symbol
               id="search"
               xmlns="http://www.w3.org/2000/svg"
               fill="none"
               viewBox="0 0 24 24"
               stroke-width="1.5"
               stroke="currentColor"
            >
               <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
               />
            </symbol>
         </svg>
         <nav className="flex min-h-24">
            {/* logo */}
            <div>
               <img src="/images/logo/logo.png" alt="logo"></img>
            </div>
            {/* search input*/}
            <div className="flex items-center justify-between px-4 bg-gray-700 w-[409px] h-[35px] rounded-md">
               {/* search form */}
               <form action="#" autoComplete="off">
                  <input
                     type="text"
                     placeholder="جستجوی سریع..."
                     className="bg-transparent font-MorabbaLight"
                  ></input>
               </form>
               {/* svg serch */}
               <svg className="w-5 h-5 text-white">
                  <use href="#search"></use>
               </svg>
            </div>
            {/* login button */}
            <div>
               <a href="#" className="text-white bg-blue-600 p-4 rounded-md font-MorabbaLight">
                  ورود/ثبت نام
               </a>
            </div>
         </nav>
      </>
   );
};

export default Navbar;
