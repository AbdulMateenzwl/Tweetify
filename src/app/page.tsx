import Image from 'next/image';
import Link from 'next/link';
import NavBar from '../components/NavBar';
import {SmUserCard} from '../components/UserCard';

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
