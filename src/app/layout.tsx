import Header from '@/components/header';
import ThemeProvider from '@/contexts/theme';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark w-full h-full">
      <ThemeProvider>
        <body className="w-full h-full">
          <Header />
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
