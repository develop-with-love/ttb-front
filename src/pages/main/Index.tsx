import { Outlet } from "react-router-dom";
import Header from "../../layouts/Header";

const MainIndex: React.FC = () => {
  return (
    <div>
      <Header />
      <div style={{ height: "calc(100vh - 70px)" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default MainIndex;
