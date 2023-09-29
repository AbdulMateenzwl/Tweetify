import Image from 'next/image';
import Link from 'next/link';
import NavBar from '@/Components/NavBar';
import SmUserCard from '@/Components/UserCard/SmUserCard';

export default function Home() {
	return (
		<main className='flex mx-auto'>
			<NavBar />
			{/* <div className="h-7 w-7 bg-red-500 md:bg-black"></div> */}
			{/* <div className='w-[100vw]  sm:w-[500px] border-r-2 border-l-2 border-gray-200 flex flex-col'>
				<SmUserCard />
				<SmUserCard />
				<SmUserCard />
				<SmUserCard />
			</div>
			<div className='hidden xd:flex xd:flex-col w-[400px]'>
				<SmUserCard />
			</div> */}
		</main>
	);
}
