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
            Email: formData.get('email'),
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

      
        {/* End .col */}
        
        {/* End .col */}
       
        <div className="col-sm-12">
          <div className="form-group">
          <textarea
  id="message"
  name="message"
  className="form-control required"
  rows="8"
  required
  placeholder="رسالتك"
></textarea>

          </div>
          {/* End .col */}

          <div className="form-group mb0">
            <button type="submit" className="btn btn-lg btn-thm">
              ارسال
            </button>
          </div>
          {/* End button submit */}
        </div>
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