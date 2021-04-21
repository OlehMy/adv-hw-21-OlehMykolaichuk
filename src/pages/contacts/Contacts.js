import React, { Component } from 'react';
import Contact from './Contact';

class ContactsPage extends Component {
    state = { 
        contacts: [{
            firstName: "Барней",
            lastName: "Стинсовський",
            phone: "+380956319521",
            gender: "male"
        }, {
            firstName: "Робін",
            lastName: "Щербатська",
            phone: "+380931460123",
            gender: "female"
        }, {
            firstName: "Анонімний",
            lastName: "Анонімус",
            phone: "+380666666666"
        }, {
            firstName: "Лілія",
            lastName: "Олдровна",
            phone: "+380504691254",
            gender: "female"
        }, {
            firstName: "Маршен",
            lastName: "Еріксонян",
            phone: "+380739432123",
            gender: "male"
        }, {
            firstName: "Теодор",
            lastName: "Мотсбес",
            phone: "+380956319521",
            gender: "male"
        }],
        search: '',
    }

    handleSearchChange = e => {
        this.setState({search: e.target.value})
    }

    render() {
        let filteredContacts;
        const searchingValue = this.state.search;
        filteredContacts = searchingValue !=='' ?
            filteredContacts = this.state.contacts.filter((contact) => 
            contact.lastName.toLowerCase().includes(searchingValue.toLowerCase()) ||
            contact.firstName.toLowerCase().includes(searchingValue.toLowerCase()) ||
            contact.phone.includes(searchingValue)
        ) : this.state.contacts
        return ( 
            <section className = "contacts">
                <div className = "search">
                    <input type = "text" value = {this.state.search} onChange = {this.handleSearchChange} />
                </div>
                { filteredContacts.map((contact, i) => <Contact contact={contact} key={i} />) }
            </section>
         );
    }
}
 
export default ContactsPage;