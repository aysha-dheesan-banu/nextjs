import './globals.css';
import { Providers } from './providers';

export const metadata = {
  title: 'NextFlow | Premium SaaS Platform',
  description: 'The ultimate dashboard and management system built with Next.js.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
