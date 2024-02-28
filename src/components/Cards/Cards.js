import React from 'react'
import Card from '../Card/Card'
import useFetch from '../../hooks/useFetch'
const Cards = () => {
    
 const { characters,locations,episodes}=useFetch();
  return (
<>
<div className=" grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 pt-5 justify-center gap-3.5 md:gap-5 child:h-[300px] md:child:h-auto">
{characters?.results?.map((character,index)=>{
    return <Card key={index} {...character} />
})}
</div>
</>
  )
}

export default Cards