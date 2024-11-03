import ThemeProvider from "@/constant/ThemeProvider";
import "./globals.css";
import { Poppins } from "next/font/google";
import StoreProvider from "@/constant/StoreProvider";

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
      <body className={`${poppins.variable} relative`}>
        <ThemeProvider>
          <StoreProvider>
            <div className={"blurspot"}></div>
            <div className={"blurspot2"}></div>
            <div className={"blurspot3"}></div>
            {children}
          </StoreProvider>
        </ThemeProvider>
      </body>
    </html >
  );
}
