import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Portfolio",
  description: "By Rishab Mandal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          scrollBehavior: "smooth",
          // zoom: "120%"
        }}
        // className="md:scale-110"
      >
        <Navbar />
        <div
          style={{
            zoom: "135%",
          }}
        >
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
