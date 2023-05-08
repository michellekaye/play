import Link from "next/link";
import styles from "./thumbnailGrid.module.scss";

export default function ThumbnailGrid({ games, heading }: any) {
	const gamesList = games;

	return (
		<div className={styles.container}>
			{heading && <h3 className={styles.heading}>{heading}</h3>}

			<div className={styles.list}>
				{gamesList.map((game: any) => {
					return (
						<Link
							key={game._attributes.objectid}
							className={styles.thumb}
							href={`/games/${game._attributes.objectid}`}
							passHref={true}
						>
							<>
								<div
									className={`${styles.img} ${`avatar-${game.id}`}`}
									style={{
										backgroundImage: `url("${game.image._text}")`,
									}}
								/>
							</>
						</Link>
					);
				})}
			</div>
		</div>
	);
}
