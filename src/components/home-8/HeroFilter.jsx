import GlobalHeroFilter from "../common/GlobalHeroFilter";

const HeroFilter = () => {
    return (
        <div className="home_content">
            <div className="home-text text-center">
                <h2 className="fz55" style={{fontSize: 30,}}>ابحث عن عقارك</h2>               
            </div>
            {/* End .home-text */}

            <GlobalHeroFilter />
        </div>
    );
};

export default HeroFilter;
