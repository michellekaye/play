import Cta from '../../components/cta';
import Hero from "../../components/hero";
import Section from '../../components/section';

export default function Outlive() {
	return (
		<>
			<Hero
				game="outlive"
				title="Outlive"
				subtitle="Place your apocalypse team to secure items, events, & resources then build a base."
			/>

			<Section>
				<p>
					Outlive is a management/survival game in a post-apocalyptic universe in which nature has overcome its rights amongst the world of Men. In Outlive, players have six days (turns) to send heroes gathering resources during the day, while avoiding threats from other players and reinforce their settlements during the night, trying to recruit new survivors and adapt to the new world. The specifics: movements and resource gathering are compelled by your hero's strength.
				</p>
				<p>
					You play six rounds (six days) that are divided between the day phase and the night phase. During the day phase, you move your four heroes of different strength on the board to collect resources with a mechanical movement innovative and interactive.
				</p>
				<p>
					During the night phase, you manage your shelter, feed your survivors and recruit new ones, organize your survival, and improve your rooms and objects.
				</p>
				<p>
					Only one clan can outlive this devastated world!
				</p>
			</Section>

			<Cta
				bbg="https://boardgamegeek.com/boardgame/191051/outlive"
				official="https://www.laboitedejeu.fr/en/outlive/"
			/>
		</>
	)
}