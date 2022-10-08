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

export default function ThumbnailGrid() {
	return (
		<div className={styles.container}>
			<div className={styles.list}>
				{
					Object.keys(games).map((key) => (
						<Link
							key={key}
							className={styles.thumb}
							href={`/games/${games[key].slug}`}
							passHref={true}
						>
							<div className={`${styles.img} ${styles[`img-${key}`]}`} />
						</Link>
					))
				}
			</div>
		</div>

  )
}