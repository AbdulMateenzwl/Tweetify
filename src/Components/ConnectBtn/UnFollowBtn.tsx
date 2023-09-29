'use client';
import React from 'react';

export default function FollowBtn(props: any) {
	const handleRemoveConnection = () => {
		// Remove Connection
	};

	return (
		<button
			className='ml-auto theme-bg-blue rounded-full px-3 py-0 text-[0.5rem] text-white h-6 my-auto'
			onClick={handleRemoveConnection}
		>
			UnFollow
		</button>
	);
}
