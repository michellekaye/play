import styles from "./footer.module.scss";
import Link from "next/link";

const Footer = (props: any) => {
	return (
		<footer className={styles.footer}>
			<p>
				This site is built using NextJS, AWS S3, CI/CD, and the BoardGameGeek
				API.
			</p>
			<p>
				<Link href="http://michelle-kaye.com" passHref={true}>
					<a target="_blank">a michelle-kaye.com 💖 🌈 production</a>
				</Link>
			</p>
		</footer>
	);
};

export default Footer;
