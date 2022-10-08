import Section from './section';
import Button from './button';

export default function Cta({ bbg, official }: any) {
  return (
		<Section>
			<Button href={bbg} type="primary">
				Board Game Geek
			</Button>

			<Button href={official}>
				Official Website
			</Button>
		</Section>
  )
}		