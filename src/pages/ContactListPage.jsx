import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ContactCard from '../components/ContactCard'
import ContactFormModal from '../components/ContactFormModal';

const ContactListPage = () => {

  const contacts = useSelector(state => state);

  const [openContactModal, setOpenContactModal] = useState(false)

  const handleOpenModal = () => {
    setOpenContactModal(!openContactModal);
  }

  return (
    <>
      <h1 className="text-center font-bold text-2xl pt-4 pb-7">Contacts List</h1>

      <div className="my-3">
        <button onClick={handleOpenModal} className="rounded-full w-20 py-1 bg-blue-600 text-white hover:bg-blue-700 hover:text-gray-200">Add</button>
      </div>
      <div className="grid grid-cols-4 gap-4">
      {contacts.map(contact => (<ContactCard key={contact.id} contact={contact}/>))}
      </div>
     
      <ContactFormModal openContactModal={openContactModal} handleOpenModal={handleOpenModal} />
    </>
  )
}

export default ContactListPage;