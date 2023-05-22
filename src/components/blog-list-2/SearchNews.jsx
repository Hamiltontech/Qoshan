import BreadCrumbBlog from "./BreadCrumbBlog";
import Blog from "./Blog";
import BlogSidebar from "../common/blog/BlogSidebar";
import Pagination from "../common/blog/Pagination";
import { useState, useEffect } from "react";
import axios from "axios";

const SearchNews = ()=>{
    const [articles, setArticles] = useState([])
    const [keyword, setKeyword] = useState("")

    useEffect(()=>{
      axios.get("https://strapi-125841-0.cloudclusters.net/api/articles?populate=*").then((res)=>{
        setArticles(res?.data?.data)
    }).catch((err)=>{
      console.log(err)
    })
    }, [])

    return(
        <>
              {/* <!-- Main Blog Post Content --> */}
      <section className="blog_post_container bgc-f7" dir="rtl">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <BreadCrumbBlog />
            </div>
          </div>
          {/* End .row */}

          <div className="row">
            <div className="col-lg-8">
              <div className="row">
                <Blog articles={articles} keyword={keyword} setKeyword={setKeyword}/>
                {/* End blog item */}
              </div>
              {/* End .row */}

              <div className="row">
                <div className="col-lg-12">
                  <div className="mbp_pagination mt20">
                    <Pagination />
                  </div>
                  {/* End .mbp_pagination */}
                </div>
              </div>
              {/* End .row */}
            </div>
            {/* End .col */}

            <div className="col-lg-4 col-xl-4">
              <BlogSidebar keyword={keyword} setKeyword={setKeyword}/>
            </div>
            {/* End Sidebar column */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
        </>
    )
}

export default SearchNews;