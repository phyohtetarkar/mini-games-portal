import { Outlet } from "react-router";
import Footer from "./footer";
import Header from "./header";

export default function RootLayout() {
  return (
    <>
      <Header />
      <main className="grow mt-16">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
