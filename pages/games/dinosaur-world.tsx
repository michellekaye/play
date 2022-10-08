import Cta from '../../components/cta';
import Hero from "../../components/hero";
import Section from '../../components/section';

export default function DinosaurWorld() {
	return (
		<>
			<Hero
				game="dinosaurWorld"
				title="Dinosaur World"
				subtitle="Delight visitors in a park populated by homegrown dinos. Safety waivers recommended! "
			/>

			<Section>
				<p>
					The triumph of science that led to dinosaurs returning to the world once more has become public knowledge. New parks spring up regularly, often beginning operations even before everything has been finalized. There is no shortage of patrons eager to be entertained by these returned species in new and exciting ways. However, as with any form of entertainment, elements of triumph are often accompanied by elements of tragedy. This means it is of the utmost importance that you take every precaution by ensuring each visitor signs the safety waiver before enjoying the wonders of Dinosaur World!
				</p>
			</Section>

			<Cta
				bbg="https://boardgamegeek.com/boardgame/317457/dinosaur-world"
				official="https://pandasaurusgames.com/collections/shop/products/dinosaur-world"
			/>
		</>
	)
}