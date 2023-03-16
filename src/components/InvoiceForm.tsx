import { Formik, Form, Field, ErrorMessage } from 'formik'
import { InvoiceCreateModel } from '../Models/InvoiceCreateModel'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useState } from 'react'
import { InitialInvoiceFormErrorProps, InitialInvoiceFormProps } from '../types/InitialInvoiceFormProps'
import Invoice from '../api/invoice'
import Button from './Button'
import ButtonLink from './ButtonLink'

const invoiceApi = new Invoice()

const InvoiceForm: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date())

  const initialValues: InitialInvoiceFormProps = {
    invoiceDate: `${selectedDate?.toISOString().slice(0, 10)}`,
    description: '',
    dueDate: '',
    rate: 0,
    quantity: 1
  }

  const onSubmit = (formData: InitialInvoiceFormProps) => {
    const currentDate = new Date(`${selectedDate}`)
    const oneWeekLater = new Date()
    oneWeekLater.setDate(currentDate.getDate() + 7)

    formData.invoiceDate = `${selectedDate?.toISOString().slice(0, 10)}`
    formData.dueDate = oneWeekLater.toISOString().slice(0, 10)

    const data = new InvoiceCreateModel(formData)

    invoiceApi.create(data)
  }

  const validate = (values: InitialInvoiceFormProps) => {
    const errors: Partial<InitialInvoiceFormErrorProps> = {}

    if (!values.description) {
      errors.description = 'Required'
    }

    if (!values.quantity && values.quantity !== 0) {
      errors.quantity = 'Quantity is required'
    } else if (isNaN(values.quantity)) {
      errors.quantity = 'Quantity must be a number'
    } else if (values.quantity < 1) {
      errors.quantity = 'Quantity must be greater than 0'
    } else if (values.quantity > 10) {
      errors.quantity = 'Quantity must be less than or equal to 10'
    }

    if (!values.rate && values.rate !== 0) {
      errors.rate = 'Rate is required'
    } else if (isNaN(values.rate)) {
      errors.rate = 'Rate must be a number'
    } else if (values.rate < 1) {
      errors.rate = 'Rate must be greater than 0'
    }

    return errors
  }

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validate={validate}>
      {() => (
        <Form>
          <div className='mb-5'>
            <div className='flex gap-5'>
              <div className='w-1/2'>
                <label htmlFor='quantity' className='block mb-2 font-medium'>
                  Quantity:
                </label>
                <Field className='outline-0 w-full border-b pb-3' type='text' id='quantity' name='quantity' />
              </div>

              <div className='w-1/2'>
                <label htmlFor='rate' className='block mb-2 font-medium'>
                  Rate:
                </label>
                <Field className='outline-0 w-full border-b pb-3' type='text' id='rate' name='rate' />
              </div>
            </div>
            <ErrorMessage name='rate' component='div' className='text-red-500 mt-2' />
            <ErrorMessage name='quantity' component='div' className='text-red-500 mt-2' />
          </div>

          <div className='mb-5'>
            <label htmlFor='description' className='inline-block mb-2 font-medium'>
              Description:
            </label>
            <Field
              className='border-b outline-0 block w-full h-[80px] pb-3'
              type='text'
              as='textarea'
              id='description'
              name='description'
            />
            <ErrorMessage name='description' component='div' className='text-red-500 mt-2' />
          </div>

          <div className='mb-5'>
            <span className='block mb-2 font-medium'>Date:</span>
            <DatePicker
              dateFormat={`yyyy-MM-dd`}
              className='border-b pb-3 w-1/2 outline-0'
              selected={selectedDate}
              onChange={(date) => {
                setSelectedDate(date)
              }}
            />
          </div>
          <div className='flex justify-between mt-10'>
            <ButtonLink to={`/`} title={`Back`} className={`hover:text-emerald-400 hover:border-emerald-400`} />
            <Button
              type='submit'
              title={`Create Invoice`}
              className={`hover:bg-emerald-400 hover:border-emerald-400 hover:text-white`}
            />
          </div>
        </Form>
      )}
    </Formik>
  )
}
export default InvoiceForm
