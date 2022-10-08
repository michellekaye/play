import Header from '../components/header';
import styles from './layout.module.scss';

export default function Layout({ children }: any) {
  return (
		<main className={styles.main}>
			<Header />
			{children}
		</main>
  )
}