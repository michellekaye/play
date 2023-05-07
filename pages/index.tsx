import { useState, useEffect } from "react";
import axios from "axios";
import { getSortedGamesData } from "../lib/games";
import Head from "next/head";
import ThumbnailGrid from "../components/thumbnailGrid";
import Hero from "../components/hero";
const convert = require("xml-js");

const bggUrl =
	"https://boardgamegeek.com/xmlapi2/collection?username=michelle06";

export default function Home({ allGamesData }: any) {
	const [games, setGames] = useState([]);

	const getGames = async () => {
		try {
			const response = await axios.get(bggUrl);
			console.log(response);
			const data = JSON.parse(
				convert.xml2json(response.data, { compact: true, spaces: 2 })
			);
			console.log(data);

			setGames(response?.data);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		getGames();
	}, []);

	return (
		<>
			<Head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, maximum-scale=1"
				/>
				<meta name="description" content="Michelle's board game collection" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Hero
				game="home"
				title="Michelle's Games"
				subtitle="Showcasing Michelle's complete board game collection (with info from Board Game Geek)."
			/>

			<ThumbnailGrid games={allGamesData} />
		</>
	);
}

export async function getStaticProps() {
	const allGamesData = getSortedGamesData();
	return {
		props: {
			allGamesData,
		},
	};
}
