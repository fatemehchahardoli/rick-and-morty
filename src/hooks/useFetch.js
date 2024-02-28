import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
export default function useFetch(url) {
    const [characters, setCharacters] = useState(null)
    const [tempcharacters, settempCharacters] = useState(null)
    const [locations, setLocations] = useState(null)
    const [episodes, setEpisodes] = useState(null)
   

    useEffect(() => {
        axios.all([
            axios.get("https://rickandmortyapi.com/api/character"),
            axios.get("https://rickandmortyapi.com/api/location"),
            axios.get( "https://rickandmortyapi.com/api/episode")])
            .then(axios.spread((ch,l,e)=>{
                setCharacters(ch.data)
                setLocations(l.data)
                setEpisodes(e.data)
            }))

    }, [])

    return {characters,locations,episodes};

}
