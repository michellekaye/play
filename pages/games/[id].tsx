import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Cta from "../../components/cta";
import Flex from "../../components/flex";
import Hero from "../../components/hero";
import Section from "../../components/section";
import Sidebar from "../../components/sidebar";
const convert = require("xml-js");

const bggUrl = "https://boardgamegeek.com/xmlapi2/thing?id=";

export default function Details(props: any) {
	const [loading, setLoading] = useState(true);
	const [gameData, setGameData] = useState({} as any);
	const router = useRouter();
	const gameId = router.query.id;

	const getGameData = async (id: string | string[] | undefined) => {
		setLoading(true);
		try {
			const response = await axios.get(`${bggUrl}${id}&stats=1`);
			const data = JSON.parse(
				convert.xml2json(response.data, { compact: true, spaces: 2 })
			);
			setGameData(data.items.item);
			setLoading(false);
			console.log(gameData);
		} catch (err) {
			console.log(err);
			setLoading(false);
		}
	};

	useEffect(() => {
		getGameData(gameId);
	}, [gameId]);

	if (loading || !gameData) {
		return <p>Loading...</p>;
	}

	console.log(gameData);

	return (
		<>
			<Hero
				game={gameData?._attributes?.id}
				title={gameData?.name[0]?._attributes.value}
				subtitle={gameData?.yearPublished?._attributes.value}
				image={gameData?.image?._text}
			/>

			<Flex>
				<Section>
					<div
						dangerouslySetInnerHTML={{ __html: gameData.description._text }}
					/>

					<Cta
						bgg={`https://boardgamegeek.com/boardgame/${gameData._attributes.id}`}
					/>
				</Section>

				<Sidebar>
					<p>
						Players: {gameData.minplayers._attributes.value} -{" "}
						{gameData.maxplayers._attributes.value}
						<br />
						Playing time: {gameData.playingtime._attributes.value} min
						<br />
						Complexity:&nbsp;
						{Math.round(
							parseFloat(
								gameData.statistics.ratings.averageweight._attributes.value
							) * 100
						) / 100}
						&nbsp;/ 5
						<br />
						BGG Rating:&nbsp;
						{Math.round(
							parseFloat(
								gameData.statistics.ratings.average._attributes.value
							) * 100
						) / 100}
					</p>
				</Sidebar>
			</Flex>
		</>
	);
}
