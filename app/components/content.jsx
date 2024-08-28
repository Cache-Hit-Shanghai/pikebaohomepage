'use client';

import { Image } from '@nextui-org/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function AdCarouselIndicator(clickHandler, isSelected, index, label) {
	return (
		<div
			className={
				'inline-block h-1 w-6 mr-1 rounded ' +
				(isSelected ? 'bg-[#FD9240FF]' : 'bg-[#FD92404D]')
			}
		/>
	);
}

export function PikebaoContent() {
	return (
		<div>
			<Carousel
				autoPlay
				interval={10000}
				infiniteLoop
				showArrows={false}
				showStatus={false}
				showThumbs={false}
				renderIndicator={AdCarouselIndicator}
			>
				<Image
					removeWrapper
					radius='none'
					key={0}
					src='https://pixelbotsite.oss-accelerate.aliyuncs.com/1908-648.jpg'
				/>
				<Image
					removeWrapper
					radius='none'
					key={1}
					src='https://pixelbotsite.oss-accelerate.aliyuncs.com/1908-648-2.jpg'
				/>
			</Carousel>
			<div className='py-20 flex flex-col items-center'>
				<Image
					removeWrapper
					radius='none'
					src='https://pixelbotsite.oss-accelerate.aliyuncs.com/1273-717.jpg'
				/>
			</div>
		</div>
	);
}
