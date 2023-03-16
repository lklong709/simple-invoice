import axios from 'axios'
import { InvoiceFilters } from '../types/InvoiceFilterType'
import { InvoiceCreateType } from '../types/InvoiceType'

class Invoice {
  baseHeader = {
    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    'org-token': localStorage.getItem('orgToken')
  }
  getList = async (pageSize: number, pageNumber: number) => {
    try {
      const response = await axios.get(`${process.env.END_POINT_URL}/invoice-service/1.0.0/invoices`, {
        headers: this.baseHeader,
        params: { pageSize: pageSize, pageNumber: pageNumber }
      })
      return response
    } catch (error) {
      console.log(error)
    }
  }

  getListByFilter = async (filter: InvoiceFilters) => {
    try {
      const response = await axios.get(`${process.env.END_POINT_URL}/invoice-service/1.0.0/invoices`, {
        headers: this.baseHeader,
        params: filter
      })
      return response
    } catch (error) {
      console.log(error)
    }
  }

  create = async (invoice: InvoiceCreateType) => {
    try {
      const response = await axios.post(
        `${process.env.END_POINT_URL}/invoice-service/2.0.0/invoices`,
        {
          invoices: [invoice]
        },
        {
          headers: {
            ...this.baseHeader,
            'Operation-Mode': 'SYNC',
            'Access-Control-Allow-Origin': '*'
          }
        }
      )

      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }
}

export default Invoice
