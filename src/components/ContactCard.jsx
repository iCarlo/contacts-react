import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteContact } from '../actions/contactsActions';
import ContactFormModal from './ContactFormModal';

const ContactCard = ({contact}) => {
  const {
    id,
    firstName, 
    middleName,
    lastName,
    mobileNumber,
    email
  } = contact;

  const dispatch = useDispatch()

  const [openContactModal, setOpenContactModal] = useState(false)


  const handleDelete = () => {
    dispatch(deleteContact(id));
  }

  const handleOpenModal = () => {
    setOpenContactModal(!openContactModal);
  }

  return (
    <>
    <div className="max-w-xs rounded overflow-hidden shadow-lg bg-slate-50">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{lastName}, {firstName} {middleName}</div>
        <p className="text-gray-700 text-base">
        {mobileNumber}
        </p>
        <p className="text-gray-700 text-base">
          {email}
        </p>
      </div>
      <div className="px-6 py-4 flex justify-end">
        <button onClick={handleOpenModal} className="mx-1 py-1 rounded-full w-20 bg-blue-600 text-white hover:bg-blue-700 hover:text-gray-200">Edit</button>
        <button onClick={handleDelete} className="mx-1 py-1 rounded-full w-20 bg-red-600 text-white hover:bg-red-700 hover:text-gray-200">Delete</button>
      </div>
    </div>
    
    <ContactFormModal contact={contact} openContactModal={openContactModal} handleOpenModal={handleOpenModal} />
    </>
  )
}

export default ContactCard