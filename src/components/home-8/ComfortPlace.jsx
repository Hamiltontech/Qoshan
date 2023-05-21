import Link from "next/link";
import comfortPlace from "../../data/comfortPlace";
import {BiBath} from 'react-icons/bi'
import {IoBedOutline} from 'react-icons/io5'
import {TfiRulerAlt} from 'react-icons/tfi'

const ComfortPlace = ({data}) => {
  return (
    <>
      {data?.map((item) => (
        <div className="col-sm-6 col-lg-3" key={item?.id} dir="rtl">
          <Link href={`details/${item?.attributes?.URL}`}>
            <a
              className="icon_hvr_img_box image-1 d-block"
              style={{
                backgroundImage: `url(${'https://strapi-125841-0.cloudclusters.net' + item?.attributes?.Featured?.data?.attributes?.formats?.large?.url})`,
              }}
            >
              <div className="overlay">
                {/* <div className="">
                  <span className={item?.attributes?.type?.data?.attributes?.Name}></span>
                </div> */}
                <div className="details" >
                  <h4 style={{color: 'white'}}>{item?.attributes?.Name}</h4>
                  <p style={{color: 'white'}}>  <span className="flaticon-maps-and-flags" /> {item?.attributes?.areas?.data?.attributes?.Name}  </p>

                    <div style={{display: "flex", gap: "10px", justifyContent: "center"}}>
                    <p style={{color: 'white'}}> <TfiRulerAlt size={20} /> {item?.attributes?.Area}  متر مربع</p>
                  <p style={{color: 'white'}}> <IoBedOutline size={20} /> {item?.attributes?.Bedrooms} </p>
                  <p style={{color: 'white'}}> <BiBath size={20} /> {item?.attributes?.Bathrooms} </p>
                  </div>
                </div>
              </div>
            </a>
          </Link>
        </div>
      ))}
    </>
  );
};

export default ComfortPlace;
