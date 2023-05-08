import styles from "./hero.module.scss";

export default function Hero({
	game,
	title,
	subtitle,
	image,
}: {
	game: string;
	title?: string;
	subtitle?: string;
	image?: string;
}) {
	return (
		<>
			<div
				className={`${styles.container} ${`bg-${game}`}`}
				style={{ backgroundImage: image ? `url("${image}")` : "" }}
			/>
			<div className={styles.overlay} />

			{title && (
				<div className={styles.titleWrapper}>
					<div
						className={`${styles.avatar} ${`avatar-${game}`}`}
						style={{ backgroundImage: image ? `url("${image}")` : "" }}
					/>
					<div className={styles.textWrapper}>
						<h1 className={styles.title}>{title}</h1>
						<p className={styles.subtitle}>{subtitle}</p>
					</div>
				</div>
			)}
		</>
	);
}
