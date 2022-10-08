import Cta from '../../components/cta';
import Hero from "../../components/hero";
import Section from '../../components/section';

export default function Dixit() {
	return (
		<>
			<Hero
				game="dixit"
				title="Dixit"
				subtitle="Give the perfect clue so most (not all) players guess the right surreal image card."
			/>

			<Section>
				<p>
					2010 Spiel des Jahres Winner
				</p>
				<p>
					One player is the storyteller for the turn and looks at the images on the 6 cards in her hand. From one of these, she makes up a sentence and says it out loud (without showing the card to the other players).
					Each other player selects the card in their hands which best matches the sentence and gives the selected card to the storyteller, without showing it to the others.
				</p>
				<p>
					The storyteller shuffles her card with all the received cards. All pictures are shown face up and every player has to bet upon which picture was the storyteller's.
					If nobody or everybody finds the correct card, the storyteller scores 0, and each of the other players scores 2. Otherwise the storyteller and whoever found the correct answer score 3. Players score 1 point for every vote for their own card.
					The game ends when the deck is empty or if a player scores 30 points. In either case, the player with the most points wins the game.
				</p>
			</Section>

			<Cta
				bbg="https://boardgamegeek.com/boardgame/39856/dixit"
				official="https://www.libellud.com/ressources/dixit/?lang=en"
			/>
		</>
	)
}