import { makeAutoObservable } from 'mobx'
import { InvoiceFilters } from '../types/InvoiceFilterType'

import { InvoiceType } from '../types/InvoiceType'
import Invoice from '../api/invoice'

const invoice = new Invoice()

class InvoiceStore {
  listInvoices: InvoiceType[] = []
  paging: {
    pageNumber: number
    pageSize: number
    totalRecords?: number
  } = {
    pageNumber: 1,
    pageSize: 10
  }

  filters: InvoiceFilters = { pageNum: this.paging.pageNumber, pageSize: this.paging.pageSize }

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true })
    this.initializeData()
  }

  async initializeData(): Promise<void> {
    const res = await invoice.getList(this.paging.pageSize, this.paging.pageNumber)
    this.listInvoices = res?.data.data
    this.paging = res?.data.paging
  }

  getListByFilter = async (filters: InvoiceFilters) => {
    filters.pageNum = 1
    this.filters = filters
    const res = await invoice.getListByFilter({ ...this.filters })
    this.listInvoices = res?.data.data
    this.paging = res?.data.paging
  }

  getListByPage = async (pageNumber: number) => {
    const res = await invoice.getListByFilter({ ...this.filters, pageNum: pageNumber })
    this.filters.pageNum = pageNumber
    this.paging = res?.data.paging
    this.listInvoices = res?.data.data
  }
}

export default new InvoiceStore()
