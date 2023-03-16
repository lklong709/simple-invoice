export interface Address {
  premise: string
  countryCode: string
  postcode: string
  county: string
  city: string
}

export interface Contact {
  email: string
  mobileNumber: string
}

export interface Customer {
  id: string
  firstName: string
  lastName: string
  name?: string
  addresses?: Address[]
  contact?: Contact
}

export interface Merchant {
  id: string
  addresses: Address[]
}

export interface Status {
  key: string
  value: boolean
}

export interface CustomField {
  key: string
  value: string
}

export interface Extension {
  addDeduct: string
  value: number
  type: string
  name: string
}

export interface Document {
  documentId: string
  documentName: string
  documentUrl: string
}

export interface Item {
  itemReference: string
  description: string
  quantity: number
  rate: number
  itemName: string
  itemUOM: string
  customFields: CustomField[]
  extensions: Extension[]
}

export interface InvoiceType {
  createdAt: string
  createdBy: string
  currency: string
  currencySymbol: string
  customer: Customer
  description: string
  dueDate: string
  extensions: Extension[]
  invoiceDate: string
  invoiceId: string
  invoiceNumber: string
  invoiceSubTotal: number
  totalDiscount: number
  totalTax: number
  totalAmount: number
  totalPaid: number
  balanceAmount: number
  numberOfDocuments: number
  documents: Document[]
  items: Item[]
  merchant: Merchant
  payments: unknown[]
  referenceNo: string
  invoiceReference: string
  status: Status[]
  subStatus: unknown[]
  type: string
  version: string
  invoiceGrossTotal: number
  customFields: CustomField[]
}

export interface BankAccount {
  bankId: string
  sortCode: string
  accountNumber: string
  accountName: string
}

export interface InvoiceCreateType {
  bankAccount?: BankAccount
  customer?: Customer
  documents?: Document[]
  invoiceReference?: string
  invoiceNumber?: string
  currency?: string
  invoiceDate: string
  dueDate?: string
  description?: string
  customFields?: CustomField[]
  extensions?: Extension[]
  items?: Item[]
}
