import React, { Component } from 'react';
import shortid from 'shortid';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
import ContactForm from './Components/ContactForm/ContactForm';
import ContactList from './Components/ContactList/ContactList';
import Filter from './Components/Filter/Filter';

import isNameAvailable from './Functions/isNameAvailable';

export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    this.setState({
      contacts: JSON.parse(localStorage.getItem('contacts')),
    });
  }

  componentDidUpdate() {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }

  addContact = (name, number) => {
    const notyf = new Notyf();
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    if (isNameAvailable(this.state.contacts, contact.name)) {
      return notyf.error(`${contact.name} is already exists in contacts!`);
    }

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, contact],
      };
    });
  };

  deleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== contactId),
      };
    });

    if (this.state.contacts.length <= 2) {
      this.setState({ filter: '' });
    }
  };

  changeFilter = filter => {
    this.setState({ filter });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  render() {
    const { filter, contacts } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm submitContactInfo={this.addContact} />
        <h2>Contacts</h2>

        {contacts.length >= 2 && (
          <Filter value={filter} onChangeFilter={this.changeFilter} />
        )}
        <ContactList
          list={visibleContacts}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
