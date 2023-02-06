import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface DeliveryData {
	TrackingNumber: string;
	Delivered: boolean;
	Carrier: string;
	ServiceType: string;
	PickupDate: string;
	ScheduledDeliveryDate: string;
	ScheduledDeliveryDateInDateTimeFromat: string;
	StatusCode: string;
	Status: string;
	StatusSummary: string;
	Message: string;
	DeliveredDateTime: string;
	DeliveredDateTimeInDateTimeFormat: string | null;
	SignatureName: string;
	DestinationCity: string;
	DestinationState: string;
	DestinationZip: string;
	DestinationCountry: string | null;
	TrackingDetails: [TrackingDetail];
};

interface TrackingDetail {
	EventDateTime: string;
	Event: string;
	EventAddress: string;
	State: string | null;
	City: string | null;
	Zip: string | null;
	EventDateTimeInDateTimeFormat: string;
};

function DeliveryBox(deliveryData: DeliveryData) {
	
	return (
		<Card sx={{ width: '50%' }}>
			<CardContent>
				<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
					{deliveryData.TrackingNumber}
				</Typography>
				<Typography variant="h5" component="div">
				{deliveryData.Carrier}
				</Typography>
				<Typography sx={{ mb: 1.5 }} color="text.secondary">
				{deliveryData.TrackingDetails[deliveryData.TrackingDetails.length -1].Event}
				</Typography>
				<Typography variant="body2">{deliveryData.TrackingDetails[deliveryData.TrackingDetails.length -1].EventDateTimeInDateTimeFormat}</Typography>
			</CardContent>
			<CardActions>
				<Button size="small">Delete</Button>
			</CardActions>
		</Card>
	);
}

export default DeliveryBox;

