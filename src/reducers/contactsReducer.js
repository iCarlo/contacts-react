import { v4 as uuid4 } from 'uuid';

export const contactsReducer = (contacts = [], action) => {
  switch (action.type) {
    case 'ADD_CONTACT':
      const newContact = Object.assign({}, action.payload, {id: uuid4()})
      
      return contacts.concat(newContact);
    
    case 'UPDATE_CONTACT':
      const data = action.payload;

      return contacts.map(contact => {
        if(contact.id === data.id) {
          return Object.assign({}, contact, {...data})
        } else {
          return contact;
        }
      })

    case 'DELETE_CONTACT':
      const id = action.payload;

      return contacts.filter(contact => contact.id !== id);

    default:
      return contacts;
  }
}