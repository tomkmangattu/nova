import { NavLink } from 'react-router-dom';
import sunsetImage from '../../../assets/images/construction.jpg';
import { PrimaryButton } from '../../Button/primaryButton';
import './index.scss';
import { ContactItem } from '../../ContactItems/contactItem';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

export const Home = () => {
    return <div>
        <div className='landingContainer'>
            <img className='landingImage' src={sunsetImage} alt="landing image"/>
            <div className='introduction'>
                <h1>Nova Builders</h1>
                <h2>Industrial & HouseHold Constructions</h2>
                <div className='landingButtons'>
                    <NavLink to='/nova/industrial'> 
                        <PrimaryButton buttonText={'Industrial'}/>
                    </NavLink>
                    <NavLink to='/nova/household'>
                        <PrimaryButton buttonText={'HouseHold'}/>
                    </NavLink>
                </div>
            </div>
            <div className='contactSection'>
                <ContactItem contactIcon={faPhone} contactValue={"Phone: 123-456-7890"}/>
                <ContactItem contactIcon={faEnvelope} contactValue={"nava@gmail.com"}/>
                <ContactItem contactIcon={faLinkedin} contactValue={"nova.linkedIn.com"}/>
                <ContactItem contactIcon={faLocationDot} contactValue={"Visit Us"}/>
            </div>
        </div>

    </div>
}

// https://www.freepik.com/premium-vector/silhouette-building-construction-site-with-cranes-skyscraper-excavators-with-grader_32784632.htm