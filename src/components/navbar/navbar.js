import "./navbar.css";
import { Link } from "react-router-dom";
import CardWidget from "../cardwidget/cardwidget";
import MenuCategorias from "../menuCategoria/menuCategoria";

const navbar = () => {
  return (
    <div className="contenedorNavbar">
      <nav>
        <ul>
          <Link to="/" className="Link">
            Inicio
          </Link>
          <MenuCategorias className="menuCat" />
          <Link to="/nosotros" className="Link">
            Nosotros
          </Link>
          <Link to="/cart" className="carrito">
            <CardWidget />
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default navbar;
