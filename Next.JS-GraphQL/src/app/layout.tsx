import { Provider } from "@/Components/Provider";
import type { Metadata } from "next";
import "./globals.css";;

export const metadata: Metadata = {
  title: "Next.JS GraphQL",
  description: "Next.JS GraphQL With Apollo Server"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Provider>
        <body>
          {children}
        </body>
      </Provider>
    </html>
  )
};