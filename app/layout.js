import "./globals.css";
import { ThemeProvider } from "./theme-provider.tsx";
import { DM_Sans } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
        className={`${dm_sans.className} bg-white duration-700 dark:bg-[#1F1F1F] dark:duration-700`}
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
