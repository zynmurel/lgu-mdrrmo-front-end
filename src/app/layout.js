import "./globals.css";
import { Inter } from "next/font/google";
import ThemeProvider from "../theme/themeProvider";
import theme from "../theme/theme.json";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SEVILLA (LGU MDRRMO)",
  description: "Generated by create next app",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch-icon.png"],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} h-screen m-0 flex justify-center bg-white`}
      >
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </body>
    </html>
  );
}
