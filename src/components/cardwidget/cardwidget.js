import { Icon } from "@mui/material"
import { useContext } from "react";
import { ArticuloContext } from "../../cardcontext/cardcontext"

const CardWidget = () =>{
const {cantidadItems} = useContext(ArticuloContext)
    return (
            <button ><Icon color="secondary">shoppingcart</Icon>{cantidadItems()} </button>
         )
}

export default CardWidget;