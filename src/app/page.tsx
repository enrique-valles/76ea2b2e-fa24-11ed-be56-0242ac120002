'use client';
// Components
import ParkingGarage from '@/components/ParkingGarage/ParkingGarage';
import { SnackbarProvider } from 'notistack';

export default function Home() {
	return (
		<SnackbarProvider>
			<ParkingGarage />
		</SnackbarProvider>
	);
}
