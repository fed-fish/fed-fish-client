import { FeedingAction, Fish } from '../../../objects-and-constants';

import styles from './fish-item.module.css';

interface FishItemProps {
	fish: Fish
	feedFish: (id: string, feedingAction: FeedingAction) => Promise<void>;
}

export function FishItem(props: FishItemProps): JSX.Element {
	const {
		_id,
		name,
		feedingDays,
		withholdingDays,
		fedDays,
		withholdedDays,
		fedUp,
		withholdedUp,
		color,
	} = props.fish;

	const cardColor = {
		backgroundColor: color,
	};

	return (
		<li
			className={ styles['fish-item'] }
			style={ cardColor }
		>
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
				<button
					className={ `${styles['fish-item-button']} ${fedUp && styles['warn-button']}` }
					onClick={ handleFeedButton }
				>
					{ fedUp
							? 'Overfeed'
							: 'Feed'
					}
				</button>
				<button
					className={ `${styles['fish-item-button']} ${withholdedUp && styles['warn-button']}` }
					onClick={ handleWithholdButton }
				>
					{
						withholdedUp
							? 'Overwihhold'
							: 'Withhold'
					}
				</button>
			</div>
		</li>
	);

	async function handleFeedButton(): Promise<void> {
		props.feedFish(_id, FeedingAction.Feed);
	}

	async function handleWithholdButton(): Promise<void> {
		props.feedFish(_id, FeedingAction.Withhold);
	}
}
