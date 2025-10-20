import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next Auth Email provider",
  description: "project to learn next-auth email provider",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}>
          <main className="flex justify-center items-center text-black w-screen h-screen bg-gray-200 text-3xl">

        {children}
          </main>
      </body>
    </html>
  );
}
