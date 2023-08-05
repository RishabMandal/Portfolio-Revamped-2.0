import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Portfolio",
  description: "By Rishab Mandal",
};

const style = {
  // "@media screen and (min-width: 600px)": {
  //   zoom: "135%",
  // },
  zoom: "135%",
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
      >
        <Navbar />
        <div
          // style={{
          //   zoom: "135%",
          // }}
          style={style}
          // className="md:scale-[135%]"
        >
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
