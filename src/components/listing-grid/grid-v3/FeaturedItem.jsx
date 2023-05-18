import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLength } from "../../../features/properties/propertiesSlice";
import properties from "../../../data/properties";
import axios from "axios";
import {TfiRulerAlt} from 'react-icons/tfi'
import {BiBath} from 'react-icons/bi'
import {IoBedOutline} from 'react-icons/io5'

const FeaturedItem = () => {


  // diala
const [property, setProeprty] = useState([])

useEffect(()=>{
  axios.get("https://strapi-125841-0.cloudclusters.net/api/proerties?populate=*").then((res)=>{
    setProeprty(res?.data?.data)
}).catch((err)=>{
  console.log(err)
})
}, [])

  // const {
  //   keyword,
  //   location,
  //   status,
  //   propertyType,
  //   price,
  //   bathrooms,
  //   bedrooms,
  //   garages,
  //   yearBuilt,
  //   area,
  //   amenities,
  // } = useSelector((state) => state.properties);
  const { statusType, featured, isGridOrList } = useSelector(
    (state) => state.filter
  );

  // const dispatch = useDispatch();

  // // keyword filter
  // const keywordHandler = (item) =>
  //   item.title.toLowerCase().includes(keyword?.toLowerCase());

  // // location handler
  // const locationHandler = (item) => {
  //   return item.location.toLowerCase().includes(location.toLowerCase());
  // };

  // // status handler
  // const statusHandler = (item) =>
  //   item.type.toLowerCase().includes(status.toLowerCase());

  // // properties handler
  // const propertiesHandler = (item) =>
  //   item.type.toLowerCase().includes(propertyType.toLowerCase());

  // // price handler
  // const priceHandler = (item) =>
  //   item.price < price?.max && item.price > price?.min;

  // // bathroom handler
  // const bathroomHandler = (item) => {
  //   if (bathrooms !== "") {
  //     return item.itemDetails[1].number == bathrooms;
  //   }
  //   return true;
  // };

  // // bedroom handler
  // const bedroomHandler = (item) => {
  //   if (bedrooms !== "") {
  //     return item.itemDetails[0].number == bedrooms;
  //   }
  //   return true;
  // };

  // // garages handler
  // const garagesHandler = (item) =>
  //   garages !== ""
  //     ? item.garages?.toLowerCase().includes(garages.toLowerCase())
  //     : true;

  // // built years handler
  // const builtYearsHandler = (item) =>
  //   yearBuilt !== "" ? item?.built == yearBuilt : true;

  // // area handler
  // const areaHandler = (item) => {
  //   if (area.min !== 0 && area.max !== 0) {
  //     if (area.min !== "" && area.max !== "") {
  //       return (
  //         parseInt(item.itemDetails[2].number) > area.min &&
  //         parseInt(item.itemDetails[2].number) < area.max
  //       );
  //     }
  //   }
  //   return true;
  // };

  // // advanced option handler
  // const advanceHandler = (item) => {
  //   if (amenities.length !== 0) {
  //     return amenities.find((item2) =>
  //       item2.toLowerCase().includes(item.amenities.toLowerCase())
  //     );
  //   }
  //   return true;
  // };

  // // status filter
  // const statusTypeHandler = (a, b) => {
  //   if (statusType === "recent") {
  //     return a.created_at + b.created_at;
  //   } else if (statusType === "old") {
  //     return a.created_at - b.created_at;
  //   } else if (statusType === "all-status") {
  //     return a.created_at + b.created_at;
  //   }
  // };

  // // featured handler
  // const featuredHandler = (item) => {
  //   if (featured !== "") {
  //     if (featured === "featured-all") {
  //       return item;
  //     }
  //     return item.featured === featured;
  //   }
  //   return true;
  // };

  // status handler
  // let content = property
  //   ?.slice(10, 16)
  //   ?.filter(keywordHandler)
  //   ?.filter(locationHandler)
  //   ?.filter(statusHandler)
  //   ?.filter(propertiesHandler)
  //   ?.filter(priceHandler)
  //   ?.filter(bathroomHandler)
  //   ?.filter(bedroomHandler)
  //   ?.filter(garagesHandler)
  //   ?.filter(builtYearsHandler)
  //   ?.filter(areaHandler)
  //   ?.filter(advanceHandler)
  //   ?.sort(statusTypeHandler)
  //   ?.filter(featuredHandler)
  //   .map((item) => (
return(

<>
{property?.map((item)=>(

// {/* <Link href={`/details/${item?.attributes?.URL}`} > */}
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
        {/* <ul className="tag mb0">
          {item.attributes?.property_tags?.data.map((val, i) => (
            <li className="list-inline-item" key={i}>
              <a href="#">{val}</a>
            </li>
          ))}
        </ul> */}
        {/* <ul className="icon mb0">
          <li className="list-inline-item">
            <a href="#">
              <span className="flaticon-transfer-1"></span>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#">
              <span className="flaticon-heart"></span>
            </a>
          </li>
        </ul> */}

        
          <a className="fp_price">
          {item?.attributes?.Price?.slice(0,3)},{item?.attributes?.Price?.slice(3)} دينار أردني 
          </a>
        

      </div>
    </div>
    <div className="details">
      <div className="tc_content">
        {/* <p className="text-thm">{item?.attributes?.type?.data?.attributes?.Name}</p> */}
        <h4>
          {/* <Link href={`/details/${item?.attributes?.URL}`}> */}
            <h5>{item?.attributes?.Name}</h5>
          {/* </Link> */}
        </h4>


{/* location */}
        <div style={{display: 'flex', gap: '2px', }}>
                  <span className="flaticon-maps-and-flags" /> <p >{item?.attributes?.areas?.data?.attributes?.Name}</p>
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
       
        {/* <ul className="prop_details mb0">
          {item.itemDetails.map((val, i) => (
            <li className="list-inline-item" key={i}>
              <a href="#">
                {val.name}: {val.number}
              </a>
            </li>
          ))}
        </ul> */}
      </div>
      {/* End .tc_content */}

      <div className="fp_footer">
        {/* <ul className="fp_meta float-start mb0"> */}
          {/* <li className="list-inline-item">
            <Link href="/agent-v1">
              <a>
                <img src={'https://strapi-125841-0.cloudclusters.net' + item?.attributes?.Featured?.data?.attributes?.formats?.large?.url} alt="pposter1.png" />
              </a>
            </Link>
          </li> */}
          {/* <li className="list-inline-item">
            <Link href="/agent-v1">
              <a>{item?.attributes?.Name}</a>
            </Link>
          </li> */}


{/* details */}
<Link href={`/details/${item?.attributes?.URL}`}>
                <button className="btn btn-thm" type="submit">تفاصيل</button>
                </Link>

{/* <ul className="tag ">
  {item?.attributes?.property_tags?.data?.map((item)=>(
 <li className="list-inline-item" style={{color: 'white', backgroundColor: '#c2b49a', paddingLeft: '10px',paddingRight: '10px', borderRadius: '6px'}}>
 {item?.attributes?.Tag}
</li>
  ))} </ul> */}

        {/* </ul> */}
        {/* <div className="fp_pdate float-end">{item.postedYear}</div> */}
      </div>
      {/* End .fp_footer */}
      
    </div>
  </div>
</div>
// </Link>
))}
</>


)}


  


  



export default FeaturedItem;
