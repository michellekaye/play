import Cta from '../../components/cta';
import Hero from "../../components/hero";
import Section from '../../components/section';

export default function EvolutionClimate() {
	return (
		<>
			<Hero
				game="evolutionClimate"
				title="Evolution Climate"
				subtitle="Adapt your species in an ecosystem of scarce food, predators, and a dynamic climate!"
			/>

			<Section>
				<p>
					Evolution: Climate is a standalone game that introduces climate into the Evolution game system.
				</p>
				<p>
					In Evolution: Climate, players adapt their species in a dynamic ecosystem where food is scarce, predators lurk, and the climate can swing between scorching hot and icy cold. Traits like a Hard Shell and Horns can protect your species from Carnivores while a Long Neck will help them get food that others cannot reach. Heavy Fur and Migratory can protect your species from the cold while being Nocturnal or Burrowing will provide protection from the cruel desert sun. With over 200,000 ways to evolve your species, every game evolves into a different adventure.
				</p>
			</Section>

			<Cta
				bbg="https://boardgamegeek.com/boardgame/182134/evolution-climate"
				official="https://www.northstargames.com/products/evolution-climate"
			/>
		</>
	)
}