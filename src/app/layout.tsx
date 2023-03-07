import './globals.css';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-900">
        <header className="bg-black">
          <h1 className="text-blue-700 p-10 text-center font-bold text-2xl">
            <span className="text-blue-400">To</span>
            Do
          </h1>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
