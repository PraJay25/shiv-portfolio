import type { AppProps } from "next/app";
import { ThemeProvider } from "@/context/ThemeProvider";
import "../styles/globals.css";
import Layout from "@/components/Layout/Layout";
import MotionLayout from "@/components/MotionLayout/MotionLayout";
import { AnimatePresence } from "framer-motion";
import "@/components/GlobeCanvas/style.css";
import Script from "next/script"; // ✅ Import Next.js Script

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* ✅ Load TagCanvas before any UI mounts */}
      <Script
        src="https://www.goat1000.com/tagcanvas.min.js"
        strategy="beforeInteractive"
      />

      <ThemeProvider>
        <AnimatePresence mode="wait">
          <MotionLayout>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </MotionLayout>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}
