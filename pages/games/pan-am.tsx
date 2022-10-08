import Cta from '../../components/cta';
import Hero from "../../components/hero";
import Section from '../../components/section';

export default function PanAm() {
	return (
		<>
			<Hero
				game="panAm"
				title="Pan Am"
				subtitle="Triumph in the golden age of air travel."
			/>

			<Section>
				<p>
					In Pan Am, players compete with Pan American Airways and others to build an air-travel empire. Outbid rivals for lucrative landing rights, buy planes with longer range to reach the far corners of the world, and use insider connections to advance your interests. As you bump up against the ever-growing Pan Am, you can sell your routes to the company to earn a tidy profit, with you then using that money to invest in other growth or to purchase Pan Am stock for what's sure to be a big payout down the road.
				</p>
				<p>
					Pan Am is a game of global strategy that spans four decades of industry-changing historic events.
				</p>
		</Section>

			<Cta
				bbg="https://boardgamegeek.com/boardgame/303057/pan-am"
				official="https://www.prosperohall.com/games/panam/"
			/>
		</>
	)
}