import { ParkingSpotModel } from "@Components/ParkingSpot/ParkingSpot.model";

export interface ParkingLotProps {
	spots: ParkingSpotModel[];
	onEnterGarage: () => void;
	onExitSpot: (spotId: string) => void;
}