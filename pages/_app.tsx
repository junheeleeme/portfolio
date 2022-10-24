import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../src/layout/header";
import Main from "../src/layout/main";
import Footer from "../src/layout/footer";

interface CustomAppProps extends AppProps {}

function MyApp({ Component, pageProps }: CustomAppProps) {
  return (
    <>
      <Header />
      <Main>
        <Component {...pageProps} />
      </Main>
      <Footer />
    </>
  );
}

export default MyApp;
