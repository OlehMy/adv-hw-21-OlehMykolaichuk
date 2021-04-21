import React, { Component } from 'react';
import maleIcon from './assets/img/male-icon.jpg';
import femaleIcon from './assets/img/female-icon.jpg';
import anonIcon from './assets/img/anon-icon.jpg';
import './contacts.css'

class Contact extends Component {
        
    render() { 
        return ( 
            <article className = "contact">
                <img className = "contact-photo" src={this.props.contact.gender === 'male' ? maleIcon : this.props.contact.gender === 'female' ? femaleIcon : anonIcon} alt="contact photo" />
                <div className = "contact-data">
                    <p className = "contact-first-name"><span>First name: </span>{this.props.contact.firstName}</p>
                    <p className = "contact-last-name"><span>Last name: </span>{this.props.contact.lastName}</p>
                    <p className = "contact-phone-number"><span>Phone: </span>{this.props.contact.phone}</p>
                </div>
            </article>
         );
    }
}
 
export default Contact;