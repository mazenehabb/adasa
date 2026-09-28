import { Outlet } from "react-router-dom";
import NavBar from "../components/layout/navBar/NavBar";
import Footer from "../components/layout/footer/Footer";

export default function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />

      <main className="pt-20 flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
