import {
  addKeyword,
} from "../../features/properties/propertiesSlice";
import PricingRangeSlider from "./PricingRangeSlider";
import {useState, useEffect} from 'react'
import Link from "next/link";
import axios from "axios";

const GlobalFilter = ({ className = "" }) => {
  const [area, setArea] = useState([])
  useEffect(()=>{
    axios.get("https://strapi-125841-0.cloudclusters.net/api/areas?pagination[start]=0&pagination[limit]=1000").then((response)=>{
      setArea(response.data.data)
    })
}, [])


  // values of search
const [type, setType] = useState("all")
const [location, setLocation] = useState("")
const [keyword, setKeyword] = useState("")
const [minPrice, setMinPrice] = useState("أقل سعر")
const [maxPrice, setMaxPrice] = useState("أعلى سعر")


const handleError = ()=>{
  document.getElementById("error").innerHTML = "الرجاء ادخال معلومات البحث"
}


  return (
    <div className={`home1-advnc-search ${className}`}>
      <ul className="h1ads_1st_list mb0">


        {/* keyword */}
        <li className="list-inline-item" style={{width: "50%", marginBottom: "10px"}}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              style={{width: '100%'}}
              placeholder="أدخل كلمة للبحث"
              onChange={(e) => setKeyword(e.target.value)}
            />
          </div>
        </li>
     

        {/* type */}
        <li className="list-inline-item">
          <div className="search_option_two">
            <div className="candidate_revew_select">
              <select 
              value={type}
              onChange={(e) => setType(e.target.value)} 
              className="selectpicker w100 form-select show-tick">
                <option value="">نوع العقار</option>
                <option value="شقق">شقق</option>
                <option value="شقق طابقية">شقق طابقية</option>
                <option value="فلل متلاصقة">فلل متلاصقة</option>
                <option value="فلل">فلل</option>
                <option value="قطع أراضي سكنية">قطع أراضي سكنية</option>
                <option value="قطع أراضي تجارية">قطع أراضي تجارية</option>
                <option value="قطع أراضي صناعية">قطع أراضي صناعية</option>
                <option value="برج سكني">برج سكني</option>
                <option value="استوديوهات">استوديوهات</option>
                <option value="شاليهات">شاليهات</option>
              </select>
            </div>
          </div>
        </li>
       

        
        {/* location */}
        <li className="list-inline-item">
          <div className="search_option_two">
            <div className="candidate_revew_select">
              <select 
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="selectpicker w100 form-select show-tick">
                <option value="">جميع المناطق</option>
                {area?.map((item)=>(
                  <>
                  <option value={item?.attributes?.Name}>{item?.attributes?.Name}</option>
                  </>
                ))}
              </select>
            </div>
          </div>
        </li>
   

       {/* price */}
        {/* <li className="list-inline-item">
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
        </li> */}





     {/* price range */}
     <li className=" list-inline-item">
        <div className="form-group ">
          <input
          value={minPrice}
            type="number"
            className="form-control"
            placeholder="اقل سعر"
            onChange={(e) => setMinPrice(e.target.value)}
          />
        </div>
      </li>
      {/* End li */}



      <li className="list-inline-item">
        <div className="form-group">
          <input
          value={maxPrice}
            type="number"
            className="form-control"
            id="exampleInputName3"
            placeholder="أعلى سعر"
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </div>
      </li>
      {/* End li */}

      <li className="custome_fields_520 list-inline-item"></li>



   <li className="list-inline-item">
          <div className="search_option_button">
            <Link
            href={{
              pathname: "all-properties",
              query: {
                  keyword: keyword,
                  area: location,
                  type: type,
                  minPrice: minPrice,
                  maxPrice: maxPrice
                 
              }
          }}>
            <button
              type="submit"
              className="btn btn-thm"
            >
              بحث
            </button>
            </Link>
          </div>
        </li>

  
        
       

      </ul>
    </div>
  );
};

export default GlobalFilter;
