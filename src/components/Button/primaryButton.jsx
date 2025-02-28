import "./style.scss"
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

export const PrimaryButton = ({buttonText}) => {
    return <button className="primaryButton" role="button">
        <div className="buttonText">{buttonText}</div> 
        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
    </button>;
};

PrimaryButton.propTypes = {
    buttonText : PropTypes.string.isRequired
};