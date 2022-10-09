import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const gamesDirectory = path.join(process.cwd(), 'games');

export function getSortedGamesData() {
  // Get file names under /games
  const fileNames = fs.readdirSync(gamesDirectory)
  const allGamesData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(gamesDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the game metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...matterResult.data
    }
	})

	return allGamesData;
}

export function getAllGameIds() {
  const fileNames = fs.readdirSync(gamesDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export async function getGameData(id) {
  const fullPath = path.join(gamesDirectory, `${id}.md`);
	const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the games metadata section
  const matterResult = matter(fileContents);

	// Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
		.process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}