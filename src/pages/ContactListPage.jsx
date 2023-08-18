import React, { useState } from 'react'
import ContactCard from '../components/ContactCard'

const ContactListPage = () => {
  const [contacts,] = useState([
    {
      id: 0,
      firstName: 'John',
      middleName: 'Garcia',
      lastName: 'Doe',
      mobileNumber: '+639123456789',
      email: 'john.doe@email.com'
    },
    {
      id: 1,
      firstName: 'Jane',
      middleName: 'Garcia',
      lastName: 'Doe',
      mobileNumber: '+639123456788',
      email: 'jane.doe@email.com'
    }
  ])

  return (
    <>
      <h1 className="text-center font-bold text-2xl pt-4 pb-7">Contacts List</h1>
      <div className="grid grid-cols-4 gap-4">
      {contacts.map(contact => (<ContactCard key={contact.id} contact={contact}/>))}
      </div>
     
    </>
  )
}

export default ContactListPage;