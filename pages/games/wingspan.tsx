import Cta from '../../components/cta';
import Hero from "../../components/hero";
import Section from '../../components/section';

export default function Wingspan() {
	return (
		<>
			<Hero
				game="wingspan"
				title="Wingspan"
				subtitle="Attract a beautiful and diverse collection of birds to your wildlife preserve."
			/>
			
			<Section>
				<p>
					Wingspan is a competitive, medium-weight, card-driven, engine-building board game from Stonemaier Games. It&apos;s designed by Elizabeth Hargrave and features over 170 birds illustrated by Beth Sobel, Natalia Rojas, and Ana Maria Martinez.
				</p>
				<p>
					You are bird enthusiasts—researchers, bird watchers, ornithologists, and collectors—seeking to discover and attract the best birds to your network of wildlife preserves. Each bird extends a chain of powerful combinations in one of your habitats (actions). These habitats focus on several key aspects of growth:
				</p>
				<p>
					Gain food tokens via custom dice in a birdfeeder dice tower.
					Lay eggs using egg miniatures in a variety of colors.
					Draw from hundreds of unique bird cards and play them.
					The winner is the player with the most points after 4 rounds.
				</p>
			</Section>

			<Cta
				bbg="https://boardgamegeek.com/boardgame/266192/wingspan"
				official="https://stonemaiergames.com/games/wingspan/"
			/>
		</>
	)
}