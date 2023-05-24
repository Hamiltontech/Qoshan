import { useState } from "react";
import ReactMarkdown from "react-markdown";


const PropertyDescriptions = ({property}) => {
  // const [click, setClick] = useState(true);
  // const handleClick = () => setClick(!click);



  return (
    <>
     <p><ReactMarkdown>{property?.attributes?.Description}</ReactMarkdown></p>
    </>
  );
};

export default PropertyDescriptions;
