import { Link } from "react-router-dom"
import {BiCameraMovie, BiSearchAlt2} from "react-icons/bi"

function Navbar() {

    return (
        <nav id="navbar">
            <h2>
                <Link to="/"> <BiCameraMovie/>Filmes</Link>
            </h2>            

            <form action="">
                <input type="text" placeholder="Busque seu filme" />
                <button type="submit">
                    <BiSearchAlt2/> 
                </button>
            </form>
        </nav>
    )
  }
  
  export default Navbar