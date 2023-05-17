import Router from "next/router";
import {
  addKeyword,
  addLocation,
} from "../../features/properties/propertiesSlice";
import PricingRangeSlider from "./PricingRangeSlider";
import CheckBoxFilter from "./CheckBoxFilter";
import GlobalSelectBox from "./GlobalSelectBox";
import {useState, useEffect} from 'react'
import axios from "axios";

const GlobalFilter = ({ className = "" }) => {

  const [area, setArea] = useState([])

  useEffect(()=>{
      axios.get("https://strapi-125841-0.cloudclusters.net/api/areas?pagination[start]=0&pagination[limit]=1000").then((response)=>{
        setArea(response.data.data)
      })
  }, [])



  console.log(area)

  area?.sort((a, b) => {
    console.log(a?.attributes?.Position - b?.attributes?.Position) ;
});

  // submit handler
  const submitHandler = () => {
    Router.push("/listing-grid-v1");
  };

  return (
    <div className={`home1-advnc-search ${className}`}>
      <ul className="h1ads_1st_list mb0">
        <li className="list-inline-item">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="أدخل كلمة للبحث"
              onChange={(e) => dispatch(addKeyword(e.target.value))}
            />
          </div>
        </li>
        {/* End li */}

        <li className="list-inline-item">
          <div className="search_option_two">
            <div className="candidate_revew_select">
              <select className="selectpicker w100 form-select show-tick">
                <option value="">نوع العقار</option>

                <option>شقق</option>
                <option>شقق طابقية</option>
                <option>فلل متلاصقة</option>
                <option>فلل</option>
                <option>قطع اراضي سكنية</option>
                <option>ستديوهات</option>
                <option>برج سكني</option>
                <option>شاليهات</option>
                <option>قطع أراضي تجاري</option>
                <option>قطع أراضي صناعي</option>
                <option>محلات</option>
                <option>مشاريع سكنية</option>
                <option>مشاريع قطع أراضي</option>
                <option>مكاتب</option>
              </select>
            </div>
          </div>
        </li>
        {/* End li */}

        
        <li className="list-inline-item">
          <div className="search_option_two">
            <div className="candidate_revew_select">
              <select className="selectpicker w100 form-select show-tick">
                <option value="">جميع المناطق</option>
                {area?.map((item)=>(
                  <>
                  <option value={item?.attributes?.URL}>{item?.attributes?.Name}</option>
                  </>
                ))}
                
                {/* <option>دير غبار</option>
                <option>دابوق</option>
                <option>خلدا</option>
                <option>الصويفية</option>
                <option>جبل عمان</option>
                <option>الدوار الرابع</option>
                <option>أم أذينة</option>
                <option>الكرسي</option>
                <option>أم السماق</option>
                <option>الرابية</option>
                <option>حجارة النوابلسة</option>
                <option>الحويطي</option>
                <option>ضاحية النخيل</option>
                <option>رجم عميش</option>
                <option>حي الصحابة</option>
                <option>شارع مكة</option>
                <option>شارع عبدالله غوشة</option>
                <option>ضاحية الامير راشد</option>
                <option>طريق المطار</option>
                <option>أم الرمانة</option>
                <option>أم زويبنة</option>
                <option>البحيرة</option> */}
              </select>
            </div>
          </div>
        </li>
        {/* End li */}

        <li className="list-inline-item">
          <div className="small_dropdown2">
            <div
              id="prncgs"
              className="btn dd_btn"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-expanded="false"
            >
              <span>السعر</span>
              <label htmlFor="InputEmail2">
                <span className="fa fa-angle-down"></span>
              </label>
            </div>
            <div className="dd_content2 dropdown-menu">
              <div className="pricing_acontent">
                <PricingRangeSlider />
              </div>
            </div>
          </div>
        </li>
        {/* End li */}

        <li className="custome_fields_520 list-inline-item">
          <div className="navbered">
            <div className="mega-dropdown ">
              <span
                className="dropbtn"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                aria-expanded="false"
              >
                المزيد <i className="flaticon-more pl10 flr-520"></i>
              </span>

              <div className="dropdown-content dropdown-menu ">
                <div className="row p15">
                  <div className="col-lg-12">
                    <h4 className="text-thm3 mb-4">مميزات العقار</h4>
                  </div>

                  <CheckBoxFilter />
                </div>
                {/* End .row */}

                <div className="row p15 pt0-xsd">
                  <div className="col-lg-12 col-xl-12">
                    <ul className="apeartment_area_list mb0">
                      <GlobalSelectBox />
                    </ul>
                  </div>
                </div>
                {/* End .row */}
              </div>
              {/* End .dropdown-menu */}
            </div>
          </div>
        </li>
        {/* End li */}

        <li className="list-inline-item">
          <div className="search_option_button">
            <button
              onClick={submitHandler}
              type="submit"
              className="btn btn-thm"
            >
              بحث
            </button>
          </div>
        </li>
        {/* End li */}
      </ul>
    </div>
  );
};

export default GlobalFilter;
