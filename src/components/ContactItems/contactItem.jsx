import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import PropTypes from 'prop-types';

export const ContactItem = ({contactIcon, contactValue}) => {
    return <button className="contactItem">
        <FontAwesomeIcon icon={contactIcon}/>
        <p>{contactValue}</p>
    </button>
} 

ContactItem.propTypes = {
    contactIcon: PropTypes.object.isRequired,
    contactValue: PropTypes.string.isRequired
};

