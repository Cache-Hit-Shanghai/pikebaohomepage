import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	Link,
	Button,
} from '@nextui-org/react';
import { PikebaoIcon } from './logo';

export function PikebaoNavbar() {
	return (
		<Navbar isBlurred>
			<Link href='#' color='foreground'>
				<NavbarBrand className='flex flex-row gap-2'>
					<PikebaoIcon className='w-8 h-8' />
					<p className='font-bold text-inherit'>皮可宝</p>
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
