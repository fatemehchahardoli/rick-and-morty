import React, { useState } from "react";
import Cards from "../Cards/Cards";
import useFetch from "../../hooks/useFetch";
const MainSection = () => {
   const { characters, locations, episodes } = useFetch();
   const [listCharacters, setlistCharacters] = useState([]);
 
   //filtered human
  const filterhandler=() => {
         let filterResult = characters.results.filter((item) => {
            return item.species
               .includes("Human");
         });
     setlistCharacters(filterResult);
   };

      //filtered Alien
  const filters=() => {
   let filterResult = characters.results.filter((item) => {
      return item.species
         .includes("Alien");
   });
setlistCharacters(filterResult);
};
   return (
      <>
         <main className="bg-gray-700 pb-16 md:pb-8">
            {/* home section */}
            <section className="h-auto w-full px-4 md:px-20  md:pt-20 lg:px-40 bg-gray-700">
               {/* Explanation about the animation */}
               <div className="flex flex-col md:flex-row  gap-x-4 mx-auto text-white">
                  {/*image */}
                  <div className="flex justify-center md:pt-3">
                     <img
                        src="/images/main/MV5BZjRjOTFkOTktZWUzMi00YzMyLThk (1).jpg"
                        className="w-[285px] h-[415px] rounded-xl hover:grayscale hover:transition-all cursor-pointer"
                        alt="rick and morty"
                     ></img>
                  </div>
                  {/* description */}
                  <div className="mt-3 md:mt-0">
                     {/* title */}
                     <div className="flex flex-col text-center md:text-start">
                        <h2 className="font-DanaDemiBold text-2xl font-bold">
                           Rick and Morty
                        </h2>
                        <span className="text-gray-400 text-base">
                           ریک و مورتی
                        </span>
                     </div>
                     {/* option */}
                     <div className="flex flex-wrap justify-center my-4">
                        <span className="flex items-center justify-center m-2 text-black rounded-lg w-16 h-8 border bg-yellow-500 font-MorabbaBold text-lg cursor-pointer">
                           IMDb
                        </span>
                        <span className="flex items-center justify-center m-2 rounded-lg w-8  h-8 cursor-pointer ">
                           10/
                           <span className="font-MorabbaBold text-xl cursor-pointer">
                              9.1
                           </span>
                        </span>
                        <span className="flex items-center justify-center m-2 rounded-lg w-8  h-8 border border-gray-300 cursor-pointer">
                           13+
                        </span>
                        <span className="flex items-center justify-center m-2 rounded-lg w-28 h-8  border border-gray-300 cursor-pointer">
                           سافت ساب
                        </span>
                        <span className="flex items-center justify-center m-2 rounded-lg w-28 h-8  border border-gray-300 cursor-pointer">
                           Adult swim
                        </span>
                     </div>
                     {/* wrapper for period of time && Manufacturing Country ... */}
                     <div className="flex flex-col">
                        <div className="flex flex-wrap justify-center">
                           <div className="flex h-5 items-center px-3 border-l-2">
                              <svg className="w-4 h-4 ml-1 text-gray-500">
                                 <use href="#clock"></use>
                              </svg>
                              <span className="font-MorabbaLight">
                                 مدت زمان:22دقیقه
                              </span>
                           </div>

                           <div className="flex h-5 items-center pl-2 border-l-2">
                              <p className="  flex justify-center w-16 font-MorabbaLight hover:text-orange-400 ">
                                 انیمیشن
                              </p>
                              <p className="  flex justify-center w-16  font-MorabbaLight  hover:text-orange-400">
                                 کمدی
                              </p>
                              <p className="  flex justify-center w-16  font-MorabbaLight  hover:text-orange-400">
                                 ماجراجویی
                              </p>
                           </div>
                           <div className="flex h-5 items-center pr-3">
                              <span className="font-MorabbaLight hover:text-orange-400">
                                 محصول:آمریکا
                              </span>
                           </div>
                        </div>
                        <div className="flex h-5 items-center justify-center px-3 space-y-8">
                           <svg className="w-4 h-4 ml-1 mt-7 text-gray-500">
                              <use href="#video"></use>
                           </svg>
                           <span className="font-MorabbaLight mb-3">
                              کیفیت نمایش : BluRay WEB-DL
                           </span>
                        </div>
                     </div>
                     {/* links */}
                     <div className="flex h-4 items-center justify-around mt-24">
                        <a
                           href="#"
                           className="inline-block px-4 py-2 md:px-8 md:py-4 bg-green-700 text-white font-Dana text-sm rounded-xl hover:bg-green-600 transition-all"
                        >
                           وضعیت:اتمام پخش
                        </a>
                        {/* notification */}
                        <a
                           href="#"
                           className="inline-block px-2 py-2 md:px-4 md:py-4 bg-gray-500 text-white hover:text-orange-400 rounded-xl "
                        >
                           <svg className="h-5 w-5">
                              <use href="#notification"></use>
                           </svg>
                        </a>
                        {/* save */}
                        <a
                           href="#"
                           className="inline-block  px-2 py-2 md:px-4 md:py-4 bg-gray-500  text-white hover:text-orange-400  rounded-xl"
                        >
                           <svg className="h-5 w-5 fill-white">
                              <use href="#save"></use>
                           </svg>
                        </a>
                        {/* heart */}
                        <a
                           href="#"
                           className="inline-block  px-2 py-2 md:px-4 md:py-4 bg-gray-500 text-white hover:text-orange-400 rounded-xl"
                        >
                           <svg className="h-5 w-5 fill-white">
                              <use href="#heart"></use>
                           </svg>
                        </a>
                     </div>
                  </div>
               </div>
               {/* text */}
               <div className=" mt-10 px-4 md:mt-3 font-Dana md:text-base text-xs text-white">
                  <p>
                     ریک سانچز دانشمند نابغهٔ الکلی است که به تازگی در خانهٔ
                     خانوادهٔ دخترش، بِث که یک دامپزشک و جراح قلب اسب است، اقامت
                     گزیده. او اوقاتش را حول کار بر روی پروژه‌های محرمانهٔ علمی
                     بیشمارش و ماجراجویی‌های خطرناک و سورئالش در کهکشان‌ها با
                     نوهٔ نوجوانش، مورتی (و گهگاهی همراه با سامر، نوه ی بزرگترش)
                     می‌گذراند. درآمیختن این اتفاقات با کشمکش‌های درون خانوادگی،
                     باعث پریشانی و اضطراب بیشتر مورتی در مدرسه و خانه شده است و
                     …
                  </p>
               </div>
            </section>

            {/* movie section */}
            <section className="w-full ">
               <div className="container">
                  {/* header section*/}
                  <div className="text-center  pt-20 flex justify-center ">
                     <div>
                        <h2 className="text-yellow-500  font-MorabbaBold text-2xl ">
                           پربازدید ترین ها
                        </h2>
                        <span className=" inline-block h-1 w-16 rounded-sm bg-white"></span>
                     </div>
                     {/* filters */}
                     <button
                        onClick={filterhandler}
                        className="w-20 h-12 bg-yellow-500 text-white rounded-xl mr-[10rem] hover:bg-yellow-300 transition-all"
                     >
                        HUMAN
                     </button>
                     <button onClick={filters} className="w-20 h-12 bg-yellow-500 text-white rounded-xl mr-5 hover:bg-yellow-300 transition-all">
                        ALIEN
                     </button>
                  </div>

                  {/* body section */}
                  <Cards characters={listCharacters.length?listCharacters:characters?.results} />
               </div>
            </section>
         </main>
      </>
   );
};

export default MainSection;
