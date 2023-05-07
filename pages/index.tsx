import { useState, useEffect } from "react";
import axios from "axios";
import { getSortedGamesData } from "../lib/games";
import Head from "next/head";
import ThumbnailGrid from "../components/thumbnailGrid";
import Hero from "../components/hero";
const convert = require("xml-js");

export default async function Home({ allGamesData }: any) {
	const [games, setGames] = useState([]);

	const url =
		"https://boardgamegeek.com/xmlapi2/collection?username=michelle06";

	const getGames = await axios.get(url).then((res) => {
		console.log(res);
		const data = JSON.parse(
			convert.xml2json(res.data, { compact: true, spaces: 2 })
		).catch((err: any) => {
			console.log(err);
		});
		console.log(data);
		setGames(data.items.items);
	});

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
