// import "./globals.css";
import Navbar from "@/component/Navbar/Navbar.js";
import Footer from "@/component/Footer/Footer";
import StoreProvider from "./StoreProvider";

export const metadata = {
  title: "Farhad Klie App",
  description: "Farhad Rahimi Klie App using Next Js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
          <Navbar/>
          <StoreProvider>
           {children}
          </StoreProvider>
        {/* <Footer/> */}
      </body>
    </html>
  );
}
