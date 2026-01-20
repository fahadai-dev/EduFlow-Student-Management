import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <h3 style={{ color: "#475569", margin: 0 }}>Admin Portal</h3>
      <div className={styles.userProfile}>
        <span style={{ fontWeight: "600" }}>Fahad Hossain</span>
        <div className={styles.avatar}></div>
      </div>
    </nav>
  );
};
export default Navbar;
