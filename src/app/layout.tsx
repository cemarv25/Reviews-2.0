import Header from '@/components/header';
import { ThemeProvider } from '@/contexts/theme';
import { AuthProvider } from '@/contexts/auth';
import './globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Reviews',
    default: 'Reviews',
  },
  description: 'A place to post reviews for your favorite restaurants.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="w-full h-full dark">
      <body className="w-full h-full">
        <ThemeProvider>
          <AuthProvider>
            <Header />
            {children}
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
