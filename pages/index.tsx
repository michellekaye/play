// @ts-nocheck
import { useState, useEffect } from "react";
import axios from "axios";
import Head from "next/head";
import ThumbnailGrid from "../components/thumbnailGrid";
import Hero from "../components/hero";
import Filters from "../components/filters";
import Refresh from "../components/refresh";
const convert = require("xml-js");

const bggUrl =
	"https://boardgamegeek.com/xmlapi2/collection?username=michelle06";

const minDistance = 1;

export default function Home(props: any) {
	const [collection, setCollection] = useState([]);
	const [games, setGames] = useState([]);
	const [error, setError] = useState("");
	const [filterStatus, setFilterStatus] = useState("all");
	const [filterComplexity, setFilterComplexity] = useState<number[]>([0, 5]);

	const getGames = async () => {
		try {
			const collection = await axios.get(bggUrl).then((res) => {
				const data = JSON.parse(
					convert.xml2json(res.data, { compact: true, spaces: 2 })
				);
				return data.items.item;
			});
			setCollection(collection);

			const gameUrl =
				"https://boardgamegeek.com/xmlapi2/thing?id=" +
				collection.map((game: any) => game._attributes.objectid).join(",") +
				"&stats=1";

			const rawGamesData = await axios.get(gameUrl).then((res) => {
				const data = JSON.parse(
					convert.xml2json(res.data, { compact: true, spaces: 2 })
				);
				return data.items.item;
			});

			const gamesData = rawGamesData.map((game) => {
				const getCategory = (cat) => {
					return game.link
						.filter((link) => {
							return link._attributes.type === cat ? link : null;
						})
						.map((link) => {
							return link._attributes.value;
						});
				};

				const decodeHTML = (html) => {
					var txt = document.createElement("textarea");
					txt.innerHTML = html;
					return txt.value;
				};

				return {
					id: game._attributes.id,
					name: Array.isArray(game.name)
						? game.name[0]._attributes.value
						: game.name._attributes.value,
					rating:
						Math.round(
							parseFloat(game.statistics.ratings.average._attributes.value) *
								100
						) / 100,
					thumbnail: game.thumbnail._text,
					image: game.image._text,
					year: game.yearpublished._attributes.value,
					numPlayers: {
						min: parseInt(game.minplayers._attributes.value),
						max: parseInt(game.maxplayers._attributes.value),
					},
					playTime: {
						min: parseInt(game.minplaytime._attributes.value),
						max: parseInt(game.maxplaytime._attributes.value),
					},
					url: "https://boardgamegeek.com/boardgame/" + game._attributes.id,
					description: decodeHTML(game.description._text),
					categories: getCategory("boardgamecategory"),
					mechanics: getCategory("boardgamemechanic"),
					designer: getCategory("boardgamedesigner")[0],
					complexity:
						Math.round(
							parseFloat(
								game.statistics.ratings.averageweight._attributes.value
							) * 100
						) / 100,
				};
			});
			setGames(gamesData);
		} catch (err: any) {
			setError(err.message);
		}
	};

	useEffect(() => {
		getGames();
	}, []);

	const handleStatusChange = (e: any) => {
		e.preventDefault;
		setFilterStatus(e.target.defaultValue);
	};

	const handleComplexityChange = (
		event: Event,
		newValue: number | number[],
		activeThumb: number
	) => {
		if (!Array.isArray(newValue)) {
			return;
		}

		if (newValue[1] - newValue[0] < minDistance) {
			if (activeThumb === 0) {
				const clamped = Math.min(newValue[0], 100 - minDistance);
				setFilterComplexity([clamped, clamped + minDistance]);
			} else {
				const clamped = Math.max(newValue[1], minDistance);
				setFilterComplexity([clamped - minDistance, clamped]);
			}
		} else {
			setFilterComplexity(newValue as number[]);
		}
	};

	const visibleGames = games
		.filter((game: any) => {
			const collectionItem = collection.find((g: any) => {
				return g._attributes.objectid === game.id;
			});
			switch (filterStatus) {
				case "wishlist":
					if (collectionItem?.status?._attributes.own === "0") return game;
					break;
				case "own":
					if (collectionItem?.status?._attributes.own === "1") return game;
					break;
				default:
					return game;
			}
		})
		.filter((game: any) => {
			if (
				game.complexity >= filterComplexity[0] &&
				game.complexity <= filterComplexity[1]
			)
				return game;
			return null;
		});

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

			<Filters
				handleStatusChange={handleStatusChange}
				handleComplexityChange={handleComplexityChange}
				filterStatus={filterStatus}
				filterComplexity={filterComplexity}
			/>

			{games.length > 0 ? (
				<ThumbnailGrid games={visibleGames} collection={collection} />
			) : (
				<Refresh />
			)}
		</>
	);
}
