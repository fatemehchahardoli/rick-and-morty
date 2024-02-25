import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import MainSection from "../../components/MainSection/MainSection";
import Card from "../../components/Card/Card";

const Home = () => {
   return (
      <>
         <Navbar />
         <MainSection />
         <section className="w-full bg-gray-700">
            {/* wrapper the most visited */}
            <div className="container text-center ">
               <div>
                  <h2 className="text-yellow-500  font-MorabbaBold text-2xl ">
                     پربازدید ترین ها
                  </h2>
                  <span className=" inline-block h-1 w-16 rounded-sm bg-white"></span>
               </div>
            </div>
            <div className="container">
               <Card />
            </div>
         </section>
      </>
   );
};

export default Home;
