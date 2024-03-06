import { Link } from "react-router-dom"
import {FaStar} from "react-icons/fa"

const imageURL = import.meta.env.VITE_IMG

const FilmesCard = ({filmes, mostrar = true}) => {
    return (
        <div className="filme-card">
            <h1 className="title">
                {filmes.title}
            </h1>
            <div className="poster"> 
                <img src={imageURL + filmes.poster_path} alt={filmes.title} />
            </div>
            
            {mostrar && <Link to={`/filme/${filmes.id}`}>Detalhes</Link>}
        </div>
  )
}

export default FilmesCard