import { Icon } from "@mui/material"
import { useContext } from "react";
import { ArticuloContext } from "../../cardcontext/cardcontext";

const CardWidget = () =>{
const {cantidadItems} = useContext(ArticuloContext)
    return (
        <div>
             <button ><Icon color="secondary">shoppingcart</Icon>{cantidadItems()} </button>
            
            </div>
       
    )
}

export default CardWidget;