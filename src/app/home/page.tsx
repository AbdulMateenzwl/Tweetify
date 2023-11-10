import { SmUserCard } from '../../components/UserCard';
import Tweet from '../../components/Tweet';

export default function Home() {
	return (
		<main className='h-[100dvh] no-scrollbar overflow-x-hidden'>
			<SmUserCard />
			<SmUserCard />
			<SmUserCard />
			<SmUserCard />
			<Tweet />
			<Tweet />
			<Tweet />
			<Tweet />
			<Tweet />
			<Tweet />
		</main>
	);
}
