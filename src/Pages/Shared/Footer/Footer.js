import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyBill, faAddressBook, faFileContract, faHome } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {

    const element = <FontAwesomeIcon icon={faMoneyBill} />
    const element2 = <FontAwesomeIcon icon={faAddressBook} />
    const element3 = <FontAwesomeIcon icon={faFileContract} />
    const element4 = <FontAwesomeIcon icon={faHome} />
    return (
        <div className='container-footer'>
            <div className="row">
                <div className="col-md-4">
                    <p>MR Course Zone{element}</p>
                    <h3>{element2} 01400*</h3>

                    <small>{element3}  Ashulia</small>
                    <p>Savar Dhaka 1230</p>

                </div>

                <div className="col-md-4">
                    <div className='pages'></div>
                    <p>Home {element4}</p>
                    <p>Services </p>
                    <p>Contact us {element2} </p>
                    <p>About us</p>
                    <p>Reviews</p>
                </div>

                <div className="col-md-4">
                    SUPPORT
                    Troubleshooting <br />
                    Common Questions
                    Report a Bug
                    Get Help <br /> <br /> <br />
                    <p> Mamun 2021 © . All rights reserved. </p>
                </div>
            </div>
        </div>
    );
};
export default Footer;