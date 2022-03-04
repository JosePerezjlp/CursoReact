import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import '../menuCategoria/menucategoria.css'
import { Link } from 'react-router-dom';

const MenuCategorias = () => {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const styles = {
		popUpBtn: {
			textDecoration: 'none',
			color: 'white',
			fontSize: 17,
            marginTop:2 ,
            marginLeft:3,
			textTransform: 'lowercase',
		},
		hover:{
            color:'red'
        }
	};

	return (
		<div>
			<Button
				style={styles.popUpBtn}
				id='basic-button'
				aria-controls={open ? 'basic-menu' : undefined}
				aria-haspopup='true'
				aria-expanded={open ? 'true' : undefined}
				onClick={handleClick}
			>
				Categorias
			</Button>
			<Menu
				id='basic-menu'
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					'Sans-serif': 'basic-button',
				}}
			>
				<MenuItem>
                <Link to='/categoria/Celular' className='LinkCategoria'>Celular</Link>
				</MenuItem>
				<MenuItem>
					
                <Link to='/categoria/Teclado'className='LinkCategoria' >Teclado</Link>
				</MenuItem>
				<MenuItem>
                <Link to='/categoria/Pc' className='LinkCategoria'>Pc</Link>
				</MenuItem>
				<MenuItem>
                <Link to='/categoria/Parlante' className='LinkCategoria'>Parlante</Link>
				</MenuItem>
                <MenuItem>
                <Link to='/categoria/Mouse' className='LinkCategoria'>Mouse</Link>
				</MenuItem>
                <MenuItem>
                <Link to='/categoria/Smart TV' className='LinkCategoria'>TV</Link>
				</MenuItem>
                <MenuItem>
                <Link to='/categoria/Notebook' className='LinkCategoria' >Notebook</Link>
				</MenuItem>
                <MenuItem>
                <Link to='/categoria/Auricular' className='LinkCategoria'>Auricular</Link>
				</MenuItem>
			</Menu>
		</div>
	);
};

export default MenuCategorias;