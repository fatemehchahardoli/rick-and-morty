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
         {console.log(characterDetails)}
         <Navbar />
         
         <section className="min-h-screen">
      
      {/* image character */}
      <div className="mx-auto flex min-h-screen max-w-screen-sm pt-14 justify-center">
         <div className="h-96 w-[60rem] rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
            <div className="flex h-full w-full items-center justify-center bg-gray-800 back">
               <img
                  src={characterDetails.image}
                  className="object-cover  w-full h-full"
                  alt="image"
               />
            </div>
         </div>
      </div>
     <h2>{characterDetails.name}</h2>
   </section>
         <Footer />
      </>
   );
};

export default Details;
