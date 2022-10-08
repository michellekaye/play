import Cta from '../../components/cta';
import Hero from "../../components/hero";
import Section from '../../components/section';

export default function ClueDisney() {
	return (
		<>
			<Hero
				game="clueDisney"
				title="Clue: Disney"
				subtitle="The game of Clue with a The Haunted Mansion Disney attraction theme."
			/>

			<Section>
				<p>
					In this special edition of the classic Clue game, you'll search rooms and secret passages as one of 6 different Disney characters. The mystery changes every time you play, If you collect the right clues and make the right deductions, you’ll solve the mystery of the Haunted Mansion! “We have 999 happy haunts, but there’s always room for one more…”
				</p>
			</Section>

			<Cta
				bbg="https://boardgamegeek.com/boardgame/5467/clue-haunted-mansion"
			/>
		</>
	)
}