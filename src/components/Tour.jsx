import { useState } from "react";

function Tour({ image, date, title, info, location, duration, cost }) {
  const [isVisible, setIsVisible] = useState(true);

  const handleButtonClick = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <article className="tour-card">
      <div className="tour-img-container">
        <button className="tour-btn" onClick={handleButtonClick}>
          Not interested
        </button>
        <img src={image} className="tour-img" alt={title} />
        <p className="tour-date">{date}</p>
      </div>
      <div className="tour-info">
        <div className="tour-title">
          <h4>{title}</h4>
        </div>
        <p>{info}</p>
        <div className="tour-footer">
          <p>
            <span>
              <i className="fas fa-map" />
            </span>
            {location}
          </p>
          <p>from {cost}</p>
          <p>{duration} days</p>
        </div>
      </div>
    </article>
  );
}

export default Tour;
