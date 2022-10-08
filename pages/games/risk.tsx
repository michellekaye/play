import Cta from '../../components/cta';
import Hero from "../../components/hero";
import Section from '../../components/section';

export default function Risk() {
	return (
		<>
			<Hero
				game="risk"
				title="Risk"
				subtitle="Will you conquer the world in this multi-player push-your-luck wargame?"
			/>

			<Section>
				<p>
					Possibly the most popular, mass market war game. The goal is conquest of the world.
				</p>
				<p>
					Each player's turn consists of:
					gaining reinforcements through number of territories held, control of every territory on each continent, and turning sets of bonus cards;
					Attacking other players using a simple combat rule of comparing the highest dice rolled for each side. Players may attack as often as desired. If one enemy territory is successfully taken, the player is awarded with a bonus card;
					Moving a group of armies to another adjacent territory.
				</p>

			</Section>

			<Cta
				bbg="https://boardgamegeek.com/boardgame/181/risk"
			/>
		</>
	)
}