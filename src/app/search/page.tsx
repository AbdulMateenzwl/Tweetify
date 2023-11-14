import React from 'react';
import SearchBar from '@/components/SearchBar';

export default function page() {
	return (
		<div className='flex flex-col mx-3'>
			<SearchBar resultCount={20} />
		</div>
	);
}
