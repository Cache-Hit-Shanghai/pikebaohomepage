import { Divider, Link } from '@nextui-org/react';

export function PikebaoFooter() {
	return (
		<div className='bg-neutral-800 flex flex-col items-center pt-5'>
			<div className='w-[1024px] px-6'>
				<div className='text-gray-200 pb-20 flex flex-row justify-between'>
					<div className='text-sm'>
						<div className='pb-4'>关于我们</div>
						<div className='pb-4 opacity-70'>公司介绍</div>
						<div className='py-4'>帮助</div>
						<div className='pb-4 opacity-70'>皮可宝APP下载</div>
						<div className='pb-4 opacity-70'>联系方式：</div>
						<div className='pb-4 opacity-70'>网址：pikebao.com</div>
					</div>
					<div className='text-sm'>
						<div className='pb-4'>商城</div>
						<div className='pb-4 opacity-70'>天猫商城</div>
						<div className='pb-4 opacity-70'>京东商城</div>
						<div className='pb-4 opacity-70'>抖音商城</div>
						<div className='py-4'>最新动态</div>
						<div className='pb-4 opacity-70'>新闻动态</div>
						<div className='pb-4 opacity-70'>视频动态</div>
					</div>
					<div className='text-sm'>
						<div className='pb-4'>订阅我们</div>
						<div className='pb-4 opacity-70'>微信公众号</div>
						<div className='pb-4 opacity-70'>小红书</div>
						<div className='pb-4 opacity-70'>微博</div>
					</div>
				</div>
				<Divider className='bg-gray-200 opacity-70' />
				<div className='py-5 flex flex-row gap-4'>
					<span className='text-sm text-gray-200 opacity-70'>
						&copy; 2024 Pixelbot
					</span>
					<Link
						isExternal
						color='foreground'
						underline='hover'
						href='https://beian.miit.gov.cn/'
					>
						<span className='text-sm text-gray-200 opacity-70'>
							沪ICP备2024079873号
						</span>
					</Link>
					<span className='text-sm text-gray-200 opacity-70'>
						上海皮可宝机器人科技有限公司
					</span>
					<span className='text-sm text-gray-200 opacity-70'>隐私政策</span>
					<span className='text-sm text-gray-200 opacity-70'>条款与条件</span>
					<span className='text-sm text-gray-200 opacity-70'>证书</span>
				</div>
			</div>
		</div>
	);
}
