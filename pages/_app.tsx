import Layout from "@/layout/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "swiper/css";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
