import Link from "next/link";

const CategoriesFilter = () => {

    const categories = [
        {name: "جميع الاخبار"},
        {name: "العقاري"},
        {name: "مشاريع وتوجهات"},
        {name: "خاص بقوشان"},
        {name: "سوق العقار"},
        {name: "سوق المال"},
        {name: "تصميم داخلي وديكورات"},
        {name: "معلومات عقارية"}
    ]

    return (
      <ul className="mb0" dir="rtl">
        {categories.map((item)=>(
            <>
            <li className="list-inline-item">
          <Link 
          href={{
            pathname: "news",
            query: {
                category: item.name,
                    }
                }}>
                    <a>{item.name}</a>
         </Link>
        </li>
            </>
        ))}
      </ul>
    );
  };
  
  export default CategoriesFilter;
  