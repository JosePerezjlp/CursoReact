import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const MsjFinalizado = ({ numId }) => {
	return (
		<Stack sx={{ width: '100%' }} spacing={2}>
			<Alert severity='success'>
				Compra Finalizada con exito! su num de transacción es: {numId}
			</Alert>
		</Stack>
	);
};

export default MsjFinalizado;

