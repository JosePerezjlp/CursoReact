import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const AlertDetail = () => {
	return (
		<Stack sx={{ width: '100%' }} spacing={2}>
			<Alert severity='success'>
				Se agrego el producto al carrito!!
			</Alert>
		</Stack>
	);
};

export default AlertDetail;
