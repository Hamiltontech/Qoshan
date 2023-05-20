// search
import { useState } from "react";
import BreadCrumb2 from "./BreadCrumb2";
import FeaturedItem from "./FeaturedItem";
import FilterTopBar from "../../common/listing/FilterTopBar";
import GridListButton from "../../common/listing/GridListButton";
import ShowFilter from "../../common/listing/ShowFilter";
import SidebarListing2 from "../../common/listing/SidebarListing2";
import Pagination from "../../common/blog/Pagination";

const FilterAllProperties = () =>{
    const [keyword, setKeyword] = useState("")
    const [location, setLocation] = useState("")
    const [status, setStatus] = useState("")
    const [type, setType] = useState("")
    const [bathrooms, setBathroom] = useState("")
    const [bedrooms, setBedroom] = useState("")
    const [garages, setGarages] = useState("")
    const [age, setBuiltYear] = useState("")
    const [minarea, setAreaMin] = useState('أقل مساحة')
    const [maxarea, setAreaMax] = useState("أكبر مساحة")
    const [minprice, setMinprice] = useState('أقل سعر')
    const [maxprice, setMaxprice] = useState("أعلى سعر")


return(

<section className="our-listing bgc-f7 pb30-991 mt85 md-mt0 " >
<div className="container">
  <div className="row">
    <div className="col-lg-6">
      <BreadCrumb2 />
    </div>
    {/* End .col */}

    <div className="col-lg-6 position-relative">
      <div className="listing_list_style mb20-xsd tal-991">
        <GridListButton />
      </div>
      {/* End list grid */}

      <div className="dn db-991 mt30 mb0">
        <ShowFilter />
      </div>
      {/* ENd button for mobile sidebar show  */}
    </div>
    {/* End .col filter grid list */}
  </div>
  {/* End Page Breadcrumb and Grid,List and filter Button */}

  <div className="row" dir="rtl">
    <div className="col-lg-4 col-xl-4">
      <div className="sidebar-listing-wrapper">
        <SidebarListing2 
        setKeyword={setKeyword}
        setLocation={setLocation} 
        setStatus={setStatus} 
        setType={setType} 
        setGarages={setGarages} 
        setBathroom={setBathroom} 
        setBedroom={setBedroom} 
        setAreaMax={setAreaMax} 
        setAreaMin={setAreaMin}
        setBuiltYear={setBuiltYear}
        setMinprice={setMinprice}
        setMaxprice={setMaxprice}

        keyword={keyword}
        location={location} 
        status={status} 
        type={type} 
        garages={garages} 
        bathrooms={bathrooms} 
        bedrooms={bedrooms} 
        minarea={minarea} 
        maxarea={maxarea}
        age={age}
        maxprice={maxprice}
        minprice={minprice}
        />
      </div>
      {/* End SidebarListing */}

      <div
        className="offcanvas offcanvas-start offcanvas-listing-sidebar"
        tabIndex="-1"
        id="sidebarListing"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">Advanced Search</h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        {/* End .offcanvas-heade */}

        <div className="offcanvas-body">
          <SidebarListing2 />
        </div>
      </div>
      {/* End mobile sidebar listing  */}
    </div>
    {/* End sidebar conent */}

    <div className="col-md-12 col-lg-8">
      <div className="grid_list_search_result ">
        <div className="row align-items-center">
          <FilterTopBar />
        </div>
      </div>
      {/* End .row */}
      {/* End .row */}

      <div className="row">
        <FeaturedItem
        keyword={keyword}
        location={location} 
        status={status} 
        type={type} 
        garages={garages} 
        bathrooms={bathrooms} 
        bedrooms={bedrooms} 
        minarea={minarea} 
        maxarea={maxarea}
        age={age}
        maxprice={maxprice}
        minprice={minprice}

        />
      </div>
      {/* End .row */}

      <div className="row">
        {/* <div className="col-lg-12 mt20">
          <div className="mbp_pagination">
            <Pagination />
          </div>
        </div> */}
        {/* End paginaion .col */}
      </div>
      {/* End .row */}
    </div>
    {/* End  page conent */}
  </div>
  {/* End .row */}
</div>
</section>
)

}

export default FilterAllProperties