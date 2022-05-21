import { Link } from 'react-router-dom';
import styles from './header.module.css';

interface HeaderProps {
	isFormShown: boolean;
	toggleForm: () => void;
}

export function Header(props: HeaderProps): JSX.Element {
	return (
		<header className={ styles.header }>
			<h1 className={ styles.logo }>
				<Link to='/' className={ styles['home-link'] }>
					Fed fish
				</Link>
			</h1>
			<button
				className={ styles['add-fish-button'] }
				onClick={ props.toggleForm }
			>
				{ props.isFormShown
					? 'Hide form'
					: 'Add fish'
				}
			</button>
		</header>
	);
}
