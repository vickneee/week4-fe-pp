import { useState } from "react";

const Service = ({ icon, title, text }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleButtonClick = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div>
      <button className="service-btn" onClick={handleButtonClick}>
        Hide
      </button>
      <article className="service">
        <span className="service-icon">
          <i className={icon}></i>
        </span>
        <div className="service-info">
          <h4 className="service-title">{title}</h4>
          <p className="service-text">{text}</p>
        </div>
      </article>
    </div>
  );
};
export default Service;
