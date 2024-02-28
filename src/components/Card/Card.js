import React from "react";
import HalfRating from "../Rating/HalfRating";
import { Link } from "react-router-dom";
const Card = ({ id,image, status, species, location }) => {
   return (
      <>
     <Link to={`/Details/${id}`}>
         {/* wrapper card */}
         <div className="bg-gray-600 shadow-md rounded-2xl">
            {/* image for movie */}
            <div className="md:h-64 h-36">
               <img
                  className=" w-full h-full object-cover object-center rounded-t-2xl"
                  src={image}
                  alt="image rick abd morty"
               />
            </div>
            {/* body card */}
            <div className="md:p-6 p-2 text-white">
               <div className="flex items-baseline">
                  <span className="inline-block bg-teal-200 text-white py-1 px-4 text-xs rounded-full uppercase font-semibold tracking-wide">
                     {status}
                  </span>
                  <div className="ml-2 text-white text-xs uppercase font-semibold tracking-wide">
                     {species}
                  </div>
               </div>
               <h4 className="mt-2 font-semibold text-lg leading-tight truncate">
                  Last known location:
               </h4>

               <div className="mt-1">
                  <span>{location.name}</span>
               </div>
               <div className="mt-2 flex items-center">
                  {/* rating */}
                  <HalfRating />

                  <span className="ml-2 text-white text-sm">34 reviews</span>
               </div>
            </div>
         </div>
         </Link>
      </>
   );
};

export default Card;
