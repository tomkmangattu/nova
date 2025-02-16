import React, {useEffect} from 'react';
import './index.scss';

export const Card = ({ title, description, myImage }) => {

  return (
    <div className="card">
      <img src={myImage} alt={title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};
