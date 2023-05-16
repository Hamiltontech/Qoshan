import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import CopyrightFooter from "../../components/common/footer/CopyrightFooter";
import Footer from "../../components/common/footer/Footer";
import Header from "../../components/home-8/Header";
import MobileMenu from "../../components/common/header/MobileMenu";
import DetailsContent from "../../components/listing-details-v1/DetailsContent";
import Sidebar from "../../components/listing-details-v1/Sidebar";
import axios from "axios";

const ListingDynamicDetailsV1 = () => {

  const router = useRouter();
  const [property, setProperty] = useState({});
  const id = router.query.id;




   // diala

   useEffect(()=>{
     axios.get("https://strapi-125841-0.cloudclusters.net/api/proerties?populate=*").then((response)=>{
       const res = response.data.data
       const prop = res?.find((item)=>item.id == id)
       setProperty(prop)
     }).catch((error)=>{
       console.log(error)
     })
   }, [id])
  

  return (
    <>
      {/* <!-- Main Header Nav --> */}
      {/* <Header /> */}
      {/* <!--  Mobile Menu --> */}
      
      <Header/>
      <MobileMenu />
      {/* <!-- Listing Single Property --> */}
      <section className="listing-title-area mt85 md-mt0" dir="rtl">
        <div className="container">
          <Gallery>
            <div className="row mb30">
              <div className="col-lg-7 col-xl-8">
                <div className="single_property_title mt30-767">
               
                  <h2>{property?.attributes?.Name}</h2>

                  {/* location */}
                  <div style={{display: 'flex', gap: '2px', }}>
                  <span className="flaticon-maps-and-flags" /> <p style={{ fontSize: '16px'}}>{property?.attributes?.areas?.data?.attributes?.Name}</p>
                  </div>


                  {/* share */}
                  <li className="list-inline-item">
                        <a href="#">
                          <span className="flaticon-share">مشاركة العقار</span>
                        </a>
                      </li>
                </div>
              </div>
              <div className="col-lg-5 col-xl-4">
                <div className="single_property_social_share position-static transform-none">
                  <div className="price float-start fn-400">
                    {/* price */}
                    <h2>
                    {property?.attributes?.Price?.slice(0,3)},{property?.attributes?.Price?.slice(3)} دينار أردني 
                    </h2>
                  </div>
                 
                </div>
              </div>
            </div>
            {/* End .row */}

            <div className="row">
              <div className="col-sm-7 col-lg-8">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="spls_style_two mb30-520">
                      <Item
                        original={'https://strapi-125841-0.cloudclusters.net' + property?.attributes?.Featured?.data?.attributes?.formats?.large?.url}
                        thumbnail={'https://strapi-125841-0.cloudclusters.net' + property?.attributes?.Featured?.data?.attributes?.formats?.large?.url}
                        width={752}
                        height={450}
                      >
                        {({ ref, open }) => (
                          <div role="button" ref={ref} onClick={open}>
                            <img
                              className="img-fluid w100 cover lds-1"
                              src={'https://strapi-125841-0.cloudclusters.net' + property?.attributes?.Featured?.data?.attributes?.formats?.large?.url}
                              alt="1.jpg"
                            />
                          </div>
                        )}
                      </Item>
                    </div>
                  </div>
                </div>
              </div>
              {/* End .col-sm-7 .col-lg-8 */}

              <div className="col-sm-5 col-lg-4">
                <div className="row">
                  {property?.attributes?.Gallery?.data?.map((val, i) => (
                    <div className="col-6" key={i}>
                      <div className="spls_style_two img-gallery-box mb24">
                        <Item
                          original={'https://strapi-125841-0.cloudclusters.net' + val?.attributes?.url}
                          thumbnail={'https://strapi-125841-0.cloudclusters.net' + val?.attributes?.url}
                          width={752}
                          height={450}
                        >
                          {({ ref, open }) => (
                            <div role="button" ref={ref} onClick={open}>
                              <img
                                className="img-fluid w100"
                                src={'https://strapi-125841-0.cloudclusters.net' + val?.attributes?.url}
                                alt="2.jpg"
                              />
                            </div>
                          )}
                        </Item>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* End  col-sm-5 col-lg-4 */}
            </div>
            {/* End .row */}
          </Gallery>
        </div>
      </section>

      {/* <!-- Agent Single Grid View --> */}
      <section className="our-agent-single bgc-f7 pb30-991" dir="rtl">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-8">
              <DetailsContent property={property}/>
            </div>
            {/* End details content .col-lg-8 */}

            <div className="col-lg-4 col-xl-4">
              <Sidebar />
            </div>
            {/* End sidebar content .col-lg-4 */}
          </div>
          {/* End .row */}
        </div>
      </section>

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

export default ListingDynamicDetailsV1;
