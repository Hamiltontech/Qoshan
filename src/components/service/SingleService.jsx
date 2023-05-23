import axios from "axios";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";

const SingleService = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://strapi-125841-0.cloudclusters.net/api/qoshan-shorts?populate=*")
      .then((response) => {
        const res = response.data.data;
        setData(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      {data.map((item) => (
        <div className="col-sm-6 col-md-6 col-lg-4" key={item.id}>
          <div className="service_grid">
            <div className="thumb">
              <ReactPlayer
                url={'https://strapi-125841-0.cloudclusters.net' +item.attributes?.Video?.data?.attributes?.url}
                width="100%"
                height="auto"
                style={{ borderRadius: "8px" }}
                controls
              />
            </div>
            <div className="details text-center">
              <h4>{item.attributes?.Title}</h4>
              <span>
                {item.attributes?.Description}
              </span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default SingleService;
