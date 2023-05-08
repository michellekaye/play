import { useRouter } from "next/router";
import Button from "./button";
import styles from "./refresh.module.scss";

export default function Refresh({}: any) {
	const router = useRouter();

	return (
		<div className={`${styles.refresh}`}>
			<p>
				Sorry, the Board Game Geek API is currently in beta and sometimes the
				data doesn't get fetched properly. Please try refreshing the page.
			</p>
			<Button onClick={() => router.reload()} primary>
				Refresh
			</Button>
		</div>
	);
}
