import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    try {
      const response = await axios.post(
        'https://strapi-125841-0.cloudclusters.net/api/submissions',
        {
          data: {
            Name: formData.get('name'),
            phone: formData.get('phone'),
            email: formData.get('email'),
            larea: formData.get('larea'),
            Area: formData.get('area'),
            type: formData.get('type'),
            price: formData.get('price'),
            city: formData.get('city'),
            Address: formData.get('address'),

          },
        }
      );

      if (response.status === 200) {
        setIsSubmitted(true);
        console.log('Submission successful!');
        // Reset the form or show a success message
      } else {
        console.error('Submission error:', response.statusText);
        // Show an error message to the user
      }
    } catch (error) {
      console.error('Fetch error:', error);
      // Show an error message to the user
    }
  };

  return (
    <div>
      <form className="contact_form" onSubmit={handleSubmit}>

      <div className="row">
        <div className="col-md-12">
          <div className="form-group">
            <input
              id="name"
              name="name"
              className="form-control"
              required="required"
              type="text"
              placeholder="اسمك الكامل"
            />
          </div>
        </div>
        {/* End .col */}
        <span style={{textAlign: 'center', marginTop: 10, marginBottom: 10,}}>معلومات التواصل</span>

        <div className="col-md-6">
          <div className="form-group">
            <input
              id="email"
              name="email"
              className="form-control required email"
              required="required"
              type="email"
              placeholder="البريد الالكتروني"
            />
          </div>
        </div>
        {/* End .col */}

        <div className="col-md-6">
          <div className="form-group">
            <input
              id="phone"
              name="phone"
              className="form-control required phone"
              required="required"
              type="phone"
              placeholder="هاتف"
            />
          </div>
        </div>
        {/* End .col */}
        <span style={{textAlign: 'center', marginTop: 10, marginBottom: 10,}}>معلومات المساحة</span>
        <div className="col-md-6">
          <div className="form-group">
            <input
              id="area"
              name="area"
              className="form-control required"
              required="required"
              type="text"
              placeholder="مساحة العقار"
            />
          </div>
        </div>
        
        {/* End .col */}
        <div className="col-md-6">
          <div className="form-group">
            <input
              id="larea"
              name="larea"
              className="form-control"
              required="required"
              type="text"
              placeholder="مساحة الارض"
            />
          </div>
        </div>
        <span style={{textAlign: 'center', marginTop: 10, marginBottom: 10,}}>معلومات العقار</span>
        <div className="col-md-6">
          <div className="form-group">
            <input
              id="type"
              name="type"
              className="form-control"
              required="required"
              type="text"
              placeholder="نوع العقار"
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <input
              id="price"
              name="price"
              className="form-control"
              required="required"
              type="text"
              placeholder="سعر البيع"
            />
          </div>
        </div>
        <span style={{textAlign: 'center', marginTop: 10, marginBottom: 10,}}>موقع العقار</span>
        <div className="col-md-6">
          <div className="form-group">
            <input
              id="city"
              name="city"
              className="form-control"
              required="required"
              type="text"
              placeholder="المدينذ"
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <input
              id="address"
              name="address"
              className="form-control"
              required="required"
              type="text"
              placeholder="العنوان "
            />
          </div>
        </div>
        
          {/* End .col */}

          <div className="form-group mb0">
            <button type="submit" className="btn btn-lg btn-thm">
              ارسال
            </button>
          </div>
          {/* End button submit */}
        </div>
      </form>

{isSubmitted && (
  <div className="success-message">
    <p>تم ارسال الرسالة بنجاح</p>
  </div>
)}

<style jsx>{`
  .success-message {
    background-color: #42c966;
    color: #fff;
    padding: 16px;
    border-radius: 4px;
    text-align: center;
    animation: fade-in 0.5s ease;
  }

  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`}</style>
</div>
);
};

export default Form;