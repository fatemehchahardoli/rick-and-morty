import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Detail from "../../components/Detail/Detail";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
const Details = () => {
  const { characters,locations,episodes}=useFetch();

  let params=useParams();
   return (
      <>
      {console.log(characters.results)}
         <Navbar />
        
        {
          characters?.results?.filter((ch)=>ch.id===params.characterID).map((item,index)=><Detail {...item} key={index}/> )
        }
         <Footer />
      </>
   );
};

export default Details;
