import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import {TfiRulerAlt} from 'react-icons/tfi'
import {BiBath} from 'react-icons/bi'
import {IoBedOutline} from 'react-icons/io5'
import Highlighter from "react-highlight-words";

const FeaturedItem = ({keyword, location, status, type, garages, bathrooms, bedrooms, minarea, maxarea, age, minprice, maxprice}) => {

  // diala
const [property, setProeprty] = useState([])

useEffect(()=>{
  axios.get("https://strapi-125841-0.cloudclusters.net/api/proerties?populate=*").then((res)=>{
    setProeprty(res?.data?.data)
}).catch((err)=>{
  console.log(err)
})
}, [])

  const {isGridOrList } = useSelector(
    (state) => state.filter
  );


    // area handler
    const areaHandler = (item) => {
      if (minarea !== 0 && maxarea !== 0) {
        if (minarea !== "أقل مساحة" && maxarea !== "أكبر مساحة") {
          return (
            item?.attributes?.Area >= minarea &&
            item?.attributes?.Area <= maxarea
          );
        }
      }
      return true;
    };


      // price handler
      const priceHandler = (item) => {
        
          if (minprice !== "أقل سعر" && maxprice !== "أعلى سعر") {
            return (
              parseInt(item?.attributes?.Price) >= minprice &&
              parseInt(item?.attributes?.Price) <= maxprice
            );
          
        }
        return true;
      };



return(
<>
{property?.filter(areaHandler)?.filter(priceHandler).map((item)=>{
  
if(

// location filter
item?.attributes?.areas?.data?.attributes?.Name?.toLowerCase().includes(location.toLowerCase()) &&

// type filter
item?.attributes?.type?.data?.attributes?.Name?.toLowerCase().includes(type.toLowerCase()) &&

// bathrooms filter
(item?.attributes?.Bathrooms?.toString().includes(bathrooms)) &&

// bedrooms filter
(item?.attributes?.Bedrooms?.toString().includes(bedrooms)) &&

// garages filter
(item?.attributes?.Garages?.toString().includes(garages)) &&

// keyword filter
(item?.attributes?.Name?.toLowerCase().includes(keyword.toLowerCase())
||
item?.attributes?.Description?.toLowerCase().includes(keyword.toLowerCase()))
)
{

  return(
    <>
<div
  className={`${
    isGridOrList ? "col-12 feature-list" : "col-md-6 col-lg-6"
  } `}
  key={item.id}
>
  <div
    className={`feat_property home7 style4 ${
      isGridOrList && "d-flex align-items-center"
    }`}
  >
    
    <div className="thumb">
      <img className="img-whp" src={'https://strapi-125841-0.cloudclusters.net' + item?.attributes?.Featured?.data?.attributes?.formats?.large?.url} alt="fp1.jpg" />
     
      <div className="thmb_cntnt">
          <a className="fp_price">
          {item?.attributes?.Price?.slice(0,3)},{item?.attributes?.Price?.slice(3)} دينار أردني 
          </a>
      </div>
    </div>
    <div className="details">

      <div className="tc_content">

        {/* type */}
      <ul >
        <li className="list-inline-item" style={{backgroundColor: '#404041', paddingLeft: '10px', paddingRight: '10px', color: 'white', fontSize: '11px', borderRadius: '30px'}}>
          {item?.attributes?.type?.data?.attributes?.Name}
        </li>
      </ul>

      {/* name */}
      <Highlighter 
        class="YourHighlightClass"
        searchWords={[keyword]}
        autoEscape={true}
        textToHighlight= {item?.attributes?.Name}
        />

    {/* location */}
      <div style={{display: 'flex', gap: '2px', }}>
                <span className="flaticon-maps-and-flags" /> 
                <Highlighter
                  searchWords={[location]}
                  autoEscape={true}
                  textToHighlight= {item?.attributes?.areas?.data?.attributes?.Name}
                  />
        </div>


<div style={{display: 'flex', justifyContent: 'start', gap: '20px'}}>

    {/* area */}
    <div style={{display: 'flex', gap: '2px', }}>
            <TfiRulerAlt size={20} /> <p> {item?.attributes?.Area} متر مربع</p>
      </div>

    {/* bathrooms */}
      <div style={{display: 'flex', gap: '2px', }}>
            <BiBath size={20}/> <p style={{ fontSize: '16px'}}> {item?.attributes?.Bathrooms}</p>
      </div>  

    {/* bedrooms */}
    <div style={{display: 'flex', gap: '2px', }}>
        <IoBedOutline size={20} /> <p style={{fontSize: '16px'}}> {item?.attributes?.Bedrooms}</p>
    </div>

</div>
      </div>
      {/* End .tc_content */}

      <div className="fp_footer">
       

    {/* details */}
    <Link href={`/details/${item?.attributes?.URL}`}>
        <button className="btn btn-thm" type="submit">تفاصيل</button>
    </Link>


</div>
      {/* End .fp_footer */}
    </div>
  </div>
</div>
</>
)}

 })}
</>


)}


  


  



export default FeaturedItem;
