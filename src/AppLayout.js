import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import About from "./components/About";
import useOnlineStatus from "./utils/useOnlineStatus";
import OfflinePage from "./components/OfflinePage";

const AppLayout = () => {
  const isOnline = useOnlineStatus();
  return (
    <div>
      <Header />
    {isOnline ? <Outlet /> : <OfflinePage />}
      <Footer />
    </div>
  );
};



export default AppLayout;