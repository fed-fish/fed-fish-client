import { Fish } from '../../objects-and-constants';
import { FishItem } from './fish-item/fish-item';
import styles from './fish-list.module.css';

interface FishListProps {
	fish: Fish[];
}

export function FishList(props: FishListProps): JSX.Element {
	return (
		<ul className={ styles['fish-list'] }>
			{ makeFishListItems() }
		</ul>
	);

	function makeFishListItems(): JSX.Element[] {
		return props.fish.map((fish) => {
			return <FishItem fish={ fish }/>;
		});
	}
}
