import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import NavBar from '@/Components/NavBar';
import SmUserCard from '@/Components/UserCard/SmUserCard';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Tweetify | Home',
	description:
		'Tweetify is a open social media platform for public to share there opinions.',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className='flex justify-center'>
				<main className=' flex flex-col sm:flex-row w-[1200px] justify-center'>
					<NavBar />
					<div className='w-[100vw] sm:w-[450px] md:w-[600px] xl:w-[700px] border-r-2 border-l-2 border-gray-200 flex flex-col'>
						{children}
					</div>
					<div className='hidden xd:flex xd:flex-col xd:w-[300px] xl:w-[350px]'>
						<SmUserCard />
					</div>
				</main>
			</body>
		</html>
	);
}
