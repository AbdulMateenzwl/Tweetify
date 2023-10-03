import Image from 'next/image';
import Link from 'next/link';
import NavBar from '@/Components/NavBar';
import SmUserCard from '@/Components/UserCard/SmUserCard';

export default function Home() {
	return (
		<main>
			<SmUserCard />
			<SmUserCard />
			<SmUserCard />
			<SmUserCard />
		</main>
	);
}
