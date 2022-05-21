import { useEffect, useState } from 'react';

import { FishForm } from '../components/fish-form/fish-form';
import { FishList } from '../components/fish-list/fish-list';
import { Header } from '../components/header/header';
import {
	FeedingAction,
	Fish,
	PostFishParams,
} from '../objects-and-constants';

import {
	fetchFish,
	postFish,
	updateFish,
} from '../transport/transport';

interface FishListPageProps {
	showForm: boolean;
	toggleForm: () => void;

}

export default function FishListPage(props: FishListPageProps): JSX.Element {
	const {
		showForm,
		toggleForm,
	} = props;

	const [fish, setFish] = useState<Fish[]>([]);

	useEffect(() => {
		getFish();
	}, []);

	return (
		<>
			<Header isFormShown={ showForm } toggleForm={ toggleForm } />
			{ showForm && <FishForm addFish={ addFish } /> }
			<FishList fish={ fish } feedFish={ feedFish } />
		</>
	);

	async function getFish(): Promise<void> {
		const fishResponse = await fetchFish();
		
		setFish(fishResponse);
	}

	async function addFish(fish: PostFishParams): Promise<void> {
		const newFish = await postFish(fish);

		setFish((prevState) => {
			return [...prevState, newFish];
		});
	}

	async function feedFish(id: string, feedingAction: FeedingAction): Promise<void> {
		await updateFish(id, feedingAction);

		await getFish();
	}
}
