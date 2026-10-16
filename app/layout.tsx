import type {Metadata} from 'next';
import './globals.css'; 
import SmoothScrollProvider from '@/components/SmoothScrollProvider';

export const metadata: Metadata = {
  title: 'Emmanuel Thatching and Swimming Pools - Pty Ltd | Johannesburg & South Africa',
  description: 'Premier thatching, swimming pool construction, renovation, and outdoor living specialists in Johannesburg and Gauteng, South Africa. Get a free quote today.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased bg-white text-black leading-normal" suppressHydrationWarning>
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
