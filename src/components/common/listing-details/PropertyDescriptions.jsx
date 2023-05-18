import { useState } from "react";
import ReactMarkdown from "react-markdown";


const PropertyDescriptions = ({property}) => {
  // const [click, setClick] = useState(true);
  // const handleClick = () => setClick(!click);

  console.log(property)

  return (
    <>
     <p><ReactMarkdown>{property?.attributes?.Description}</ReactMarkdown></p>
    </>
  );
};

export default PropertyDescriptions;
