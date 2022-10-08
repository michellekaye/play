import Cta from '../../components/cta';
import Hero from "../../components/hero";
import Section from '../../components/section';

export default function Battleship() {
	return (
		<>
			<Hero
				game="battleship"
				title="Battleship"
				subtitle="Detect the enemy fleet and sink it."
			/>

			<Section>
				<p>
					Battleship was originally a pencil-and-paper public domain game known by different names, but Milton Bradley made it into the well known board game in 1967. The pencil and paper grids were changed to plastic grids with holes that could hold plastic pegs used to record the guesses.
				</p>
				<p>
					Each player deploys his ships (of lengths varying from 2 to 5 squares) secretly on a square grid. Then each player shoots at the other's grid by calling a location. The defender responds by "Hit!" or "Miss!". You try to deduce where the enemy ships are and sink them. First to do so wins.
				</p>
			</Section>

			<Cta
				bbg="https://boardgamegeek.com/boardgame/2425/battleship"
			/>
		</>
	)
}