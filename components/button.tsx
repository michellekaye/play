import styles from "./button.module.scss";

export default function Button({ href, children, type }: any) {
	return (
		<a
			className={`${styles.button} ${styles[`type-${type}`]}`}
			href={href}
			target="_blank"
			rel="noopener noreferrer"
		>
			{children}
		</a>
	);
}
