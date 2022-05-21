import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import FishListPage from './pages/fish-list-page';
import FishPage from './pages/fish-page';

export function App(): JSX.Element {
	const [showForm, setShowForm] = useState(false);

	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path='/' element={ <FishListPage showForm={ showForm } toggleForm={ toggleForm } /> } />
					<Route path='/fish/:fish-name' element={ <FishPage /> } />
				</Routes>
			</BrowserRouter>
		</div>
	);

	function toggleForm(): void {
		setShowForm((prevState) => !prevState);
	}
}
