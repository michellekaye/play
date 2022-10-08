import Cta from '../../components/cta';
import Hero from "../../components/hero";
import Section from '../../components/section';

export default function Viticulture() {
	return (
		<>
			<Hero
				game="viticulture"
				title="Viticulture"
				subtitle="Create the most prosperous winery in Italy from the Tuscan vineyard you've inherited."
			/>

			<Section>
				<p>
					In Viticulture, the players find themselves in the roles of people in rustic, pre-modern Tuscany who have inherited meager vineyards. They have a few plots of land, an old crushpad, a tiny cellar, and three workers. They each have a dream of being the first to call their winery a true success.
				</p>

				<p>
					Viticulture Essential Edition includes the base game of Viticulture and a few of the most popular modules from the original Tuscany expansion, including Mamas & Papas, Fields (previously known as Properties), expanded and revised Visitors, and Automa cards for a solo variant, along with a few minor rule changes.
				</p>
			</Section>

			<Cta
				bbg="https://boardgamegeek.com/boardgame/183394/viticulture-essential-edition"
				official="https://stonemaiergames.com/games/viticulture/essential-edition/"
			/>
		</>
	)
}