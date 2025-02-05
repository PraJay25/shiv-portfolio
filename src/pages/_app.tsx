import type { AppProps } from "next/app";
import { ThemeProvider } from "@/context/ThemeProvider";
import "../styles/globals.css";
import Layout from "@/components/Layout/Layout";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
