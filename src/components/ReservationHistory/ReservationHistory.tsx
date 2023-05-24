/* Dependencies */
import React, { FC } from 'react';

// Models
import { ReservationHistoryProps } from './ReservationHistory.model';

// Components
import {
	Box,
	Grid,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Typography,
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

export const ReservationHistory: FC<ReservationHistoryProps> = ({
	reservations,
}) => {
	const getSpotIds = (): string[] => {
		const spotIds: string[] = [];
		reservations.forEach((reservation) => {
			if (!spotIds.includes(reservation.spotId)) {
				spotIds.push(reservation.spotId);
			}
		});
		return spotIds;
	};

	const renderSpotColumns = (): JSX.Element[] => {
		const spotIds = getSpotIds();

		return spotIds.map((spotId) => {
			const idReservation = reservations
				.filter((reservation) => reservation.spotId === spotId)
				.map((reservation) => reservation);

			return (
				<Grid item xs={6} md={4} lg={2} key={spotId}>
					<Typography
						marginBottom={1}
						textAlign={'center'}
						variant="h6"
						component="h3">
						Spot: {spotId}
					</Typography>
					<List dense>
						{idReservation.reverse().map((reservation, index) => (
							<ListItem
								key={`${spotId}-${index}`}
								sx={{
									justifyContent: 'center',
									paddingLeft: '8px',
								}}>
								<ListItemIcon
									sx={{
										minWidth: 'auto',
										marginRight: '8px',
									}}>
									{reservation.exitTimestamp ? (
										<CloseIcon color="error" fontSize={'small'} />
									) : (
										<CheckIcon color="success" fontSize={'small'} />
									)}
								</ListItemIcon>
								<ListItemText
									sx={{
										textAlign: 'center',
										flex: '0 1 auto',
										color: reservation.exitTimestamp ? '#890000' : '#134415',
									}}
									primary={reservation.licenseNumber}
								/>
							</ListItem>
						))}
					</List>
				</Grid>
			);
		});
	};

	return (
		<Box
			marginY={8}
			paddingY={4}
			paddingX={2}
			sx={{
				border: '1px solid black',
			}}>
			<Typography
				textAlign={'center'}
				marginBottom={8}
				variant="h5"
				component="h2">
				Reservation History
			</Typography>
			<Grid container rowSpacing={4} spacing={{ xs: 2 }}>
				{renderSpotColumns()}
			</Grid>
		</Box>
	);
};
