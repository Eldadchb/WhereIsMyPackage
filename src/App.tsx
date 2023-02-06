import './App.css';
import MainAppBar from './components/AppBar/AppBar';
import InputBar from './components/InputBar/InputBar';
import DeliveryBox from './components/Delivery/DeliveryBox';

function App() {
	return (
		<>
			<div className="app-bar">
				<MainAppBar />
			</div>
			<div className="input-section">
				<InputBar />
			</div>
			<div className="delivery-section"></div>
		</>
	);
}

export default App;

const data = {
	TrackingNumber: '1ZEX03646804124970',
	Delivered: false,
	Carrier: 'UPS',
	ServiceType: 'UPS Standard',
	PickupDate: '20230206',
	ScheduledDeliveryDate: '2023-02-08',
	ScheduledDeliveryDateInDateTimeFromat: '2023-02-08T00:00:00',
	StatusCode: 'I',
	Status: 'Origin Scan',
	StatusSummary: 'Origin Scan',
	Message: 'On Time',
	DeliveredDateTime: '',
	DeliveredDateTimeInDateTimeFormat: null,
	SignatureName: '',
	DestinationCity: 'BERLIN',
	DestinationState: '',
	DestinationZip: '10713',
	DestinationCountry: null,
	TrackingDetails: [
		{
			EventDateTime: '20230206 185348',
			Event: 'Origin Scan',
			EventAddress: 'Corbeil Essonnes  ',
			State: null,
			City: 'Corbeil Essonnes',
			Zip: null,
			EventDateTimeInDateTimeFormat: '2023-02-06T18:53:48',
		},
		{
			EventDateTime: '20230206 154736',
			Event: 'Shipper created a label, UPS has not received the package yet.',
			EventAddress: '  ',
			State: null,
			City: null,
			Zip: null,
			EventDateTimeInDateTimeFormat: '2023-02-06T15:47:36',
		},
	],
};
