export interface Fish {
	_id: string;
	name: string;
	feedingDays: number;
	withholdingDays: number;
	fedDays: number;
	withholdedDays: number;
	fedUp: boolean,
	withholdedUp: boolean;
	color: string;
}

export interface PostFishParams {
	name: string;
	feedingDays: number;
	withholdingDays: number;
	fedDays: number;
	withholdedDays: number;
	color?: string;
}

export enum FeedingAction {
	Feed = 'Feed',
	Withhold = 'Withhold',
}
