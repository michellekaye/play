import styles from './header.module.scss'
import Link from 'next/link';

export default function Header() {
	return (
		<div className={styles.header}>
			<h1><Link href="/">Games</Link></h1>
		</div>
	)
}