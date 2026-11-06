import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Deadlock Field Guide · Counters de héroes',
  description: 'Elige un héroe de Deadlock, revisa sus puntos débiles y compara el matchup con tu propio héroe.',
  applicationName: 'Deadlock Field Guide',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Deadlock Hub',
  },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
  themeColor: '#0b0c10',
  colorScheme: 'dark',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="h-full antialiased dark">
      <body suppressHydrationWarning className="min-h-full flex flex-col bg-[#0b0c10] text-neutral-100">
        {children}
      </body>
    </html>
  );
}
