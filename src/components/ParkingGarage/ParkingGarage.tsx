import React, { useState } from 'react';

// Models
import { ParkingSpotModel } from '../ParkingSpot/ParkingSpot.model';
import { Reservation } from '../ReservationHistory/ReservationHistory.model';

// Components
import { ParkingLot } from '@Components/ParkingLot/ParkingLot';
import { ReservationHistory } from '../ReservationHistory/ReservationHistory';
import { Container, Typography } from '@mui/material';
import { useSnackbar } from 'notistack';

const initialParkingSpots: ParkingSpotModel[] = [
	{ spotId: '100', state: 'available' },
	{ spotId: '101', state: 'available' },
	{ spotId: '102', state: 'available' },
	{ spotId: '103', state: 'available' },
	{ spotId: '104', state: 'available' },
	{ spotId: '105', state: 'available' },
	{ spotId: '106', state: 'available' },
	{ spotId: '107', state: 'available' },
	{ spotId: '108', state: 'available' },
	{ spotId: '109', state: 'available' },
];

const ParkingGarage: React.FC = () => {
	const [spots, setSpots] = useState<ParkingSpotModel[]>(initialParkingSpots);
	const [reservations, setReservations] = useState<Reservation[]>([]);

	const { enqueueSnackbar } = useSnackbar();

	const handleEnterGarage = () => {
		const availableSpot = spots.find((spot) => spot.state === 'available');

		if (availableSpot) {
			const updatedSpots = spots.map((spot) =>
				spot.spotId === availableSpot.spotId
					? { ...spot, state: 'in-use' }
					: spot
			);

			const reservation: Reservation = {
				spotId: availableSpot.spotId,
				licenseNumber: generateRandomLicenseNumber(),
				enterTimestamp: Date.now(),
			};

			setSpots(updatedSpots as ParkingSpotModel[]);
			setReservations([...reservations, reservation]);
		} else {
			enqueueSnackbar('The parking is full', {
				variant: 'error',
				preventDuplicate: false,
				anchorOrigin: { horizontal: 'right', vertical: 'top' },
			});
		}
	};

	const handleExit = (spotId: string) => {
		const updatedSpots = spots.map((spot) =>
			spot.spotId === spotId ? { ...spot, state: 'available' } : spot
		);

		const updatedReservations = reservations.map((reservation) => {
			if (reservation.spotId === spotId && !reservation.exitTimestamp) {
				return { ...reservation, exitTimestamp: Date.now() };
			}
			return reservation;
		});

		setSpots(updatedSpots as ParkingSpotModel[]);
		setReservations(updatedReservations);
	};

	const generateRandomLicenseNumber = (): string => {
		// Generate a random license number
		return Math.floor(Math.random() * 1000000).toString();
	};

	return (
		<Container maxWidth={'xl'}>
			<Typography
				marginBottom={8}
				marginTop={5}
				textAlign={'center'}
				variant="h3"
				component="h1">
				Parking Garage
			</Typography>
			<ParkingLot
				spots={spots}
				onEnterGarage={handleEnterGarage}
				onExitSpot={handleExit}
			/>
			<ReservationHistory reservations={reservations} />
		</Container>
	);
};

export default ParkingGarage;
