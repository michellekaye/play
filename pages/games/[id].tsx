import { getAllGameIds, getGameData } from '../../lib/games';

import Cta from '../../components/cta';
import Flex from '../../components/flex';
import Hero from "../../components/hero";
import Section from '../../components/section';
import Sidebar from '../../components/sidebar';

export default function Details({ gameData }: any) {
	return (
		<>
			<Hero
				game={gameData.id}
				title={gameData.title}
				subtitle={gameData.lead}
			/>

			<Flex>
				<Section>
					<div dangerouslySetInnerHTML={{ __html: gameData.contentHtml }} />

					<Cta
						bgg={gameData.linkBgg}
						official={gameData.linkOfficial}
					/>
				</Section>
				
				{
					gameData.players && (
						<Sidebar>
							<p>
								Players: {gameData.players}<br />
								Playing time: {gameData.playTime}<br />
								Complexity: {gameData.complexity} / 5
							</p>
						</Sidebar>
					)
				}

			</Flex>
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