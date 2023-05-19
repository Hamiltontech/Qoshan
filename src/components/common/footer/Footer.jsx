import Link from "next/link";
import Social from "./Social";
import SubscribeForm from "./SubscribeForm";

const Footer = () => {
  return (
    <>
   
      {/* End .col */}

      <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3 p-10">
        <div className="footer_qlink_widget">
          <ul className="list-unstyled">
            <li>
              <Link href="/">
                <a>فلل مستقلة في دابوق للبيع</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>شقق أرضية في عبدون للبيع</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>رووف مع تراس بإطلالة مميزة </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>شقق طابقية في أم أذنية للبيع</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>شقق دوبلكيس في عبدون للبيع</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* End .col */}
      <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3 p-10">
        <div className="footer_qlink_widget">
          <ul className="list-unstyled">
            <li>
              <Link href="/">
                <a>فلل مستقلة في دابوق للبيع</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>شقق أرضية في عبدون للبيع</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>رووف مع تراس بإطلالة مميزة </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>شقق طابقية في أم أذنية للبيع</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>شقق دوبلكيس في عبدون للبيع</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      
      {/* End .col */}

      <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3 p-10">
        <div className="footer_qlink_widget">
          <ul className="list-unstyled">
            <li>
              <Link href="/">
                <a>فلل مستقلة في دابوق للبيع</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>شقق أرضية في عبدون للبيع</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>رووف مع تراس بإطلالة مميزة </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>شقق طابقية في أم أذنية للبيع</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>شقق دوبلكيس في عبدون للبيع</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* End .col */}

      <div className="col-sm-4 col-md-6 col-lg-3 col-xl-3 p-10">
        <div className="footer_qlink_widget">
          <ul className="list-unstyled">
            <li>
              <Link href="/">
                <a>فلل مستقلة في دابوق للبيع</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>شقق أرضية في عبدون للبيع</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>رووف مع تراس بإطلالة مميزة </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>شقق طابقية في أم أذنية للبيع</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>شقق دوبلكيس في عبدون للبيع</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* End .col */}

      <div className="col-sm-6 col-md-6 col-lg-3 col-xl-6" style={{marginTop: 20}}>
        <div className="footer_contact_widget">
          <h4>تواصل معنا</h4>
          <ul className="list-unstyled">
            <li>
              <a href="mailto:info@findhouse.com">info@qoshan.com</a>
            </li>
            <li>
              <a href="#">العنوان :الدوار السابع ، مجمع الشروقي</a>
            </li>
            
            <li>
              <a href="tel:+962-796-868-500">+962-796-868-500</a>
            </li>
            
          </ul>
        </div>
      </div>
      {/* End .col */}

      <div className="col-sm-6 col-md-6 col-lg-3 col-xl-6" style={{marginTop: 20}}> 
        <div className="footer_social_widget">
          <h4>تابعنا</h4>
          <ul className="mb30">
            <Social />
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
