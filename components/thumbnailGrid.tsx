/* eslint-disable */

import Link from 'next/link';
import styles from './thumbnailGrid.module.scss';

const games = {
	'7wonders': {
		slug: '7-wonders',
	},
	awkwardGuests: {
		slug: 'awkward-guests',
	},
	barenpark: {
		slug: 'barenpark',
	},
	brewcrafters: {
		slug: 'brewcrafters',
	},
	clueDisney: {
		slug: 'clue-disney',
	},
	dinosaurWorld: {
		slug: 'dinosaur-world',
	},
	dixit: {
		slug: 'dixit',
	},
	evolutionClimate: {
		slug: 'evolution-climate',
	},
	monopolyDisney: {
		slug: 'monopoly-disney',
	},
	obsession: {
		slug: 'obsession',
	},
	outlive: {
		slug: 'outlive',
	},
	panAm: {
		slug: 'pan-am',
	},
	parks: {
		slug: 'parks',
	},
	riskGameOfThrones: {
		slug: 'risk-game-of-thrones',
	},
	santaMonica: {
		slug: 'santa-monica',
	},
	sceneItDisney: {
		slug: 'scene-it-disney',
	},
	sceneItFriends: {
		slug: 'scene-it-friends',
	},
	sushiGo: {
		slug: 'sushi-go',
	},
	trickerion: {
		slug: 'trickerion',
	},
	viticulture: {
		slug: 'viticulture',
	},
	wingspan: {
		slug: 'wingspan',
	}
}

export default function ThumbnailGrid({ list, heading }: any) {
	let gamesList = Object.keys(games);
	if (list) { gamesList = list };

	return (
		<div className={styles.container}>
			{heading && (<h3 className={styles.heading}>{heading}</h3>)}

			<div className={styles.list}>
				{
					gamesList.map((game) => (
						<Link
							key={game}
							className={styles.thumb}
							href={`/games/${games[game as keyof typeof games].slug}`}
							passHref={true}
						>
							<div className={`${styles.img} ${styles[`img-${game}`]}`} />
						</Link>
					))
				}
			</div>
		</div>

  )
}