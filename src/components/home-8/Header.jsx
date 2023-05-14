import Link from "next/link";
import { useEffect, useState } from "react";
import HeaderMenuContent from "../common/header/HeaderMenuContent";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 95) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);

  return (
    
    <header
      className={`header-nav menu_style_home_one style2 home8  navbar-scrolltofixed stricky main-menu rtl ${
        navbar ? "stricky-fixed " : ""
      }`}
    >
      <div className="container-fluid p-0">
        {/* site logo brand */}
        <div className="d-flex align-items-center justify-content-between px-3">
          <div className="d-flex align-items-center">
            <Link href="/">
              <a className="me-3">
                <img
                  className="logo1 img-fluid"
                  src="assets/images/header-logo2.svg"
                  alt="header-logo2.svg"
                  style={{ height: 80 }}
                />
              </a>
            </Link>
            <Link href="/">
              <a className="position-relative" style={{ zIndex: 1000, marginBottom: -130, paddingLeft: 40, paddingRight: 40,}}>
                <img
                  className="logo img-fluid winner"
                  src="assets/images/winner.webp"
                  alt="header-logo2.svg"
                  style={{ height: 200}}
                />
              </a>
            </Link>
          </div>
          <nav className="d-flex align-items-center justify-content-center" style={{ flex: 1 }}>
            <HeaderMenuContent />
          </nav>
        </div>
        {/* End .navbar */}
      </div>
    </header>
  );
};

export default Header;
