import { useRouter } from "next/router";
import Button from "./button";

export default function Cta({ bgg, official }: any) {
	const router = useRouter();

	return (
		<>
			<Button
				onClick={() => {
					router.back();
				}}
			>
				Back
			</Button>

			<Button href={bgg} type="primary" newTab>
				Board Game Geek
			</Button>

			{official && (
				<Button href={official} newTab>
					Official Website
				</Button>
			)}
		</>
	);
}
