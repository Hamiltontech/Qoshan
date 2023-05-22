import Link from "next/link";
import { useEffect, useState } from "react";
import HeaderMenuContent from "../common/header/HeaderMenuContent";
import WhatsAppButton from './whatsapp'

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
    <div className="top-header d-flex align-items-center justify-content-between py-2 px-3" style={{ backgroundColor: "#232323" }}>
       <WhatsAppButton />
      <div className="social-media-links" style={{ backgroundColor: "#1f1f1f", padding: "10px 0", position: "absolute", zIndex: 2, top: 0, left: 0, right: 0, display: "none" }}>
        {/* Add your social media links here */}
        {/* Example: */}

      

        <a href="https://example.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://example.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        {/* Add more social media links as needed */}
      </div>

      <header className={`header-nav menu_style_home_one style2 home8  navbar-scrolltofixed stricky main-menu rtl ${navbar ? "stricky-fixed " : ""}`} style={{ display: "block" }}>
        <div className="container-fluid p-0">
          {/* site logo brand */}
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <Link href="/">
                <a className="me-3">
                  <img
                    className="logo1 img-fluid"
                    src="https://res.cloudinary.com/dhk7qsnfv/image/upload/v1684257816/header-logo2_bawqi1.svg"
                    alt="header-logo2.svg"
                    style={{ height: 80 }}
                  />
                </a>
              </Link>
              <Link href="/">
                <a className="position-relative" style={{ marginRight: 15, marginLeft: 15 }}>
                  <img
                    className="logo img-fluid winner"
                    src="https://res.cloudinary.com/dhk7qsnfv/image/upload/v1684257815/winner-land_jm56zk.webp"
                    alt="header-logo2.svg"
                    style={{ height: 80 }}
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
    </div>
  );
};

export default Header;
