import { useState, useEffect } from "react";
import "./Service.css";

const Service = ({ services }) => {
  const [serviceList, setServiceList] = useState([]);

  useEffect(() => {
    setServiceList(services);
  }, [services]);

  const handleLearnMore = (link) => {
    window.location.href = link;
  };

  return (
    <div className="service-container">
      <h1>Our Services</h1>
      <div className="services-wrapper">
        {serviceList.map((service, index) => (
          <div key={index} className="service-card">
            <div className="icon-container" style={{color:service.iconColor}}>
            {service.icon}
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <button onClick={() => handleLearnMore(service.link)} className="button">Click Here</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
