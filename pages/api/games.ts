// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

	const games = {
		'7wonders': {
			slug: '7-wonders',
		},
		awkwardGuests: {
			slug: 'awkward-guests',
		},
		barenpark: {
			slug: 'barenpark',
		},
		battleship: {
			slug: 'battleship',
		},
		brewcrafters: {
			slug: 'brewcrafters',
		},
		catan: {
			slug: 'catan',
		},
		clue: {
			slug: 'clue',
		},
		clueDisney: {
			slug: 'clue-disney',
		},
		dinosaurWorld: {
			slug: 'dinosaur-world',
		},
		dixit: {
			slug: 'dixit',
		},
		evolutionClimate: {
			slug: 'evolution-climate',
		},
		life: {
			slug: 'life',
		},
		monopolyDisney: {
			slug: 'monopoly-disney',
		},
		obsession: {
			slug: 'obsession',
		},
		outlive: {
			slug: 'outlive',
		},
		panAm: {
			slug: 'pan-am',
		},
		pictionary: {
			slug: 'pictionary',
		},
		parks: {
			slug: 'parks',
		},
		risk: {
			slug: 'risk',
		},
		riskGameOfThrones: {
			slug: 'risk-game-of-thrones',
		},
		santaMonica: {
			slug: 'santa-monica',
		},
		scrabble: {
			slug: 'scrabble',
		},
		sceneItDisney: {
			slug: 'scene-it-disney',
		},
		sceneItFriends: {
			slug: 'scene-it-friends',
		},
		spyWeb: {
			slug: 'spy-web',
		},
		sushiGo: {
			slug: 'sushi-go',
		},
		trickerion: {
			slug: 'trickerion',
		},
		viticulture: {
			slug: 'viticulture',
		},
		wingspan: {
			slug: 'wingspan',
		},
		wingspanOceania: {
			slug: 'wingspan-oceania',
		}
	}

	res.status(200).json(games);
}
