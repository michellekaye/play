import Cta from '../../components/cta';
import Hero from "../../components/hero";
import Section from '../../components/section';

export default function Obsession() {
	return (
		<>
			<Hero
				game="obsession"
				title="Obsession"
				subtitle="Renovate an estate, manage servants, and pursue romance in Victorian England. "
			/>

			<Section>
				<p>
					You are the head of a respected but troubled family estate in mid-19th century Victorian England. After several lean decades, family fortunes are looking up! Your goal is to improve your estate so as to be in better standing with the truly influential families in Derbyshire.
				</p>
				<p>
					Obsession is a game of 16 to 20 turns in which players build a deck of Victorian gentry (British social upper class), renovate their estate by acquiring building tiles from a centralized builders' market, and manipulate an extensive service staff of butlers, housekeepers, underbutlers, maids, valets, and footmen utilizing a novel worker placement mechanic. Successfully hosting prestigious social activities such as Fox Hunts, Music Recitals, Billiards, Political Debates, and Grand Balls increases a player's wealth, reputation, and connections among the elite.
				</p>
			</Section>

			<Cta
				bbg="https://boardgamegeek.com/boardgame/231733/obsession"
				official="https://www.kayentapublishing.com/obsession"
			/>
		</>
	)
}