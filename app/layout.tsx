import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Inter_Tight } from 'next/font/google';
import './globals.css';

const interTight = Inter_Tight({
	subsets: ['latin', 'cyrillic'],
	weight: ['400', '600'],
	variable: '--font-inter-tight',
});

const helvetica = localFont({
	src: [{ path: './fonts/helvetica_regular.woff2', weight: '400', style: 'normal' }],
	variable: '--font-helvetica',
});

const helveticaNeue = localFont({
	src: [{ path: './fonts/helvetica_neue_regular.woff2', weight: '400', style: 'normal' }],
	variable: '--font-helvetica-neue',
});

export const metadata: Metadata = {
	title: 'Thinkopp',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={`${interTight.variable} ${helvetica.variable} ${helveticaNeue.variable}`}
			>
				{children}
			</body>
		</html>
	);
}
