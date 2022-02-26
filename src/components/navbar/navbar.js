import './navbar.css'
import { Link } from 'react-router-dom';
import CardWidget from '../cardwidget/cardwidget';

const navbar = () => {
    return (   
        <div>
            <nav>
                <ul>
                    <Link to='/' className='Link'>Inicio</Link>
                    <Link to='/categoria/Celular' className='Link'>Celular</Link>
                    <Link to='/categoria/Teclado' className='Link'>Teclado</Link>
                    <Link to='/categoria/Pc' className='Link'>Pc</Link>
                    <Link to='/categoria/Parlante' className='Link'>Parlante</Link>
                    <Link to='/categoria/Mouse' className='Link'>Mouse</Link>
                    <Link to='/categoria/Smart TV' className='Link'>TV</Link>
                    <Link to='/categoria/Notebook' className='Link'>Notebook</Link>
                    <Link to='/categoria/Auricular' className='Link'>Auricular</Link>
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