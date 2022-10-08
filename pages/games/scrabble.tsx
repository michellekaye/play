import Cta from '../../components/cta';
import Hero from "../../components/hero";
import Section from '../../components/section';

export default function Scrabble() {
	return (
		<>
			<Hero
				game="scrabble"
				title="Scrabble"
				subtitle="Carefully place your lettered tiles to make high-scoring words."
			/>

			<Section>
				<p>
					FIn this classic word game, players use their seven drawn letter-tiles to form words on the gameboard. Each word laid out earns points based on the commonality of the letters used, with certain board spaces giving bonuses. But a word can only be played if it uses at least one already-played tile or adds to an already-played word. This leads to slightly tactical play, as potential words are rejected because they would give an opponent too much access to the better bonus spaces.
				</p>
			</Section>

			<Cta
				bbg="https://boardgamegeek.com/image/404651/scrabble"
				official="https://scrabble.hasbro.com/en-us"
			/>
		</>
	)
}