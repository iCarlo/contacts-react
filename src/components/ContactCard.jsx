import React from 'react'

const ContactCard = ({contact}) => {
  const {
    firstName, 
    middleName,
    lastName,
    mobileNumber,
    email
  } = contact;

  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg">
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
      <button className="mx-1 rounded-full w-20 bg-blue-600 text-white hover:bg-blue-700 hover:text-gray-200">Edit</button>
      <button className="mx-1 rounded-full w-20 bg-red-600 text-white hover:bg-red-700 hover:text-gray-200">Delete</button>
    </div>
  </div>
  )
}

export default ContactCard