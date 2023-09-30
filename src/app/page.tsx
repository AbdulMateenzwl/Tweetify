import Image from 'next/image';
import Link from 'next/link';
import NavBar from '@/Components/NavBar';
import SmUserCard from '@/Components/UserCard/SmUserCard';

export default function Home() {
	return (
		<main className=' flex flex-col sm:flex-row w-[1200px] justify-center'>
			<NavBar />
			<div className='w-[100vw] sm:w-[450px] md:w-[600px] xl:w-[700px] border-r-2 border-l-2 border-gray-200 flex flex-col'>
				<SmUserCard />
				<SmUserCard />
				<SmUserCard />
				<SmUserCard />
			</div>
			<div className='hidden xd:flex xd:flex-col xd:w-[300px] xl:w-[350px]'>
				<SmUserCard />
			</div>
		</main>
	);
}
