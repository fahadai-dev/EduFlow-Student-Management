import { Link, useLocation } from "react-router-dom";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>EduFlow</div>

      {/* className চেক করুন, styles.menuItem ই হতে হবে */}
      <Link
        to="/"
        className={`${styles.menuItem} ${location.pathname === "/" ? styles.active : ""}`}
      >
        Dashboard
      </Link>

      <Link
        to="/students"
        className={`${styles.menuItem} ${location.pathname === "/students" ? styles.active : ""}`}
      >
        Students
      </Link>

      <Link
        to="/courses"
        className={`${styles.menuItem} ${location.pathname === "/courses" ? styles.active : ""}`}
      >
        Courses
      </Link>
    </div>
  );
};

export default Sidebar;
