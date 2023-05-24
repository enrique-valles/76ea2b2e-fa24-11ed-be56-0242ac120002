export interface ParkingSpotModel {
	spotId: string;
	state: 'available' | 'in-use';
}

export interface ParkingSpotProps {
	spot: ParkingSpotModel
	onExit: () => void;
}