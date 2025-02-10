import { useState } from "react";
import PropTypes from 'prop-types';
import "../App.css";

function Tour({ image, date, title, info, location, duration, cost }) {
  const [isVisible, setIsVisible] = useState(true);

  const handleButtonClick = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div>
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
    </div>
  );
}

Tour.propTypes = {
  image: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  cost: PropTypes.string.isRequired,
};

export default Tour;
