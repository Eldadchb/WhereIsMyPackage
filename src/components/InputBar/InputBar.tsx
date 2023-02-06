import TextField from '@mui/material/TextField';
import { ChangeEventHandler, KeyboardEventHandler } from 'react';
import fetchData from '../../API/api';

function InputBar() {
	let trackingNumber: string;

	const handleInput: ChangeEventHandler<
		HTMLTextAreaElement | HTMLInputElement
	> = (e) => {
		trackingNumber = e.target.value;
	};

	const handleClick: KeyboardEventHandler<HTMLInputElement> = (e) => {
		if (e.key === 'Enter') {
			fetchData(trackingNumber)
			return trackingNumber;
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
