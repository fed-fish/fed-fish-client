import React, { useState } from 'react';

import { PostFishParams } from '../../objects-and-constants';
import styles from './fish-form.module.css';

interface FishFormProps {
	addFish: (fish: PostFishParams) => Promise<void>;
}

export function FishForm(props: FishFormProps): JSX.Element {
	const [name, setName] = useState('');
	const [feedingDays, setFeedingDays] = useState<number | undefined>(undefined);
	const [withholdingDays, setWithholdingDays] = useState<number | undefined>(undefined); 
	const [fedDays, setFedDays] = useState<number | undefined>(undefined);
	const [withholdedDays, setWithholdedDays] = useState<number | undefined>(undefined);

	return (
		<form
			className={ styles['fish-form'] }
			onSubmit={ submitFish }
		>
			<input
				className={ styles['name-input'] }
				type='text'
				placeholder='Name'
				value={ name }
				onChange={ handleNameInput }
				required
			/>
			<input
				type='number'
				placeholder='Feeding days'
				value={ feedingDays }
				onChange={ handleFeedingDaysInput }
				required
			/>
			<input
				type='number'
				placeholder='Withholding days'
				value={ withholdingDays }
				onChange={ handleWithholdingDaysInput }
				required
			/>
			<input
				type="number"
				placeholder='Fed days'
				value={ fedDays }
				onChange={ handleFedDaysInput }
				required
			/>
			<input
				type="number"
				placeholder='Withholded days'
				value={ withholdedDays }
				onChange={ handleWithholdedDaysInput }
				required
			/>

			<button
				className={ styles['add-fish-button'] }
				type='submit'
			>
				Add fish
			</button>
		</form>
	);

	function handleNameInput(event: React.ChangeEvent<HTMLInputElement>): void {
		setName(event.target.value);
	}

	function handleFeedingDaysInput(event: React.ChangeEvent<HTMLInputElement>): void {
		setFeedingDays(+event.target.value);
	}

	function handleWithholdingDaysInput(event: React.ChangeEvent<HTMLInputElement>): void {
		setWithholdingDays(+event.target.value);
	}
	
	function handleFedDaysInput(event: React.ChangeEvent<HTMLInputElement>): void {
		setFedDays(+event.target.value);
	}

	function handleWithholdedDaysInput(event: React.ChangeEvent<HTMLInputElement>): void {
		setWithholdedDays(+event.target.value);
	}

	function submitFish(event: React.ChangeEvent<HTMLFormElement>): void {
		event.preventDefault();

		if (
			name === undefined ||
			feedingDays === undefined ||
			withholdingDays === undefined ||
			fedDays === undefined ||
			withholdedDays === undefined
		) {
			return;
		}

		props.addFish({
			name,
			feedingDays,
			withholdingDays,
			fedDays,
			withholdedDays,
		});
	}
}
