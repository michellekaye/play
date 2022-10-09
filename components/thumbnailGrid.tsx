import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './thumbnailGrid.module.scss';

export default function ThumbnailGrid({ games, heading }: any) {
	const gamesList = games;

	return (
		<div className={styles.container}>
			{heading && (<h3 className={styles.heading}>{heading}</h3>)}

			<div className={styles.list}>
				{
					gamesList.map((game: any) => {
						return (
							<Link
								key={game.id}
								className={styles.thumb}
								href={`/games/${game.id}`}
								passHref={true}
							>
								<div className={`${styles.img} ${`avatar-${game.id}`}`} />
							</Link>
						)
					})
				}
			</div>
		</div>

  )
}