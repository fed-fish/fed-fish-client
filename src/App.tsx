import { useEffect, useState } from 'react';
import { FishForm } from './components/fish-form/fish-form';
import { FishList } from './components/fish-list/fish-list';

import { Header } from './components/header/header';
import { Fish, PostFishParams } from './objects-and-constants';
import { fetchFish, postFish } from './transport/transport';

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
			<FishList fish={ fish } />
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

	function toggleForm(): void {
		setShowForm((prevState) => !prevState);
	}
}
