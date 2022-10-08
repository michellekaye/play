import Cta from '../../components/cta';
import Hero from "../../components/hero";
import Section from '../../components/section';

export default function Clue() {
	return (
		<>
			<Hero
				game="clue"
				title="Clue"
				subtitle="Catch the culprit of a crime by identifying who did it, with what, and where."
			/>

			<Section>
				<p>
					The classic detective game! In Clue, players move from room to room in a mansion to solve the mystery of: who done it, with what, and where? Players are dealt character, weapon, and location cards after the top card from each card type is secretly placed in the confidential file in the middle of the board. Players must move to a room and then make a suggestion against a character saying they did it in that room with a specific weapon. The player to the left must show one of any cards mentioned if in that player's hand. Through deductive reasoning each player must figure out which character, weapon, and location are in the secret file. To do this, each player must uncover what cards are in other players hands by making more and more suggestions. Once a player knows what cards the other players are holding, they will know what cards are in the secret file, and then make an accusation. If correct, the player wins, but if incorrect, the player must return the cards to the file without revealing them and may no longer make suggestions or accusations. A great game for those who enjoy reasoning and thinking things out.
				</p>
			</Section>

			<Cta
				bbg="https://boardgamegeek.com/boardgame/1294/clue"
			/>
		</>
	)
}