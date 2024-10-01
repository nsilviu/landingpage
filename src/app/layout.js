import localFont from "next/font/local";
import { Roboto } from "next/font/google"; // Import Roboto from next/font/google
import "./globals.css";

// Import local fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Import Google Font (Roboto)
const roboto = Roboto({
  weight: ["400", "500", "700"], // Include different weights as needed
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata = {
  title: "PIA Auto Rulate",
  description: "Ofertele de Black Friday au venit mai devreme la PIA",
  icons: {
    icon: "/logos/pialogo.png", // Path to your favicon
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
