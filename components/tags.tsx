import styles from "./tags.module.scss";

export default function Tags({ tags }: any) {
	return (
		<div className={styles.tags}>
			{tags.map((tag: string) => (
				<span key={tag} className={styles.tag}>
					{tag}
				</span>
			))}
		</div>
	);
}
