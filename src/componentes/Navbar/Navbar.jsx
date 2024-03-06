import { useState } from "react"
import { Link, useNavigate } from "react-router-dom" //função de redirecionamento
import {BiCameraMovie, BiSearchAlt2} from "react-icons/bi"

function Navbar() {

    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    //mapear o evento para o envio do input
    const envio = (e) => {
        e.preventDefault() //Previnir que faz o envio do form e carregue a pagina novamente
        
        if(!search) return //inpede que a pesquisa retorne vazia 

        navigate(`/procurar?q=${search}`)
        setSearch("")
    }

    return (
        <nav id="navbar">
            <h2>
                <Link to="/"> <BiCameraMovie/>Filmes</Link>
            </h2>            

            <form onSubmit={envio}>
                <input type="text" placeholder="Busque seu filme" onChange={(e) => setSearch(e.target.value)} value={search}/> {/* pegar valor do input*/}
                <button type="submit">
                    <BiSearchAlt2/> 
                </button>

            </form>
        </nav>
    )
  }
  
  export default Navbar