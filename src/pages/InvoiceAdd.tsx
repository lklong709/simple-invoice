import React from 'react'
import InvoiceForm from '../components/InvoiceForm'

const InvoiceAdd: React.FC = () => {
  return (
    <div className='w-100 lg:w-5/12 md:w-7/12 mx-auto'>
      <div className='text-3xl text-emerald-400 mb-5 font-medium mb-8 mt-10'>Add Invoice</div>
      <InvoiceForm />
    </div>
  )
}

export default InvoiceAdd
