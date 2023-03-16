import React, { useState } from 'react'
import { observer } from 'mobx-react-lite'
import InvoiceStore from '../store/InvoiceStore'
import Pagination from '../components/Pagination'
import Select from 'react-select'
import Button from './Button'
import ButtonLink from './ButtonLink'

const List: React.FC = observer(() => {
  const [searchKeyWord, setSearchKeyWord] = useState('')
  const [selectedOrderBy, setSelectedOrderBy] = useState<{ value: string; label: string } | null>(null)
  const [selectedStatus, setSelectedStatus] = useState<{ value: string; label: string } | null>(null)

  const orderByOptions = [
    { value: 'ASCENDING', label: 'Ascending' },
    { value: 'DESCENDING', label: 'Descending' }
  ]
  const statusOptions = [
    { value: 'Paid', label: 'Paid' },
    { value: 'Overdue', label: 'Overdue' }
  ]

  const handleSearch = () => {
    InvoiceStore.getListByFilter({ ...InvoiceStore.filters, keyword: searchKeyWord })
  }
  const handleClear = () => {
    InvoiceStore.getListByFilter({ ...InvoiceStore.filters, keyword: '', status: '', ordering: '' })
    setSelectedOrderBy(null)
    setSelectedStatus(null)
    setSearchKeyWord('')
  }

  return (
    <>
      <div className='mb-5 flex gap-5 flex-wrap'>
        <input
          type='text'
          value={searchKeyWord}
          placeholder="i.e 'IV1649318870503'"
          onChange={(e) => setSearchKeyWord(e.target.value)}
          id='search'
          className='border px-3 py-2 rounded outline-none lg:w-1/2'
        />
        <Button
          title={`Clear`}
          type='button'
          onClick={handleClear}
          className={`border-red-300 text-red-500 hover:bg-red-500 hover:border-red-500 hover:text-white `}
        />
        <Button
          title={`Search`}
          type='button'
          onClick={handleSearch}
          className={`bg-emerald-400 border-emerald-400 text-white hover:bg-white hover:text-emerald-400`}
        />
      </div>

      <div className='mb-5 flex gap-5 flex-wrap'>
        <Select
          placeholder={`Order by`}
          options={orderByOptions}
          onChange={(option) => {
            InvoiceStore.getListByFilter({ ...InvoiceStore.filters, ordering: option?.value })
            setSelectedOrderBy(option ? option : null)
          }}
          value={selectedOrderBy}
          styles={{
            control: (baseStyles) => ({
              ...baseStyles,
              height: '48px',
              borderColor: 'rgb(229,231,235)'
            })
          }}
        />
        <Select
          placeholder={`Status`}
          options={statusOptions}
          onChange={(option) => {
            InvoiceStore.getListByFilter({ ...InvoiceStore.filters, status: option?.value })
            setSelectedStatus(option ? option : null)
          }}
          value={selectedStatus}
          styles={{
            control: (baseStyles) => ({
              ...baseStyles,
              height: '48px',
              borderColor: 'rgb(229,231,235)'
            })
          }}
        />
      </div>
      <div className='text-right mb-5'>
        <ButtonLink
          to={`/add`}
          title={`Add invoice`}
          className={`ml-auto bg-emerald-400 border-emerald-400 text-white hover:bg-white hover:text-emerald-400`}
        />
      </div>
      {InvoiceStore.listInvoices.length > 0 ? (
        <>
          <table className='w-full block md:table mb-5'>
            <thead className='text-left hidden md:table-header-group'>
              <tr>
                <th className={`border py-3 px-5`}>Id</th>
                <th className={`border py-3 px-5`}>Number</th>
                <th className={`border py-3 px-5`}>Description</th>
              </tr>
            </thead>
            <tbody className='block md:table-row-group'>
              {InvoiceStore.listInvoices.map((o, index) => (
                <tr key={index} className={`border-b py-5 block md:table-row`}>
                  <>
                    <td className={`md:border md:py-3 md:px-5 md:table-cell block break-words`}>
                      <span className='font-medium md:hidden'>Id:</span> {o.invoiceId}
                    </td>
                    <td className={`md:border md:py-3 md:px-5 md:table-cell block break-words`}>
                      <span className='font-medium md:hidden'>Number:</span> {o.invoiceNumber}
                    </td>
                    <td className={`md:border md:py-3 md:px-5 md:table-cell block`}>
                      <span className='font-medium md:hidden'>Description:</span> {o.description}{' '}
                    </td>
                  </>
                </tr>
              ))}
            </tbody>
          </table>
          <div>
            <Pagination />
          </div>
        </>
      ) : (
        <div className='text-center'>
          <div className='inline-block text-gray-500 mt-[10vh]'>Item not found</div>
        </div>
      )}
    </>
  )
})

export default List
