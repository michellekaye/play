import type { NextPage } from 'next';
import { getSortedGamesData } from '../lib/games';
import Head from 'next/head';
import ThumbnailGrid from '../components/thumbnailGrid';
import Hero from '../components/hero';

export default function Home({ allGamesData }: any) {
  return (
    <>
      <Head>
				<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="description" content="Michelle's board game collection" />
        <link rel="icon" href="/favicon.ico" />
			</Head>

			<Hero game="home" title="Michelle's Games" subtitle="Showcasing Michelle's complete board game collection (with info from Board Game Geek)." />
			
			<ThumbnailGrid games={allGamesData} />
    </>
  )
}

export async function getStaticProps() {
  const allGamesData = getSortedGamesData()
  return {
    props: {
      allGamesData
    }
  }
}
