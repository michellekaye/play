import type { NextPage } from 'next';
import Head from 'next/head';
import ThumbnailGrid from '../components/thumbnailGrid';
import Hero from '../components/hero';

const favourites = [
	'7wonders', 'obsession', 'panAm', 'parks', 'wingspan'
];

const unplayed = [
	'brewcrafters', 'dinosaurWorld', 'evolutionClimate', 'outlive', 'riskGameOfThrones', 'trickerion'
];

const Home: NextPage = (props) => {
  return (
    <>
      <Head>
				<title>Michelle's Board Games</title>
				<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="description" content="Michelle's board game collection" />
        <link rel="icon" href="/favicon.ico" />
			</Head>

			<Hero game="home" title="Michelle's Games" subtitle="An complete database of Michelle's board game collection with info taken from BGG." />
			
			<ThumbnailGrid heading="My personal favourites" list={favourites} />
			<ThumbnailGrid heading="Have yet to play" list={unplayed}  />
			<ThumbnailGrid heading="Entire collection" />
    </>
  )
}

export default Home;
