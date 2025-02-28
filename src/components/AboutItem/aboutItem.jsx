import PropTypes from 'prop-types';
import './style.scss'

export const AboutItem = ({questionAnswer}) => {
    return (
        <div className="about-item">
            <h3 className="about-item__question">
                {questionAnswer.question}
            </h3>
            <div className="about-item__answer">{questionAnswer.answer}</div>
        </div>
    )
}

AboutItem.propTypes = {
    questionAnswer: PropTypes.shape({
        question: PropTypes.string.isRequired,
        answer: PropTypes.string.isRequired
    }).isRequired
};