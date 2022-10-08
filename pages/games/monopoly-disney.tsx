import Cta from '../../components/cta';
import Hero from "../../components/hero";
import Section from '../../components/section';

export default function MonopolyDisney() {
	return (
		<>
			<Hero
				game="monopolyDisney"
				title="Monopoly: Disney"
				subtitle="Famous rides and attractions are bought, sold, and traded by players. "
			/>

			<Section>
				<p>
					This version of Monopoly is a boxed Disney Theme Park Edition. They are only sold at Disney resorts and theme parks. The famous rides and attractions are bought, sold, and traded by the players. Main Street USA buildings act as houses while Disney castles sub for hotels. Eight collectible player tokens modeled after various ride modes of transportation are also included.
				</p>
			</Section>

			<Cta
				bbg="https://boardgamegeek.com/boardgame/21124/monopoly-disney-theme-park"
			/>
		</>
	)
}