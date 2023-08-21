import React, { useEffect, useMemo } from 'react'
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

  const { register, handleSubmit, reset, setValue, formState: { errors }} = useForm({
    defaultValues: useMemo(() => contact, [contact])
  });


  useEffect(() => {
    if(contact.id !== undefined){
      Object.entries(contact).slice(1).forEach(e => {
        setValue(e[0], e[1], {shouldDirty: true}); 
      })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contact])

  const handleFormSubmit = (data) => {

    if(contact.id === undefined) {
      dispatch(addContact(Object.assign({}, data, {"mobileNumber": data.mobileNumber.toString()})));
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
          <input type="text" {...register("firstName", { required: true })} aria-invalid={errors.firstName ? "true" : "false"} id="firstName"  
          className="form-input h-10 border mt-1 rounded px-4 w-full bg-gray-5 invalid:border-pink-500 invalid:text-pink-600
        focus:invalid:border-pink-500 focus:invalid:ring-pink-500"  />
          {errors.firstName?.type === "required" && (
            <p role="alert" className='text-red-500'>First name is required</p>
          )}

          <label htmlFor="middleName">Middle Name</label>
          <input type="text" {...register("middleName", { required: true })} id="middleName" 
          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 invalid:border-pink-500 invalid:text-pink-600
          focus:invalid:border-pink-500 focus:invalid:ring-pink-500" />
          {errors.middleName?.type === "required" && (
            <p role="alert" className='text-red-500'>Middle name is required</p>
          )}

          <label htmlFor="lastName">Last Name</label>
          <input type="text" {...register("lastName", { required: true })} id="lastName" 
          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50
          invalid:border-pink-500 invalid:text-pink-600
          focus:invalid:border-pink-500 focus:invalid:ring-pink-500
          " />
          {errors.lastName?.type === "required" && (
            <p role="alert" className='text-red-500'>Last name is required</p>
          )}

          <label htmlFor="mobileNumber">Mobile Number</label> 
          <input type="number" {...register("mobileNumber", {required: true, minLength: 11, maxLength: 11 })} id="mobileNumber" placeholder="09123456789" 
          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50
          invalid:border-pink-500 invalid:text-pink-600
          focus:invalid:border-pink-500 focus:invalid:ring-pink-500
          "  />
          {errors.mobileNumber && (
            <p role="alert" className='text-red-500'>{errors.mobileNumber?.type === "required" ? "Mobile Number required": "Invalid mobile number"}</p>
          )}

          <label htmlFor="email">Email Address</label>
          <input type="text" {...register("email", {required: true, pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/ })} id="email" placeholder="email@domain.com" 
          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50
          invalid:border-pink-500 invalid:text-pink-600
          focus:invalid:border-pink-500 focus:invalid:ring-pink-500
          "  />
          {errors.email && (
            <p role="alert" className='text-red-500'>{errors.email?.type === "required" ? "Email requied" : "Invalid email"}</p>
          )}
        

          <div className="mt-6 flex justify-end">
            <button onClick={handleCloseModal} className="bg-white  hover:bg-slate-100 text-blue-600 font-bold py-2 px-4 rounded">Cancel</button>
            <button type='submit' className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
          </div>

        </form>
        
      </Box>
    </Modal>
  )
}

export default ContactFormModal