import Cta from '../../components/cta';
import Hero from "../../components/hero";
import Section from '../../components/section';

export default function SevenWonders() {
	return (
		<>
			<Hero
				game="7wonders"
				title="7 Wonders"
				subtitle="Draft cards to develop your ancient civilization and build its Wonder of the World."
			/>

			<Section>
				<p>
					You are the leader of one of the 7 great cities of the Ancient World. Gather resources, develop commercial routes, and affirm your military supremacy. Build your city and erect an architectural wonder which will transcend future times.
				</p>
				<p>
					7 Wonders lasts three ages. In each age, players receive seven cards from a particular deck, choose one of those cards, then pass the remainder to an adjacent player. Players reveal their cards simultaneously, paying resources if needed or collecting resources or interacting with other players in various ways. (Players have individual boards with special powers on which to organize their cards, and the boards are double-sided). Each player then chooses another card from the deck they were passed, and the process repeats until players have six cards in play from that age. After three ages, the game ends.
				</p>
			</Section>

			<Cta
				bbg="https://boardgamegeek.com/boardgame/68448/7-wonders"
				official="https://www.rprod.com/index.php/en/games/7-wonders"
			/>
		</>
	)
}