import { Image } from '@nextui-org/react';

export function PikebaoContent() {
	return (
		<div>
			<Image
				removeWrapper
				className='w-full'
				radius='none'
				src='https://pixelbotsite.oss-accelerate.aliyuncs.com/pixelbot_img0.png'
			/>
			<div className='py-20 flex flex-col items-center'>
				<Image
					removeWrapper
					radius='none'
					src='https://pixelbotsite.oss-accelerate.aliyuncs.com/pixelbot_img1.png'
				/>
			</div>
		</div>
	);
}
