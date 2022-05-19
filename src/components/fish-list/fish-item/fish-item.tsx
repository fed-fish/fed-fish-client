import { Fish } from '../../../objects-and-constants';

import styles from './fish-item.module.css';

interface FishItemProps {
	fish: Fish
}

export function FishItem(props: FishItemProps): JSX.Element {
	const {
		name,
		feedingDays,
		withholdingDays,
		fedDays,
		withholdedDays,
		fedUp,
		withholdedUp,
	} = props.fish;

	return (
		<li className={ styles['fish-item'] }>
			<div className={ styles['fish-item-info'] }>
				<h4>{ name }</h4>

				{ fedUp &&
					<p className={ styles.warning }>
						<strong>Fed up</strong>
					</p>
				}
				{ withholdedUp &&
					<p className={ styles.warning }>
						<strong>Withholded up</strong>
					</p>
				}

				<div className={ styles['current-status'] }>
					<p>Fed days: { fedDays }</p>
					<p>Withholded days: { withholdedDays }</p>
				</div>

				<div className={ styles['ration-info'] }>
					<p>Feeding days: { feedingDays }</p>
					<p>Withholding days: { withholdingDays }</p>
				</div>
			</div>
			<div className={ styles['fish-item-controls'] }>
				<button className={ styles['fish-item-button'] }>
					{ fedUp
							? 'Feed???'
							: 'Feed'
					}
				</button>
				<button className={ styles['fish-item-button'] }>
					{
						withholdedUp
							? 'Wihhold???'
							: 'Withhold'
					}
				</button>
			</div>
		</li>
	);
}
