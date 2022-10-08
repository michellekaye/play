import Cta from '../../components/cta';
import Hero from "../../components/hero";
import Section from '../../components/section';

export default function WingspanOceania() {
	return (
		<>
			<Hero
				game="wingspanOceania"
				title="Wingspan: Oceania"
				subtitle="Travel to Oceania to discover new birds for your wildlife preserve!"
			/>
			
			<Section>
				<p className="test">
					Wingspan: Oceania Expansion focuses on birds in Australia and New Zealand. It's designed by Elizabeth Hargrave and features birds illustrated by Natalia Rojas and Ana Maria Martinez.
				</p>
				<p>
					In this second expansion to Wingspan colorful and awe-inspiring birds from Oceania are added. The Oceania bird cards are designed to be shuffled into the bird cards from the base game, with or without other expansions.
				</p>
				<p>
					This expansion includes new player mats and a new food type, allowing players to explore different strategies in this new environment. It also includes new bonus cards and more end-of-round goals, as well as a new color of egg.
				</p>
			</Section>

			<Cta
				bbg="https://boardgamegeek.com/boardgame/300580/wingspan-oceania-expansion"
			/>
		</>
	)
}