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


    //API superflix
    let frame = document.getElementById('SuperFlixAPIContainerVideo');
    console.log(id)
    var type = "filme";
    var imdb = {id};
    var season = "1";
    var episode = "1";

    SuperFlixAPIPluginJS(type, imdb, season, episode);

    function SuperFlixAPIPluginJS(type, imdb, season, episode){
    if (type == "filme") {
            frame.innerHTML = `<iframe src="https://superflixapi.top/${type}/${id}? scrolling="no" frameborder="0" allowfullscreen="" webkitallowfullscreen="" mozallowfullscreen="" "></iframe>`

    }else{
        if (season !== "") { 
            season = "/"+season; 
            }if (episode !== "") { 
                episode = "/"+episode; 
            }
        }
    }
    }, []);
   
    return (

        <>
        
            {filme && 
                <section className="detalhes">  
                    <h1 className="titleDesc">
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
            <div id="SuperFlixAPIContainerVideo"></div>

        </>
    )
  }
  
  export default Filmes;