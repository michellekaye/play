import Cta from '../../components/cta';
import Hero from "../../components/hero";
import Section from '../../components/section';

export default function Life() {
	return (
		<>
			<Hero
				game="life"
				title="Life"
				subtitle="Travel down life's road with its highs and lows as you try to amass a fortune."
			/>

			<Section>
				<p>
					This game attempts to mirror life events many people go through from going to college, raising a family, buying a home, working and retiring.
				</p>
				<p>
					The intent of the game is to have the most assets at the end of the game, assets are earned primarily by working and earning tokens with dollar amounts on them. Additionally the first person to complete the course gets additional money tokens.
				</p>
				<p>
					There is a very linear board that you move along by spinning a wheel or landing on spaces that tell you to move to a specific space or forward or back. There are a handful of intersections where you can choose to go one direction or another but they ultimately have similar spaces and meet back up quickly. There are a handful of choices regarding insurance and investments but for the most part it is a game of luck.
				</p>
		</Section>

			<Cta
				bbg="https://boardgamegeek.com/boardgame/2921/game-of-life"
			/>
		</>
	)
}