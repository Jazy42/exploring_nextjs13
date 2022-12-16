import { Navbar } from "../components/Navbar/navbar";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />

      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
