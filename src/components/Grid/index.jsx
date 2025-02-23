import './index.scss';
import PropTypes from 'prop-types';

export const Grid = ({children}) => {
    return <div className="gridView">{children}</div>;
}

Grid.propTypes = {
    children: PropTypes.node.isRequired,
};