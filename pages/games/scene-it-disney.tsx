import Cta from '../../components/cta';
import Hero from "../../components/hero";
import Section from '../../components/section';

export default function SceneItDisney() {
	return (
		<>
			<Hero
				game="sceneItDisney"
				title="Scene It: Disney"
				subtitle="Featuring Pirates of the Caribbean, Cars, and The Incredibles!"
			/>

			<Section>
				<p>
					Add the magic of Disney to your family fun time! Scene It? Disney 2nd Edition features more classic characters, more unforgettable songs, more favorite scenes from your favorite classics, old and new. Enjoy them all as you answer trivia questions and race around the game board. This game is guaranteed to keep your family smiling play after play. Ages 6 - Adult.
				</p>
			</Section>

			<Cta
				bbg="https://boardgamegeek.com/boardgame/32682/scene-it-disney-second-edition"
			/>
		</>
	)
}