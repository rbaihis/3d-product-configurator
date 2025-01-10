import '../styles/globals.css';

export const metadata = {
  title: '3D Shape Configurator',
  description: 'A Next.js app for configuring 3D shapes',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-gradient-to-t from-blue-800 to-blue-500">
        {children}
      </body>
    </html>
  );
}
