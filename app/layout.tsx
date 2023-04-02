import { Navbar } from "./components/navbar";
import "./globals.css";
import { Nunito } from "next/font/google";
export const metadata = {
  title: "Airbnb",
  description: "Airbnb clone",
};
const nunitoFont = Nunito({
  subsets: ["latin"],
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunitoFont.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
