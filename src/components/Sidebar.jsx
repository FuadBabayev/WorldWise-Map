import { Outlet } from "react-router-dom";
import AppNav from "./AppNav";
import Logo from "./Logo";
import styles from "./Sidebar.module.css";

function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <Logo />
            <AppNav />
            <Outlet />          {/* // ! Outlet ancaq lazim olan URL yazilandada meselene burada http://localhost:5173/app/cities olduqda gelecek {children} la eyni seydir */}
            <p>List of Cities</p>
            <footer className={styles.footer}>
                <p className={styles.copyright}>&copy; Copyright {new Date().getFullYear()} by WorldWise Inc.</p>
            </footer>
        </div>
    )
}

export default Sidebar
