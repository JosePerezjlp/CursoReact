import { useContext } from "react";
import { ArticuloContext } from "../../cardcontext/cardcontext"

const CardWidget = () =>{
const {cantidadItems} = useContext(ArticuloContext)
    return (
            <button ><i className="fa-solid fa-cart-shopping"></i>{cantidadItems()} </button>
         )
}

export default CardWidget;