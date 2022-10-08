import styles from './hero.module.scss';

export default function Hero(
	{ game, title, subtitle }: { game: string, title?: string, subtitle?: string }
) {
	return (
		<>
			<div className={`${styles.container} ${`bg-${game}`}`} />
			<div className={styles.overlay} />

			{
				title && (
					<div className={styles.titleWrapper}>
						<div className={`${styles.avatar} ${`avatar-${game}`}`} />
						<div className={styles.textWrapper}>
							<h1 className={styles.title}>{title}</h1>
							<p className={styles.subtitle}>{subtitle}</p>
						</div>
					</div>
				)
			}
		</>

  )
}