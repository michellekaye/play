import Cta from '../../components/cta';
import Hero from "../../components/hero";
import Section from '../../components/section';

export default function Parks() {
	return (
		<>
			<Hero
				game="parks"
				title="Parks"
				subtitle="Hike through National Parks tiles, collecting memories and admiring gorgeous scenery."
			/>

			<Section>
				<p>
					PARKS is a celebration of the US National Parks featuring illustrious art from Fifty-Nine Parks.
				</p>
				<p>
					In PARKS, players will take on the role of two hikers as they trek through different trails across four seasons of the year. While on the trail, these hikers will take actions and collect memories of the places your hikers visit. These memories are represented by various resource tokens like mountains and forests. Collecting these memories in sets will allow players to trade them in to visit a National Park at the end of each hike.
				</p>
				<p>
					Each trail represents one season of the year, and each season, the trails will change and grow steadily longer. The trails, represented by tiles, get shuffled in between each season and laid out anew for the next round. Resources can be tough to come by especially when someone is at the place you’re trying to reach! Campfires allow you to share a space and time with other hikers. Canteens and Gear can also be used to improve your access to resources through the game. It’ll be tough to manage building up your engine versus spending resources on parks, but we bet you’re up to the challenge. Welcome to PARKS!
				</p>
			</Section>

			<Cta
				bbg="https://boardgamegeek.com/boardgame/266524/parks"
				official="https://keymastergames.com/products/parks"
			/>
		</>
	)
}