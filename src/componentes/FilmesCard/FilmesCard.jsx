import { Link } from "react-router-dom"
import {FaStar} from "react-icons/fa"

const imageURL = import.meta.env.VITE_IMG

const FilmesCard = ({filmes}) => {
    return (
        
        < >
            {<Link  to={`/filme/${filmes.id}`}>
                <div className="filme-card">
                    <h1 className="title">
                        {filmes.title}
                    </h1>

                    <div className="poster"> 
                        <img src={imageURL + filmes.poster_path} alt={filmes.title} />
                    </div>
                </div>
            </Link>}
        
        </>
        
  )
}

export default FilmesCard