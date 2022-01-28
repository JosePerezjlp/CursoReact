import './navbar.css'
import CardWidget from './cardwidget';

const navbar = () => {
    return (   
        <div>
            <nav>
                <ul>
                    
                    <li>Inicio</li>
                    <li>Productos</li>
                    <li>Nosotros</li>
                    <li>Contacto</li>
                    <li className='carrito'>
                    <CardWidget/>
                    </li>
                </ul>
                
            <hr></hr>    
            </nav>

        </div>
    );
}

export default navbar;