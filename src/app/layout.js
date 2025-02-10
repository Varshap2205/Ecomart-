import './globals.css'

export const metadata = {
  title: 'EcoMart🌿',
  description: 'Sustainable Shopping Made Easy',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}