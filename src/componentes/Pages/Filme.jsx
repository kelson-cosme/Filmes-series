import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./filmes.css"

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

        <>
            {filme && 
                <section className="detalhes">  
                    <h1>
                        {filme.title}
                    </h1>

                    <div className="imgDetalhes">
                        <img src={imageURL + filme.poster_path} alt="" />
                    </div>
               
                    <div className="info">
                        <h3>Orçamento: {filme.budget}</h3>
                    </div>

                    <div className="info">
                        <h3>Receita: {filme.revenue}</h3>
                    </div>

                    <div className="info">
                        <h3>Duração: {filme.runtime} minutos</h3>
                    </div>

                    <div className="info">
                        <h3>Descrição: {filme.overview}</h3>
                    </div>
                </section>
                
            }

        </>
    )
  }
  
  export default Filmes;