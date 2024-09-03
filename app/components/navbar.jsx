import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	Link,
	Button,
	Image,
} from '@nextui-org/react';

export function PikebaoNavbar() {
	return (
		<Navbar isBlurred>
			<Link href='#' className='h-full'>
				<NavbarBrand className='flex flex-row gap-2 m-w-0 w-fit h-full'>
					<Image
						className='w-auto h-full py-1'
						removeWrapper
						src='https://pixelbot.oss-accelerate.aliyuncs.com/pikebaologo2.svg'
					/>
				</NavbarBrand>
			</Link>
			<NavbarContent className='hidden sm:flex gap-4' justify='center'>
				<NavbarItem>
					<Link color='foreground' href='#'>
						看宠机器人
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link color='foreground' href='#'>
						伴宠机器人
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link color='foreground' href='#'>
						服务与支持
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link color='foreground' href='#'>
						最新动态
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link color='foreground' href='#'>
						关于我们
					</Link>
				</NavbarItem>
			</NavbarContent>
			<NavbarContent justify='center'>
				<NavbarItem className='hidden lg:flex'>
					<Link href='#'>登录</Link>
				</NavbarItem>
				<NavbarItem>
					<Button as={Link} color='primary' href='#' variant='flat'>
						注册
					</Button>
				</NavbarItem>
			</NavbarContent>
		</Navbar>
	);
}
