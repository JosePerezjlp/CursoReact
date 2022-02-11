import './navbar.css'
import { Link } from 'react-router-dom';
import CardWidget from '../cardwidget/cardwidget';

const navbar = () => {
    return (   
        <div>
            <nav>
                <ul className='itemList'>
                    
                    <Link to='/' className='Link'>Inicio</Link>
                    <Link to='/nosotros' className='Link'>Nosotros</Link>
                    <Link to='/contacto' className='Link'>Contacto</Link>
                    <Link to='/cart' className='carrito'>
                    <CardWidget/>
                    </Link>
                </ul>
                
            <hr></hr>    
            </nav>

        </div>
    );
}

export default navbar;