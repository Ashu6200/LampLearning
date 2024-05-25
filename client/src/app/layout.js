import ThemeProvider from "@/constant/ThemeProvider";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-Poppins",
});

export const metadata = {
  title: "Lamp Learning",
  description:
    "Lamp Learning is a platform for student to learn and get help from teacher",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' suppressHydrationWarning={true}>
      <body
        className={`${poppins.variable} bg-white !bg-no-repeat dark:bg-gradient-to-b dark:from-gray-900 dark:to-black duration-300`}
      >
        <ThemeProvider attribute='class' defaultTheme='light'>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
