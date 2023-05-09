import Link from "next/link";
import styles from "./thumbnailGrid.module.scss";

export default function ThumbnailGrid({ games, collection, heading }: any) {
	const gamesList = games;

	return (
		<div className={styles.container}>
			{heading && <h3 className={styles.heading}>{heading}</h3>}

			<div className={styles.list}>
				{gamesList.map((game: any) => {
					const collectionItem = collection.find((g: any) => {
						return g._attributes.objectid === game.id;
					});

					return (
						<Link
							key={game.id}
							className={styles.thumb}
							href={`/games/${game.id}`}
							passHref={true}
						>
							<div
								className={`${styles.img} ${`avatar-${game.id}`}`}
								style={{
									backgroundImage: `url("${game.image}")`,
								}}
							>
								{collectionItem.status._attributes.own === "1" ? (
									<span className={`${styles.own}`}>Own</span>
								) : (
									<span className={`${styles.wishlist}`}>Wishlist</span>
								)}
							</div>
						</Link>
					);
				})}
			</div>
		</div>
	);
}
