import { Navbar } from "@/components/navbar/navbar";
import { Footer } from "@/components/footer/footer";
import "./globals.css";

export const metadata = {
  title: "Ramboll",
  description: "To do app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "Gotham Rounded Light" }}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
