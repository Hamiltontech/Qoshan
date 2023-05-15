import Link from "next/link";
import Slider from "react-slick";


const FeaturedProperties = ({featured}) => {
console.log(featured)


  const settings = {
    dots: false,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay: false,
    speed: 1200,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
        },
      },
    ],
  };

  return (
    <>

    {/* should be featured.slice(0,12).map */}
 <Slider {...settings} arrows={true}>
 {featured?.slice(0,12)?.map((item) => (
  <div className="item" key={item?.id} dir="rtl">
    <div className="feat_property home3">
      <div className="thumb">
        <img className="img-whp" src={'https://strapi-125841-0.cloudclusters.net' + item?.attributes?.Featured?.data?.attributes?.formats?.large?.url} alt="fp1.jpg" />
        <div className="thmb_cntnt">

          {/* tags */}
          <ul className="tag mb0">
          <li className="list-inline-item">
            <a href="#">!Tags Here</a>
          </li>
          </ul>

          {/* {properties.map((it)=>(
            <ul className="tag mb0">
            {it.saleTag.map((val, i) => (
              <li className="list-inline-item" key={i}>
                <a href="#">{val}</a>
              </li>
            ))}
          </ul>
            ))} */}
          

          

          <Link href={`/listing-details-v1/${item?.id}`}>
            <a className="fp_price">
            {item?.attributes?.Price?.slice(0,3)},{item?.attributes?.Price?.slice(3)} دينار أردني

            </a>
          </Link>
        </div>
      </div>

      <div className="details">
        <div className="tc_content">
          <p className="text-thm">{item?.attributes?.type?.data?.attributes?.Name}</p>
          <h4>
            <Link href={`/listing-details-v1/${item?.id}`}>
              <a>{item?.attributes?.Name}</a>
            </Link>
          </h4>
          <p>
            <span className="flaticon-placeholder"></span>
            {item?.attributes?.areas?.data?.attributes?.Name}
          </p>

          <ul className="prop_details mb0">
              <li className="list-inline-item">
                <a href="#">
                  المساحة: {item?.attributes?.Area} متر مربع
                </a>
              </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
))}
</Slider>
    </>
  );
};

export default FeaturedProperties;



