import React from "react";
import HalfRating from "../Rating/HalfRating";
import useFetch from '../../hooks/useFetch';
const Card = ({image,status,species,locationName}) => {
   

   return (
      <>
   {data?.results?.map((characterData)=>{
     console.log(characterData.image)
         {/* wrapper card */}
         <div className="bg-white shadow-md rounded-2xl">
          {/* image for movie */}
            <div className="md:h-64 h-36">
               <img
                  className=" w-full h-full object-cover object-center rounded-t-2xl"
                  src={image}
                  alt="image rick abd morty"
               />
            </div>
            {/* body card */}
            <div className="md:p-6 p-2">
               <div className="flex items-baseline">
                  <span className="inline-block bg-teal-200 text-teal-800 py-1 px-4 text-xs rounded-full uppercase font-semibold tracking-wide">
                     {status}
                  </span>
                  <div className="ml-2 text-gray-600 text-xs uppercase font-semibold tracking-wide">
                    {species}
                  </div>
               </div>
               <h4 className="mt-2 font-semibold text-lg leading-tight truncate">
               Last known location:
               </h4>

               <div className="mt-1">
                  <span>{locationName}</span>
                  <span className="text-gray-600 text-sm">/ wk</span>
               </div>
               <div className="mt-2 flex items-center">
                  {/* rating */}
                  <HalfRating />

                  <span className="ml-2 text-gray-600 text-sm">34 reviews</span>
               </div>
            </div>
         </div>
   })}
         {/* wrapper card */}
         <div className="bg-white shadow-md rounded-2xl">
          {/* image for movie */}
            <div className="md:h-64 h-36">
               <img
                  className=" w-full h-full object-cover object-center rounded-t-2xl"
                  src="images/Chicago-Med.jpg"
                  alt="image rick abd morty"
               />
            </div>
            {/* body card */}
            <div className="md:p-6 p-2">
               <div className="flex items-baseline">
                  <span className="inline-block bg-teal-200 text-teal-800 py-1 px-4 text-xs rounded-full uppercase font-semibold tracking-wide">
                     New
                  </span>
                  <div className="ml-2 text-gray-600 text-xs uppercase font-semibold tracking-wide">
                     3 beds &bull; 2 baths
                  </div>
               </div>
               <h4 className="mt-2 font-semibold text-lg leading-tight truncate">
                  Beautiful Home in the countryside
               </h4>

               <div className="mt-1">
                  <span>$1,900.00</span>
                  <span className="text-gray-600 text-sm">/ wk</span>
               </div>
               <div className="mt-2 flex items-center">
                  {/* rating */}
                  <HalfRating />

                  <span className="ml-2 text-gray-600 text-sm">34 reviews</span>
               </div>
            </div>
         </div>
      </>
   );
};

export default Card;
