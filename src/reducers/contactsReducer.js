import { v4 as uuid4 } from 'uuid';

export const contactsReducer = (contacts = [
  {
    id: 0,
    firstName: 'John',
    middleName: 'Garcia',
    lastName: 'Doe',
    mobileNumber: '09123456789',
    email: 'john.doe@email.com'
  },
  {
    id: 1,
    firstName: 'Jane',
    middleName: 'Garcia',
    lastName: 'Doe',
    mobileNumber: '09123456788',
    email: 'jane.doe@email.com'
  }
], action) => {
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