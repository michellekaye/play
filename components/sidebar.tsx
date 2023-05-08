import styles from "./sidebar.module.scss";

export default function Sidebar({ children }: any) {
	return (
		<div className={styles.sidebar}>
			<div className={styles.wrapper}>{children}</div>
		</div>
	);
}
