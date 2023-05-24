/* Dependencies */
import React, { FC } from 'react';

// Models
import { ParkingLotProps } from './ParkingLot.model';

// Components
import { Button, Grid } from '@mui/material';
import { ParkingSpot } from '@Components/ParkingSpot/ParkingSpot';

export const ParkingLot: FC<ParkingLotProps> = ({
	spots,
	onEnterGarage,
	onExitSpot,
}) => {
	return (
		<Grid
			container
			alignItems="center"
			justifyContent="space-between"
			rowSpacing={8}
			spacing={{ xs: 2, md: 3 }}>
			<Grid item xs={12} lg={2} display={'flex'} justifyContent={'center'}>
				<Button size="large" variant="contained" onClick={onEnterGarage}>
					Enter Garage
				</Button>
			</Grid>
			<Grid item xs={12} lg={10}>
				<Grid
					container
					rowSpacing={{ xs: 6, md: 4 }}
					spacing={{ xs: 2, md: 3 }}>
					{spots.map((spot, index) => (
						<Grid item xs={4} md={2} xl={1} key={index}>
							<ParkingSpot
								key={spot.spotId}
								spot={spot}
								onExit={() => onExitSpot(spot.spotId)}
							/>
						</Grid>
					))}
				</Grid>
			</Grid>
		</Grid>
	);
};
