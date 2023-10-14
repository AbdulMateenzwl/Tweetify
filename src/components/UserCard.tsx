import React from 'react';
import Image from 'next/image';
import { ConnectionBtn } from '../components/Button';
import Link from 'next/link';

export function SmUserCard() {
	return (
		<Link href={'/'}>
			<div className='flex items-center p-2  hover:bg-[#F7F7F7] cursor-pointer '>
				<Image
					src='/user-solid.svg'
					alt='avatar'
					className='rounded-full'
					width={30}
					height={30}
				/>
				<div className='flex flex-col w-full'>
					<div className='flex ml-3'>
						<div className=''>
							<div className='text-sm font-semibold'>Full Name</div>
							<div className='text-xs text-gray-500'>@username</div>
						</div>
						{/* Follow Button */}
						<div className='ml-auto'>
							<ConnectionBtn username='test' />
						</div>
					</div>
					<div className='text-[0.6rem] text-gray-500 w-full overflow-hidden text-ellipsis ml-3 '>
						{}...
					</div>
				</div>
			</div>
		</Link>
	);
}
