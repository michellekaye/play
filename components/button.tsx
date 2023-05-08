import styles from "./button.module.scss";

export default function Button({ href, children, type, newTab, onClick }: any) {
	return (
		<a
			className={`${styles.button} ${styles[`type-${type}`]}`}
			href={href}
			target={newTab ? "_blank" : ""}
			onClick={onClick}
			rel="noopener noreferrer"
		>
			{children}
		</a>
	);
}
