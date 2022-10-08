import Cta from '../../components/cta';
import Hero from "../../components/hero";
import Section from '../../components/section';

export default function SpyWeb() {
	return (
		<>
			<Hero
				game="spyWeb"
				title="Spy Web"
				subtitle="Espionage game of clue giving."
			/>

			<Section>
				<p>
					Espionage game of clue giving , eavesdropping and finger-pointing. Each player has a board with nine locations and chooses where his spies will reside. Winner is the one who discovers the crime boss and his location.
				</p>
			</Section>

			<Cta
				bbg="https://boardgamegeek.com/boardgame/4141/spy-web"
			/>
		</>
	)
}