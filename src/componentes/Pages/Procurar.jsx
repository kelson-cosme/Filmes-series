import { useState, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom"; // permite pegar as letras da url 

import FilmesCard from "../FilmesCard/FilmesCard";

const procurarURL = import.meta.env.VITE_SEARCH
const chaveAPI = import.meta.env.VITE_API_KEY



function Procurar() {
    const [procurarParams] = useSearchParams()

    const [filmes, setFilmes] = useState([])
    const query = procurarParams.get("q")


    const getProcurarFilmes = async (url) => {
        const res = await fetch(url)
        const data = await res.json();

        setFilmes(data.results)
    };

    useEffect( () => {

        const procurarFilmesUrl = `${procurarURL}?${chaveAPI}&query=${query}`//parametro da url

        getProcurarFilmes(procurarFilmesUrl)

    }, [query]); //quando a pagina carregar, iniciar o "getTopFilmes"
    


    return (
        <div className="container">
        <h2>Resultados para:{query} </h2>
        <div className="filmes-container">
            {filmes && 
                filmes.map((filmes) => <FilmesCard filmes={filmes}/>)
            }
        </div>
    </div>   
    )
  }
  
  export default Procurar;