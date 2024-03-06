import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import FilmesCard from "../FilmesCard/FilmesCard";

const filmesURL = import.meta.env.VITE_API
const chaveAPI = import.meta.env.VITE_API_KEY
const imageURL = import.meta.env.VITE_IMG


function Filmes() {

    const {id} = useParams() //pegar o parametro id da URL
    const [filme, setFilme] = useState(null)

    const getFilme = async (url) => {
        const res = await fetch(url)
        const data = await res.json();

        setFilme(data)
    };    

    useEffect( () => {
        const filmeURL = `${filmesURL}${id}?${chaveAPI}`

        getFilme(filmeURL)

    }, []);

    return (

        <div>
            {filme && 
                <h1>{filme.title}</h1>
                
            }

        </div>
    )
  }
  
  export default Filmes;