import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './thumbnailGrid.module.scss';

export default function ThumbnailGrid({ list, heading }: any) {
	const [games, setGames] = useState("");

	useEffect(() => {
    const url = "/api/games";
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
				setGames(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
	}, []);

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
							<div className={`${styles.img} ${`avatar-${game}`}`} />
						</Link>
					))
				}
			</div>
		</div>

  )
}