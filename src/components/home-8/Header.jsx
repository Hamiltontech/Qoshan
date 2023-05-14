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
      className={`header-nav menu_style_home_one style2 home8  navbar-scrolltofixed stricky main-menu  ${
        navbar ? "stricky-fixed " : ""
      }`}
    >
      <div className="container-fluid p0">
        {/* <!-- Ace Responsive Menu --> */}

     
        {/* site logo brand */}

        <nav>
          <HeaderMenuContent float="float-start" />
        </nav>
           <Link href="/">
          <a className="float-end">
            <img
              className="logo1 img-fluid"
              src="assets/images/header-logo2.svg"
              alt="header-logo2.svg"
            />
            {/* <img
              className="logo2 img-fluid"
              src="assets/images/header-logo2.svg"
              alt="header-logo2.svg"
            /> */}
            <img
              className="logo img-fluid"
              src="assets/images/winner.webp"
              alt="header-logo2.svg"
            />
          </a>
        </Link>
        {/* End .navbar */}
      </div>
    </header>
    // {/* <!-- /.theme-main-menu --> */}
  );
};

export default Header;
