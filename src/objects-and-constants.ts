export interface Fish {
	name: string;
	feedingDays: number;
	withholdingDays: number;
	fedDays: number;
	withholdedDays: number;
	fedUp: boolean,
	withholdedUp: boolean;
}

export enum FeedingAction {
	Feed = 'Feed',
	Withhold = 'Withhold',
}
