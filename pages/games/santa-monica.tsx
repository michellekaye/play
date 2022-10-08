import Cta from '../../components/cta';
import Hero from "../../components/hero";
import Section from '../../components/section';

export default function SantaMonica() {
	return (
		<>
			<Hero
				game="santaMonica"
				title="Santa Monica"
				subtitle="Build a beach community in Southern California with tourists, locals, and fun shops."
			/>

			<Section>
				<p>
					In Santa Monica, you are trying to create the most appealing neighborhood in southern California. Will you choose to create a calm, quiet beach focused on nature, a bustling beach full of tourists, or something in-between to appeal to the locals?
				</p>
				<p>
					Each turn, you draft a feature card from the display to build up either your beach or your street. These features work together to score you victory points. The player with the most points wins!
				</p>
			</Section>

			<Cta
				bbg="https://boardgamegeek.com/boardgame/298065/santa-monica"
				official="https://www.alderac.com/santa-monica/"
			/>
		</>
	)
}