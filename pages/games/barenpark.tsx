import Cta from '../../components/cta';
import Hero from "../../components/hero";
import Section from '../../components/section';

export default function Barenpark() {
	return (
		<>
			<Hero
				game="barenpark"
				title="Barenpark"
				subtitle="Build a bear park on personal boards by carefully placing polyominoes."
			/>

			<Section>
				<p>
					Up to two thousand pounds in weight and over ten feet tall, the bear is considered the biggest and heaviest terrestrial carnivore in the world. Of course, there is not just "one bear;" on the contrary, there are plenty of subspecies that differ from each other in various aspects. For instance, only the Kodiak bear (ursus arctos middendorffi) weighs about 2,000 lbs. The polar bear (ursus maritimus) weighs "only" 1,100 lbs., but gets much bigger than the Kodiak bear, being as much as 11 ft. tall!
				</p>
				<p>
					Bärenpark takes you into the world of bears, challenging you to build your own bear park. Would you like another polar bear enclosure or rather a koala* house? The park visitors are sure to get hungry on their tour through the park, so build them places to eat! Whatever your choices are, make sure you get the next building permit and use your land wisely! (* No, koalas aren't bears but they're so cute, we couldn't leave them out of this game!)
				</p>
			</Section>

			<Cta
				bbg="https://boardgamegeek.com/boardgame/219513/barenpark"
				official="https://lookout-spiele.de/en/games/baerenpark.html"
			/>
		</>
	)
}