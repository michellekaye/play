import Link from 'next/link';
import styles from './thumbnailGrid.module.scss';

export default function ThumbnailGrid() {
	return (
		<div className={styles.container}>
			<div className={styles.list}>
				<Link className={styles.thumb} href="/games/7-wonders" passHref={true}>
					<div className={`${styles.img} ${styles[`img-7wonders`]}`} />
				</Link>
				<Link href="/games/awkward-guests" passHref={true}>
					<div className={`${styles.img} ${styles[`img-awkwardGuests`]}`} />
				</Link>
				<Link href="/games/barenpark" passHref={true}>
					<div className={`${styles.img} ${styles[`img-barenpark`]}`} />
				</Link>
				<Link href="/games/brewcrafters" passHref={true}>
					<div className={`${styles.img} ${styles[`img-brewcrafters`]}`} />
				</Link>
				<Link href="/games/dinosaur-world" passHref={true}>
					<div className={`${styles.img} ${styles[`img-dinosaurWorld`]}`} />
				</Link>
				<Link href="/games/dixit" passHref={true}>
					<div className={`${styles.img} ${styles[`img-dixit`]}`} />
				</Link>
				<Link href="/games/evolution-climate" passHref={true}>
					<div className={`${styles.img} ${styles[`img-evolutionClimate`]}`} />
				</Link>
				<Link href="/games/obsession" passHref={true}>
					<div className={`${styles.img} ${styles[`img-obsession`]}`} />
				</Link>
				<Link href="/games/outlive" passHref={true}>
					<div className={`${styles.img} ${styles[`img-outlive`]}`} />
				</Link>
				<Link href="/games/pan-am" passHref={true}>
					<div className={`${styles.img} ${styles[`img-panAm`]}`} />
				</Link>
				<Link href="/games/parks" passHref={true}>
					<div className={`${styles.img} ${styles[`img-parks`]}`} />
				</Link>
				<Link href="/games/santa-monica" passHref={true}>
					<div className={`${styles.img} ${styles[`img-santaMonica`]}`} />
				</Link>
				<Link href="/games/sushi-go" passHref={true}>
					<div className={`${styles.img} ${styles[`img-sushiGo`]}`} />
				</Link>
				<Link href="/games/trickerion" passHref={true}>
					<div className={`${styles.img} ${styles[`img-trickerion`]}`} />
				</Link>
				<Link href="/games/viticulture" passHref={true}>
					<div className={`${styles.img} ${styles[`img-viticulture`]}`} />
				</Link>
				<Link href="/games/wingspan" passHref={true}>
					<div className={`${styles.img} ${styles[`img-wingspan`]}`} />
				</Link>
			</div>
		</div>

  )
}