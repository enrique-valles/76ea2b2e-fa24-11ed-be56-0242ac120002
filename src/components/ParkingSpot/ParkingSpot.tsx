/* Dependencies */
import React, { FC } from 'react';
import styled from 'styled-components';

// Models
import { ParkingSpotProps, ParkingSpotModel } from './ParkingSpot.model';
import { Box, Button } from '@mui/material';

const Spot = styled.div<{ state: ParkingSpotModel['state'] }>`
	width: 40px;
	height: 40px;
	border-radius: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 16px;
	font-size: 14px;
	background-color: ${(props) =>
		props.state === 'available' ? '#4caf50' : '#f44336'};
`;

export const ParkingSpot: FC<ParkingSpotProps> = ({
	spot: { state, spotId },
	onExit,
}) => {
	return (
		<Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
			<Spot state={state}>{spotId}</Spot>
			<Button
				variant="outlined"
				disabled={state === 'available'}
				onClick={onExit}>
				Exit
			</Button>
		</Box>
	);
};
