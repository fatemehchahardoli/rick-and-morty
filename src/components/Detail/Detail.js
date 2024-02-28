import React from "react";

const Detail = () => {
   return (
      <section className="min-h-screen">
         {/* image character */}
         <div className="mx-auto flex min-h-screen max-w-screen-sm pt-14 justify-center">
            <div className="h-96 w-[60rem] rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
               <div className="flex h-full w-full items-center justify-center bg-gray-800 back">
                  <img
                     src="images/main/MV5BZjRjOTFkOTktZWUzMi00YzMyLThk (1).jpg"
                     className="object-cover"
                     alt="image"
                  />
               </div>
            </div>
         </div>
      </section>
   );
};

export default Detail;
