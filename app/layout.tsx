import Footer from "./components/Footer";
import "./globals.css";
import Header from "./components/Header";
import WhatsAppFloat from "./components/WhatsAppButton";
export const metadata = {
  title: "Seven Lakes Trail - Discover The Heaven On Earth",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
