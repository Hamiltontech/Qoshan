import CallToAction from "../common/CallToAction";
import CopyrightFooter from "../common/footer/CopyrightFooter";
import Footer from "../common/footer/Footer";
import Header from "../home-8/Header";
import MobileMenu from "../common/header/MobileMenu";
import PopupSignInUp from "../common/PopupSignInUp";
import BreadCrumbBanner from "./BreadCrumbBanner";
import SingleService from "./SingleService";
import axios from "axios";
import { useEffect, useState } from "react";

const index = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    axios
      .get("https://strapi-125841-0.cloudclusters.net/api/qoshan-shorts?populate=*")
      .then((response) => {
        const res = response.data.data;
        setData(res);
        console.log(data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      {/* <!-- Main Header Nav --> */}
      <Header />

      {/* <!--  Mobile Menu --> */}
      <MobileMenu />

      {/* <!-- Modal --> */}

      {/* <!-- Inner Page Breadcrumb --> */}
      <BreadCrumbBanner />

      {/* <!-- Service Section Area --> */}
      <section className="our-service pb30">
        <div className="container">
          <div className="row">
            <SingleService />
          </div>
        </div>
      </section>

      {/* <!-- Start Call to Action --> */}

      {/* <!-- Our Footer --> */}
      <section className="footer_one">
        <div className="container">
          <div className="row">
            <Footer />
          </div>
        </div>
      </section>

      {/* <!-- Our Footer Bottom Area --> */}
      <section className="footer_middle_area pt40 pb40">
        <div className="container">
          <CopyrightFooter />
        </div>
      </section>
    </>
  );
};

export default index;
