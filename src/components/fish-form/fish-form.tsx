import styles from './fish-form.module.css';

export function FishForm(): JSX.Element {
	return (
		<form className={ styles['fish-form'] }>
			<input className={ styles['name-input'] } type='text' placeholder='Name' />
			<input type='number' placeholder='Feeding days' />
			<input type='number' placeholder='Withholding days' />
			<input type="number" placeholder='Fed days' />
			<input type="number" placeholder='Withholded days' />
			<button className={ styles['add-fish-button'] } type='submit'>Add fish</button>
		</form>
	);
}
