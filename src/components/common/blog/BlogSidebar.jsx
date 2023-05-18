import Categories from "./Categories";
import FeaturedListings from "../listing/FeaturedListings";
import SearchBox from "./SearchBox";
import TagList from "./TagList";

const BlogSidebar = () => {
  return (
    <div className="blog-sidebar_widgets">
      <div className="sidebar_search_widget">
        <div className="blog_search_widget">
          <SearchBox />
        </div>
      </div>
      {/* End .sidebar_search_widget */}

  
      {/* End .Categories widget */}

      <div className="sidebar_feature_listing">
        <h4 className="title">Featured Listings</h4>
        <FeaturedListings />
      </div>
      {/* End .sidebar_feature_listing */}

    
      {/* End .blog_tag_widget */}
    </div>
  );
};

export default BlogSidebar;
