import React from "react";

const Footer = () => {
   return (
      <footer className=" bg-black  text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-center">
         <div className=" container flex items-center justify-center  border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between">
            <div className="flex justify-center">
               {/* links */}
               {/* facebook */}
               <a
                  href="#!"
                  className=" inline-block mr-6 text-neutral-600 dark:text-neutral-200 p-1 hover:text-orange-400 hover:bg-white"
               >
                  <svg className="h-4 w-4">
                     <use href="#facebook"></use>
                  </svg>
               </a>
               {/* twitter */}
               <a
                  href="#!"
                  className="mr-6 text-neutral-600 dark:text-neutral-200 p-1 hover:text-orange-400 hover:bg-white"
               >
                  <svg className="h-4 w-4">
                     <use href="#twiter"></use>
                  </svg>
               </a>
               {/* github */}
               <a
                  href="#!"
                  className="mr-6 text-neutral-600 dark:text-neutral-200 p-1 hover:text-orange-400 hover:bg-white"
               >
                   <svg className="h-4 w-4">
                     <use href="#github"></use>
                  </svg>
               </a>
               {/* google */}
               <a
                  href="#!"
                  className="mr-6 text-neutral-600 dark:text-neutral-200 p-1 hover:text-orange-400 hover:bg-white"
               >
              <svg className="h-4 w-4">
                     <use href="#google"></use>
                  </svg>
               </a>
             
            </div>
         </div>
      </footer>
   );
};

export default Footer;
