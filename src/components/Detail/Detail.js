import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
const Detail = (character) => {
   return (
      <section className="min-h-screen">
      
         {/* image character */}
         <div className="mx-auto flex min-h-screen max-w-screen-sm pt-14 justify-center">
            <div className="h-96 w-[60rem] rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
               <div className="flex h-full w-full items-center justify-center bg-gray-800 back">
                  <img
                     src={character.image}
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
