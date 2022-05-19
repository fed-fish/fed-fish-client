import React, { useState } from 'react';
import styles from './fish-form.module.css';

export function FishForm(): JSX.Element {
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
			/>
			<input
				type='number'
				placeholder='Feeding days'
				value={ feedingDays }
				onChange={ handleFeedingDaysInput }
			/>
			<input
				type='number'
				placeholder='Withholding days'
				value={ withholdingDays }
				onChange={ handleWithholdingDaysInput }
			/>
			<input
				type="number"
				placeholder='Fed days'
				value={ fedDays }
				onChange={ handleFedDaysInput }
			/>
			<input
				type="number"
				placeholder='Withholded days'
				value={ withholdedDays }
				onChange={ handleWithholdedDaysInput }
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
	}
}
