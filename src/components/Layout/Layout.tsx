import Footer from "../Footer/Footer";
import Header from "../Header/Header";

import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
