import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Detail from "../../components/Detail/Detail";
import { useParams } from "react-router-dom";
import axios from "axios";
const Details = () => {
   const [characterDetails, setCharacterDetails] = useState({});
   let { characterID } = useParams();
   useEffect(() => {
      axios
         .get(`https://rickandmortyapi.com/api/character/${characterID}`)
         .then((data) => setCharacterDetails(data.data));
   }, []);
   return (
      <>
         <Navbar />

         <section className="min-h-screen">
            {/* image character */}
            <div className="mx-4  min-h-screen max-w-screen-sm pt-14 ">
               <div className="h-96 w-[50rem] rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
                  <div className="flex h-full w-full items-center justify-center  bg-gray-800 back">
                     <img
                        src={characterDetails.image}
                        className="object-fill  w-full h-full"
                        alt="image"
                     />
                  </div>
               </div>
               <div className="pr-8 w-full flex justify-center gap-16 pt-9 ">
                  <div className="leading-9">
                     <span className="text-xl text-white">نام:</span>
                     <span className="text-2xl text-white">
                        {characterDetails.name}
                     </span>
                     <div className="leading-9">
                        <span className="text-xl text-white">وضعیت:</span>
                        <span className="text-xl text-white">
                           {characterDetails.status}
                        </span>
                     </div>
                  </div>

                  <div className="leading-9">
                     <span className="text-xl text-white">گونه ها:</span>
                     <span className="text-xl text-white">
                        {characterDetails.species}
                     </span>
                     <div className="leading-9">
                        <span className="text-xl text-white"> ژانر:</span>
                        <span className="text-xl text-white">
                           {characterDetails.gender}
                        </span>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <Footer />
      </>
   );
};

export default Details;
