import type { NextPage } from 'next';
import Head from 'next/head';
import ThumbnailGrid from '../components/thumbnailGrid';

const Home: NextPage = (props) => {
  return (
    <>
      <Head>
				<title>Play</title>
				<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="description" content="Michelle's board game collection" />
        <link rel="icon" href="/favicon.ico" />
			</Head>

			<ThumbnailGrid />
    </>
  )
}

export default Home;
