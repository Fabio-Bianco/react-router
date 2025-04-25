import { Outlet } from "react-router-dom";
import Header from "../Header";
import MainNav from "../MainNav"
import Footer from "../Footer";


const DefaultLayout = () => {

  console.log("🧱 DefaultLayout caricato");
  return (
    <div>
      <Header />
      <MainNav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
