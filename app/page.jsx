import { PikebaoNavbar } from './components/navbar';
import { PikebaoContent } from './components/content';
import { PikebaoFooter } from './components/footer';

export default function Page() {
	return (
		<div>
			<PikebaoNavbar />
			<PikebaoContent />
			<PikebaoFooter />
		</div>
	);
}
