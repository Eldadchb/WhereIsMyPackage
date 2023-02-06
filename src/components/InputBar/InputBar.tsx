import TextField from '@mui/material/TextField';
import { ChangeEventHandler, KeyboardEventHandler } from 'react';

function InputBar() {
	let trackingNumber: string | null = null;

	const handleInput: ChangeEventHandler<
		HTMLTextAreaElement | HTMLInputElement
	> = (e) => {
		trackingNumber = e.target.value;
	};

	const handleClick: KeyboardEventHandler<HTMLInputElement> = (e) => {
		if (e.key === 'Enter') {
			alert(trackingNumber);
		}
	};

	return (
		<TextField
			id="filled-basic"
			label="Tracking Number"
			sx={{ width: '90%' }}
			variant="outlined"
			onChange={handleInput}
			onKeyPress={handleClick}
		/>
	);
}

export default InputBar;
