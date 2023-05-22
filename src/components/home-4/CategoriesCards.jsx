import Link from "next/link";
import comfortPlace from "../../data/comfortPlace";

const CategoriesCards = () => {
  return (
    <>
      {comfortPlace.map((item) => (
        <div className="col-sm-6 col-lg-3" key={item.id}>
          <Link href="/all-properties">
            <a
              className="icon_hvr_img_box image-1 d-block"
              style={{
                backgroundImage: `url(${item.bgImg})`,
              }}
            >
              <div className="overlay">
                <div className="icon">
                  <span style={{color: 'white'}} className={item.icon}></span>
                </div>
                <div className="details">
                  <h4 style={{color: 'white'}}>{item.name}</h4>
                  
                </div>
              </div>
            </a>
          </Link>
        </div>
      ))}
    </>
  );
};

export default CategoriesCards;
