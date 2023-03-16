import { observer } from 'mobx-react-lite'
import React from 'react'
import ReactPaginate from 'react-paginate'
import InvoiceStore from '../store/InvoiceStore'

const Pagination: React.FC = observer(() => {
  const handlePageClick = (data: { selected: number }) => {
    InvoiceStore.getListByPage(data.selected + 1)
    console.log(data.selected + 1)
  }

  return (
    <>
      {/* render your data */}

      <ReactPaginate
        previousLabel={`prev`}
        nextLinkClassName={`w-[62px] h-[42px] flex items-center border justify-center uppercase font-medium`}
        previousLinkClassName={`w-[62px] h-[42px] flex items-center border justify-center uppercase font-medium`}
        pageLinkClassName={`w-[42px] h-[42px] flex items-center border justify-center font-medium`}
        nextLabel={'next'}
        pageCount={Math.round(
          InvoiceStore.paging.totalRecords ? InvoiceStore.paging.totalRecords / InvoiceStore.paging.pageSize : 0
        )}
        marginPagesDisplayed={1}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={'flex gap-5 flex-wrap'}
        activeLinkClassName={'bg-emerald-400 border-emerald-400 text-white'}
        breakLinkClassName={`w-[42px] h-[42px] flex items-center border justify-center`}
        disabledClassName={`opacity-50`}
      />
    </>
  )
})
export default Pagination
