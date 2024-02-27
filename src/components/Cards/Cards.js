import React from 'react'
import Card from '../Card/Card'
import useFetch from '../../hooks/useFetch'
const Cards = () => {
    const {data, isPending, error} = useFetch('https://rickandmortyapi.com/api/character')
   const {posts:location, isPending:locationIspending, error:locationWrror} = useFetch('https://rickandmortyapi.com/api/character')
  return (
<>
<div className=" grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 pt-5 justify-center gap-3.5 md:gap-5 child:h-[300px] md:child:h-auto">
{data?.results?.map((character,index)=>{
    console.log(data);
    return <Card key={index} image={character.image} status={character.status} species={character.species} locationName={character.location.name} />
})}
</div>
</>
  )
}

export default Cards