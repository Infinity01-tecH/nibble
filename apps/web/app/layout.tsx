import type { Metadata } from "next";
import "./globals.css";
import "../../../styles.css";

export const metadata: Metadata = {
  title: "Nibble — Know where your data goes",
  description: "See which apps use your mobile data, control background usage, and make every gigabyte go further with Nibble.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
