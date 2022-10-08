import Cta from '../../components/cta';
import Hero from "../../components/hero";
import Section from '../../components/section';

export default function RiskGameOfThrones() {
	return (
		<>
			<Hero
				game="riskGameOfThrones"
				title="Risk: Game Of Thrones"
				subtitle="War and chaos have descended upon the realms of Men."
			/>

			<Section>
				<p>
					Risk: Game of Thrones, based on the epic HBO series, features two ways to play, including factions of noble Houses vying for control of Westeros during the time of The War of the Five Kings, as well as Daenerys Targaryen's rise to power in Essos.
				</p>
				<p>
					War and chaos have descended upon the realms of Men. In Westeros, the death of Robert Baratheon has created a power vacuum with rival Houses competing for control of The Iron Throne. Meanwhile, in Essos, Daenerys Targaryen is building an army to contest the rule of the Ghiscari slavers, before returning to reclaim The Iron Throne. There are 3 different ways to play RISK Game of Thrones:
				</p>
			</Section>

			<Cta
				bbg="https://boardgamegeek.com/boardgame/179719/risk-game-thrones"
				official="https://theop.games/products/risk-game-of-thrones"
			/>
		</>
	)
}