import { NextUIProvider } from '@nextui-org/react';
import './app.css';

export default function RootLayout({ children }) {
	return (
		<html>
			<body>
				<NextUIProvider>{children}</NextUIProvider>
			</body>
		</html>
	);
}
