import { getAllGameIds, getGameData } from '../../lib/games';

import Cta from '../../components/cta';
import Hero from "../../components/hero";
import Section from '../../components/section';

export default function Details({ gameData }: any) {
	return (
		<>
			<Hero
				game={gameData.id}
				title={gameData.title}
				subtitle={gameData.lead}
			/>

			<Section>
				<div dangerouslySetInnerHTML={{ __html: gameData.contentHtml }} />
			</Section>

			<Cta
				bgg={gameData.linkBgg}
				official={gameData.linkOfficial}
			/>
		</>
	)
}

export async function getStaticPaths() {
  const paths = getAllGameIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
	const gameData = await getGameData(params.id);
  return {
    props: {
      gameData,
    },
  };
}