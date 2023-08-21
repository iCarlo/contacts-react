import React, { useEffect, useMemo, useState } from 'react'
import { useForm } from "react-hook-form";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { useDispatch } from 'react-redux';
import { addContact, updateContact } from '../actions/contactsActions';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const ContactFormModal = ({ contact = {}, openContactModal, handleOpenModal}) => {

  const dispatch = useDispatch()

  const { register, handleSubmit, reset, setValue} = useForm({
    defaultValues: useMemo(() => contact, [contact])
  });


  useEffect(() => {
    if(contact.id !== undefined){
      Object.entries(contact).slice(1).forEach(e => {
        setValue(e[0], e[1], {shouldDirty: true}); 
      })
    }
  }, [contact])

  const handleFormSubmit = (data) => {
    if(contact.id === undefined) {
      dispatch(addContact(data));
    } else {
      dispatch(updateContact(data));
    }

    handleCloseModal();
  }

  const handleCloseModal = () => {
    reset();
    handleOpenModal();
  }

  return (
    <Modal
      open={openContactModal}
      onClose={handleOpenModal}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box sx={{...style, width: 400 }}>

        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <label htmlFor="firstName">First Name</label>
          <input type="text" {...register("firstName")} id="firstName" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
          
          <label htmlFor="middleName">Middle Name</label>
          <input type="text" {...register("middleName")} id="middleName" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
          
          <label htmlFor="lastName">Last Name</label>
          <input type="text" {...register("lastName")} id="lastName" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
          
          <label htmlFor="mobileNumber">Mobile Number</label>
          <input type="text" {...register("mobileNumber")} id="mobileNumber" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="09123456789" />

          <label htmlFor="email">Email Address</label>
          <input type="text" {...register("email")} id="email" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="email@domain.com" />
        

          <div className="mt-6 flex justify-end">
            <button onClick={handleOpenModal} className="bg-white  hover:bg-slate-100 text-blue-600 font-bold py-2 px-4 rounded">Cancel</button>
            <button type='submit' className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
          </div>

        </form>
        
      </Box>
    </Modal>
  )
}

export default ContactFormModal