export type Reservation = {
	spotId: string;
	licenseNumber: string;
	enterTimestamp: number;
	exitTimestamp?: number;
};

export type ReservationHistoryProps = {
	reservations: Reservation[];
};