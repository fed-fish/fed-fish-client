import { useEffect, useState } from 'react';
import { FishForm } from './components/fish-form/fish-form';
import { FishList } from './components/fish-list/fish-list';

import { Header } from './components/header/header';

import {
	FeedingAction,
	Fish,
	PostFishParams,
} from './objects-and-constants';

import {
	fetchFish,
	postFish,
	updateFish,
} from './transport/transport';

export function App(): JSX.Element {
	const [fish, setFish] = useState<Fish[]>([]);
	const [showForm, setShowForm] = useState(false);

	useEffect(() => {
		getFish();
	}, []);

	return (
		<div className="App">
			<Header isFormShown={ showForm } toggleForm={ toggleForm } />
			{ showForm && <FishForm addFish={ addFish } /> }
			<FishList fish={ fish } feedFish={ feedFish } />
		</div>
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

	function toggleForm(): void {
		setShowForm((prevState) => !prevState);
	}
}
