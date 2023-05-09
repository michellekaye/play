import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Cta from "../../components/cta";
import Flex from "../../components/flex";
import Hero from "../../components/hero";
import Section from "../../components/section";
import Sidebar from "../../components/sidebar";
import Tags from "../../components/tags";
const convert = require("xml-js");

const bggUrl = "https://boardgamegeek.com/xmlapi2/thing?id=";

export default function Details(props: any) {
	const [loading, setLoading] = useState(true);
	const [gameData, setGameData] = useState({} as any);
	const [mechanics, setMechanics] = useState([]);
	const [category, setCategory] = useState([]);
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
			setMechanics(getCategory("boardgamemechanic", data.items.item));
			setCategory(getCategory("boardgamecategory", data.items.item));
			setLoading(false);
		} catch (err) {
			setLoading(false);
		}
	};

	const getCategory = (category: string, game: any) => {
		return game.link
			.filter((link: any) => {
				return link._attributes.type === category ? link : null;
			})
			.map((link: any) => {
				return link._attributes.value;
			});
	};

	useEffect(() => {
		getGameData(gameId);
	}, [gameId]);

	if (loading || !gameData) {
		return <p></p>;
	}

	return (
		<>
			<Hero
				game={gameData?._attributes?.id}
				title={
					gameData?.name[0]
						? gameData?.name[0]?._attributes.value
						: gameData?.name._attributes.value
				}
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
					<>
						<p>
							Players: {gameData.minplayers._attributes.value} -{" "}
							{gameData.maxplayers._attributes.value}
							<br />
							Playing time: {gameData.minplaytime._attributes.value} -{" "}
							{gameData.maxplaytime._attributes.value} min
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
							&nbsp;/ 10
						</p>

						<p>Categories:</p>
						<Tags tags={category} />

						<p>Mechanics:</p>
						<Tags tags={mechanics} />
					</>
				</Sidebar>
			</Flex>
		</>
	);
}
