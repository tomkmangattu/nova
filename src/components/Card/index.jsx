import './index.scss';
import PropTypes from 'prop-types';

export const Card = ({ building }) => {

  return (
    <div className="card">
      <img src={building.image} alt={building.title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{building.title}</h3>
        <p className="card-description">{building.description}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  building : PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image : PropTypes.string.isRequired
  }).isRequired
};