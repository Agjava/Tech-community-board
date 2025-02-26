import React from 'react';
import './Card.css';

function Card({ title, date, description, image, link }) {
  return (
    <div className="card">
      {image && <img src={image} alt={title} className="card-image" />}
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        {date && <p className="card-date">{date}</p>}
        <p className="card-description">{description}</p>
        {link && (
          <a href={link} className="card-link" target="_blank" rel="noopener noreferrer">
            Learn More
          </a>
        )}
      </div>
    </div>
  );
}

export default Card;
