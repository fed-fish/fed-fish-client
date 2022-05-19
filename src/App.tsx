import { useEffect, useState } from 'react';
import { FishForm } from './components/fish-form/fish-form';
import { FishList } from './components/fish-list/fish-list';

import { Header } from './components/header/header';
import { Fish } from './objects-and-constants';
import { fetchFish } from './transport/transport';

export function App(): JSX.Element {
	const [fish, setFish] = useState<Fish[]>([]);

	useEffect(() => {
		getFish();
	}, []);

	return (
		<div className="App">
			<Header />
			<FishForm />
			<FishList fish={ fish } />
		</div>
	);

	async function getFish(): Promise<void> {
		const fishResponse = await fetchFish();
		
		setFish(fishResponse);
	}
}
