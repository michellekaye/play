import Cta from '../../components/cta';
import Hero from "../../components/hero";
import Section from '../../components/section';

export default function SushiGo() {
	return (
		<>
			<Hero
				game="sushiGo"
				title="Sushi Go"
				subtitle="Pass sushi around a bigger table and take the best dishes. Save room for dessert!"
			/>

			<Section>
				<p>
					Sushi Go Party! expands Sushi Go! with a party platter of mega maki, super sashimi, and endless edamame. You still earn points by picking winning sushi combos, but now you can customize each game by choosing à la carte from a menu of more than twenty delectable dishes. What's more, up to eight players can join in on the sushi-feast. Let the good times roll!
				</p>
			</Section>

			<Cta
				bbg="https://boardgamegeek.com/boardgame/192291/sushi-go-party"
				official="https://gamewright.com/product/Sushi-Go-Party"
			/>
		</>
	)
}