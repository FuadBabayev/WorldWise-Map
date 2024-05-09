import Sidebar from "../components/SideBar";
import Map from "../components/Map";
import styles from "./AppLayout.module.css";
import User from "../components/User";
// import ProtectedRoute from "./ProtectedRoute";

function AppLayout() {
  return (
    // <ProtectedRoute>       // ! We can do both in here and in App.jsx
      <div className={styles.app}>
        <Sidebar />
        <Map />
        <User />
      </div>
    // </ProtectedRoute>
  );
}

export default AppLayout;
