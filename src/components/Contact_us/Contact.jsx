import React,{useState} from 'react';
import "./Contact.css";
import Swal from 'sweetalert2'
import { contactOptions } from '../../Source';


const Contact = () => {

  const [errors, setErrors] = useState({});

  // Validation function
    const validate = (formData) => {
      const errors = {};
  
      // Email validation
      const email = formData.get("email");
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        errors.email = "Please enter a valid email address.";
      }
  
      // Phone number validation
      const phone = formData.get("phone");
      const phoneRegex = /^[0-9]{10}$/;
      if (!phoneRegex.test(phone)) {
        errors.phone = "Please enter a valid 10-digit phone number.";
      }
  
      // First name validation
      const firstname = formData.get("firstname");
      const nameRegex = /^[A-Za-z\s-]+$/; // Updated regex to allow spaces and hyphens
      if (!nameRegex.test(firstname)) {
        errors.firstname = "First name should contain only alphabets, spaces, or hyphens.";
      }
  
      // Last name validation
      const lastname = formData.get("lastname");
      if (!nameRegex.test(lastname)) {
        errors.lastname = "Last name should contain only alphabets, spaces, or hyphens.";
      }
  
      return errors;
  };
  
 // Submit handler function
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
  
    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    // Adding access key
    formData.append("access_key", "34d5c32b-ba92-4366-aacf-02a2e002aee2");

    // Converting FormData to JSON
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });

      const result = await res.json();
      if (result.success) {
        Swal.fire({
          title: "Success!",
          text: "Message sent successfully!",
          icon: "success"
        });
      } else {
        console.error("Error:", result);
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while sending the message.");
    }
  };

  return (
    <section id="contact" data-aos="fade-zoom-in">
      <div className="wrapper">
        <div className="contact-options">
          {contactOptions.map((option, index) => (
            <div
              className="flex-center option"
              data-aos="fade-right"
              key={index}
            >
              <div className="flex-center icon-wrapper" style={{color:option.iconColor}}>{option.icon}</div>
              <h4 className="muted">{option.title}</h4>
              <h3 className="value" style={{display:"flex", flexDirection:"column"}}>{option.value}</h3>
    
            </div>
          ))}
        </div>
        <div className='contact-container'>
        <div className="contact-form" data-aos="fade-left">
          <div className="top">
            <h1 className="title">Contact Us  </h1>
           <p>
           "Reach out for queries, support, and collaboration in education!"
        
            </p>
          </div>
          <form onSubmit={onSubmit}>
            <div className="middle">
              <div className="flex row">
                <input
                  type="email"
                  placeholder="Email address"
                  className="control"
                  name="email"
                  required
                />
                {errors.email && <p className="error">{errors.email}</p>}
                <input
                  type="tel"
                  placeholder="Phone number"
                  className="control"
                  name="phone"
                  required
                />
                {errors.phone && <p className="error">{errors.phone}</p>}
              </div>
              <div className="flex row">
                <input
                  type="text"
                  placeholder="First name"
                  className="control"
                  name="firstname"
                  required
                />
                {errors.firstname && <p className="error">{errors.firstname}</p>}
                <input
                  type="text"
                  placeholder="Last name"
                  className="control"
                  name="lastname"
                  required
                />
                {errors.lastname && <p className="error">{errors.lastname}</p>}
              </div>
              <textarea
                name="message"
                cols="20"
                rows="5"
                placeholder="Message"
                className="control"
                required
              ></textarea>
            </div>
            <div className="flex-center bottom">
              <button type="submit" className="btn primary">
                Send Now
              </button>
            </div>
          </form>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
