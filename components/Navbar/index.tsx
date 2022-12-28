import Link from "next/link";
import nav from "../../styles/Navbar.module.css";
const Navbar = () => {
  return (
    <div>
      <nav className={nav.navbar}>
        <ul className={nav.navList}>
          <li className={nav.navLink}>
            {" "}
            <Link href="/"> Home </Link>
          </li>
          <li className={nav.navLink}>
            <Link href="/about"> About</Link>
          </li>
          <li className={nav.navLink}>
            <Link href="/blogs">Blog</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
