import { BankAccount, Customer, CustomField, Document, Extension, Item } from '../types/InvoiceType'
import { v4 as uuidv4 } from 'uuid'

import { InitialInvoiceFormProps } from '../types/InitialInvoiceFormProps'

export class InvoiceCreateModel {
  bankAccount: BankAccount
  customer: Customer
  documents: Document[]
  invoiceReference: string
  invoiceNumber: string
  currency: string
  invoiceDate: string
  dueDate: string
  description: string
  customFields: CustomField[]
  extensions: Extension[]
  item: Item[]

  constructor(model: InitialInvoiceFormProps) {
    this.bankAccount = {
      bankId: '',
      sortCode: '09-01-01',
      accountNumber: '12345678',
      accountName: 'John Terry'
    }
    this.customer = {
      id: '1',
      firstName: 'Nguyen',
      lastName: 'Dung 2',
      contact: {
        email: 'nguyendung2@101digital.io',
        mobileNumber: '+6597594971'
      },
      addresses: [
        {
          premise: 'CT11',
          countryCode: 'VN',
          postcode: '1000',
          county: 'hoangmai',
          city: 'hanoi'
        }
      ]
    }
    this.documents = [
      {
        documentId: '96ea7d60-89ed-4c3b-811c-d2c61f5feab2',
        documentName: 'Bill',
        documentUrl: 'http://url.com/#123'
      }
    ]
    this.customFields = [
      {
        key: 'invoiceCustomField',
        value: 'value'
      }
    ]
    this.extensions = [
      {
        addDeduct: 'ADD',
        value: 10,
        type: 'PERCENTAGE',
        name: 'tax'
      },
      {
        addDeduct: 'DEDUCT',
        type: 'FIXED_VALUE',
        value: 10.0,
        name: 'discount'
      }
    ]
    this.currency = 'GBP'
    this.invoiceReference = uuidv4()
    this.invoiceNumber = `${Date.now()}`
    this.invoiceDate = model.invoiceDate
    this.dueDate = model.dueDate ?? ''
    this.description = model.description ?? ''
    this.item = [
      {
        itemReference: uuidv4(),
        description: 'Honda RC150',
        quantity: model.quantity,
        rate: Math.round(model.rate),
        itemName: 'Honda Motor',
        itemUOM: 'KG',
        customFields: [
          {
            key: 'taxiationAndDiscounts_Name',
            value: 'VAT'
          }
        ],
        extensions: [
          {
            addDeduct: 'ADD',
            value: 10,
            type: 'FIXED_VALUE',
            name: 'tax'
          },
          {
            addDeduct: 'DEDUCT',
            value: 10,
            type: 'PERCENTAGE',
            name: 'tax'
          }
        ]
      }
    ]
  }
}
