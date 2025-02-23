import { NavLink } from 'react-router-dom';
import sunsetImage from '../../../assets/images/construction2.jpg';
import { PrimaryButton } from '../../Button/primaryButton';
import './index.scss';

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
        </div>

    </div>
}

// https://www.freepik.com/premium-vector/silhouette-building-construction-site-with-cranes-skyscraper-excavators-with-grader_32784632.htm