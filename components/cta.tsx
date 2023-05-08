import Button from "./button";

export default function Cta({ bgg, official }: any) {
	return (
		<>
			<Button href={bgg} type="primary">
				Board Game Geek
			</Button>

			{official && <Button href={official}>Official Website</Button>}
		</>
	);
}
