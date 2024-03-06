import { useState, useEffect } from "react"; //poder gerenciar o estado do filme e fazer chamada da api quando a pagina carregar

import FilmesCard from "../FilmesCard/FilmesCard";

import "../Pages/Home.css"

const filmesURL = import.meta.env.VITE_API;
const chaveAPI = import.meta.env.VITE_API_KEY;


const Home = () => {
    const [topFilmes, setTopFilmes] = useState([]) //gerenciar estado

    const getTopFilmes = async (url) => {
        const res = await fetch(url)
        const data = await res.json();

        setTopFilmes(data.results)
    };

    useEffect( () => {

        const topFilmesUrl = `${filmesURL}top_rated?${chaveAPI}`

        getTopFilmes(topFilmesUrl)

    }, []); //quando a pagina carregar, iniciar o "getTopFilmes"
    

    return (
        <div className="container">
            <h2>Melhores Filmes</h2>
            <div className="filmes-container">
                {topFilmes && 
                    topFilmes.map((filmes) => <FilmesCard filmes={filmes}/>)
                }
            </div>
        </div>        
    )
    
    
};

export default Home;