import { NextUIProvider } from '@nextui-org/react';
import './app.css';

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body>
				<NextUIProvider>{children}</NextUIProvider>
			</body>
		</html>
	);
}
