import { useState } from "react";


const PropertyDescriptions = ({property}) => {
  // const [click, setClick] = useState(true);
  // const handleClick = () => setClick(!click);

  console.log(property)

  return (
    <>
     <p>{property?.attributes?.Description}</p>
    </>
  );
};

export default PropertyDescriptions;
