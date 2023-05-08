import Header from "../components/header";
import Footer from "../components/footer";
import styles from "./layout.module.scss";

export default function Layout({ children }: any) {
	return (
		<main className={styles.main}>
			<Header />
			{children}
			<Footer />
		</main>
	);
}
