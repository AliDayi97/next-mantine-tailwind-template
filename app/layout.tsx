import './../styles/globals.css';
import RootStyleRegistry from './emotion';
import Providers from './providers';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <RootStyleRegistry>
          <Providers>{children}</Providers>
        </RootStyleRegistry>
      </body>
    </html>
  );
}
