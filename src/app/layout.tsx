
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="dark bg-gradient-to-tr from-slate-950 via-slate-800 to-slate-700">
        {children}
      </body>
    </html>
  );
}
