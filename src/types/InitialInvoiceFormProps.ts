export interface InitialInvoiceFormProps {
  invoiceDate: string
  description: string
  dueDate: string
  quantity: number
  rate: number
}

export interface InitialInvoiceFormErrorProps {
  invoiceDate: string
  description: string
  dueDate: string
  quantity: string
  rate: string
}
