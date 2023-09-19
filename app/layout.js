import "./globals.css";
import { ThemeProvider } from "./theme-provider.tsx";
import { DM_Sans } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import localFont from "next/font/local";

const clash = localFont({
  src: [
    {
      path: "./Fonts/Clash Display/Fonts/WEB/fonts/ClashDisplay-Regular.ttf",
      weight: "700",
      style: "bold",
    },
  ],
  variable: "--font-clash",
});

const dm_sans = DM_Sans({ subsets: ["latin"] });

export const metadata = {
  // title: '',
  description: "Created by @ilkinsufi",
  keywords: "ArtByteVault",
  author: "@ilkinsufi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="az">
      <body
        className={`${dm_sans.className} ${clash.variable} bg-[#fcfcfc] duration-700 dark:bg-[#000] dark:duration-700 selection:bg-[#FF7795] selection:text-white dark:selection:text-white`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
