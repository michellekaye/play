import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Home: NextPage = (props) => {
  return (
    <>
      <Head>
				<title>Play</title>
				<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="description" content="Michelle's board game collection" />
        <link rel="icon" href="/favicon.ico" />
			</Head>

			<ul>
				<li>
					<Link href="/games/7-wonders" passHref={true}>
						7 Wonders
					</Link>
				</li>
				<li>
					<Link href="/games/awkward-guests" passHref={true}>
						Awkward Guests
					</Link>
				</li>
				<li>
					<Link href="/games/barenpark" passHref={true}>
						Barenpark
					</Link>
				</li>
				<li>
					<Link href="/games/brewcrafters" passHref={true}>
						Brewcrafters
					</Link>
				</li>
				<li>
					<Link href="/games/dinosaur-world" passHref={true}>
						Dinosaur World
					</Link>
				</li>
				<li>
					<Link href="/games/dixit" passHref={true}>
						Dixit
					</Link>
				</li>
				<li>
					<Link href="/games/evolution-climate" passHref={true}>
						Evolution Climate
					</Link>
				</li>
				<li>
					<Link href="/games/obsession" passHref={true}>
						Obsession
					</Link>
				</li>
				<li>
					<Link href="/games/outlive" passHref={true}>
						Outlive
					</Link>
				</li>
				<li>
					<Link href="/games/pan-am" passHref={true}>
						Pan Am
					</Link>
				</li>
				<li>
					<Link href="/games/parks" passHref={true}>
						Parks
					</Link>
				</li>
				<li>
					<Link href="/games/santa-monica" passHref={true}>
						Santa Monica
					</Link>
				</li>
				<li>
					<Link href="/games/sushi-go" passHref={true}>
						Sushi Go
					</Link>
				</li>
				<li>
					<Link href="/games/trickerion" passHref={true}>
						Trickerion
					</Link>
				</li>
				<li>
					<Link href="/games/viticulture" passHref={true}>
						Viticulture
					</Link>
				</li>
				<li>
					<Link href="/games/wingspan" passHref={true}>
						Wingspan
					</Link>
				</li>
			</ul>
    </>
  )
}

export default Home;
