import Cta from '../../components/cta';
import Hero from "../../components/hero";
import Section from '../../components/section';

export default function Brewcrafters() {
	return (
		<>
			<Hero
				game="brewcrafters"
				title="Brew Crafters"
				subtitle="Craft beers in the hopes of being the best brewery in the city."
			/>

			<Section>
				<p>
					It's a time of regrowth in the old urban center, and the hippest and best beer crafters have gathered both hops and hopes in building the best brewery in the city. It won't be an easy task, as players compete for precious resources such as malt, yeast, fruit and spices in the local markets, all while managing and optimizing their growing bottling empires.
				</p>
			</Section>

			<Cta
				bbg="https://boardgamegeek.com/boardgame/139898/brew-crafters"
				official="http://dicehatemegames.com/games/brew-crafters/"
			/>
		</>
	)
}