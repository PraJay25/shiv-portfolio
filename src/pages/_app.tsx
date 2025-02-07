import type { AppProps } from "next/app";
import { ThemeProvider } from "@/context/ThemeProvider";
import "../styles/globals.css";
import Layout from "@/components/Layout/Layout";
import MotionLayout from "@/components/MotionLayout/MotionLayout";
import { AnimatePresence } from "framer-motion";

export default function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ThemeProvider>
      <AnimatePresence mode="wait">
        <MotionLayout>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </MotionLayout>
      </AnimatePresence>
    </ThemeProvider>
  );
}
