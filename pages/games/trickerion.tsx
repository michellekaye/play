import Cta from '../../components/cta';
import Hero from "../../components/hero";
import Section from '../../components/section';

export default function Trickerion() {
	return (
		<>
			<Hero
				game="trickerion"
				title="Trickerion"
				subtitle="Magicians perform dazzling tricks for money and fame in a Victorian steampunk world."
			/>

			<Section>
				<p>
					Trickerion is a competitive Euro-style strategy game set in a fictional world inspired by the late 19th century urban life and culture, spiced with a pinch of supernatural.
				</p>
				<p>
					Players take on the roles of rival stage illusionists, each with their own strengths and characteristics. They are striving for fortune and fame in a competition hosted by a legendary magician, looking for a successor worthy of the mighty Trickerion Stone, which is fabled to grant supernatural power to its owner.
				</p>
				<p>
					Using worker placement and simultaneous action selection mechanisms, the Illusionists and their teams of helpers — the Engineer, the Assistant, the Manager, and a handful of Apprentices – obtain blueprints and components for increasingly complex magic tricks, expand the team and set up performances by visiting the Downtown, Dark Alley, Market Row and Theater locations on the main game board depicting a late 19th century cityscape.
				</p>
			</Section>

			<Cta
				bbg="https://boardgamegeek.com/boardgame/163068/trickerion-legends-illusion"
				official="http://www.trickerionboardgame.com/"
			/>
		</>
	)
}