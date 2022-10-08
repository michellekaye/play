import Cta from '../../components/cta';
import Hero from "../../components/hero";
import Section from '../../components/section';

export default function SceneItFriends() {
	return (
		<>
			<Hero
				game="sceneItFriends"
				title="Scene It: Friends"
				subtitle="Friends trivia from ALL TEN seasons to challenge the fan in everyone"
			/>

			<Section>
				<p>
					From foosball matches and hanging out at Central Perk to Marcel and Smelly Cat, you’ll find all your favorite Friends moments in Scene It? Friends Edition. Now you can relive ALL TEN seasons from this hit show, with real show clips, trivia questions and other custom Friends on-screen puzzlers. How well do you really know Monica, Phoebe and Rachel? Or Chandler, Joey and Ross? You’ll find out as you play the game that celebrates one of the greatest comedy series ever to grace the airwaves.
				</p>
			</Section>

			<Cta
				bbg="https://boardgamegeek.com/boardgame/21705/scene-it-friends"
			/>
		</>
	)
}