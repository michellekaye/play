import Cta from '../../components/cta';
import Hero from "../../components/hero";
import Section from '../../components/section';

export default function AwkwardGuests() {
	return (
		<>
			<Hero
				game="awkwardGuests"
				title="Awkward Guests"
				subtitle="Mr. Walton will be murdered—repeatedly! Uncover the clues to figure out who did it."
			/>

			<Section>
				<p>
					Awkward Guests, a.k.a. Incómodos Invitados, is a one-of-a-kind deduction game with infinite re-playability. You can recreate Mr. Walton's murder in so many different ways that you won't ever play two similar games! (Mr. Walton will not thank you for doing this.)
				</p>
				<p>
					The game challenges you to use genuine detective abilities to solve each case. To solve a mystery, you have to interrogate the suspects, question the household staff, examine the crime scene, search for clues around the Walton Mansion, and consult the police reports. You will do all of this while exchanging information with your opponents or hiding it from them, so get ready to use all your gumshoe skills!
				</p>
			</Section>

			<Cta
				bbg="https://boardgamegeek.com/boardgame/188866/awkward-guests"
				official="http://www.awkwardguests.com/"
			/>
		</>
	)
}