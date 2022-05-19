import styles from './header.module.css';

export function Header(): JSX.Element {
	return (
		<header className={ styles.header }>
			<h1 className={ styles.logo }>
				Fed fish
			</h1>
			<button className={ styles['add-fish-btn'] }>Add fish</button>
		</header>
	);
}
