import Cta from '../../components/cta';
import Hero from "../../components/hero";
import Section from '../../components/section';

export default function Catan() {
	return (
		<>
			<Hero
				game="catan"
				title="Catan"
				subtitle="Collect and trade resources to build up the island of Catan in this modern classic."
			/>

			<Section>
				<p>
					In CATAN (formerly The Settlers of Catan), players try to be the dominant force on the island of Catan by building settlements, cities, and roads. On each turn dice are rolled to determine what resources the island produces. Players build by spending resources (sheep, wheat, wood, brick and ore) that are depicted by these resource cards; each land type, with the exception of the unproductive desert, produces a specific resource: hills produce brick, forests produce wood, mountains produce ore, fields produce wheat, and pastures produce sheep.
				</p>
			</Section>

			<Cta
				bbg="https://boardgamegeek.com/boardgame/13/catan"
				official="https://www.catan.com/"
			/>
		</>
	)
}