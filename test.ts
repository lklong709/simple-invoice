//The invoice line items (item reference, description, quantity, amount) should be programmatically generated with random values on every API request call.
const a = {
  invoices: [
    {
      bankAccount: {
        bankId: '',
        sortCode: '09-01-01',
        accountNumber: '12345678',
        accountName: 'John Terry'
      },
      customer: {
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
      },
      documents: [
        {
          documentId: '96ea7d60-89ed-4c3b-811c-d2c61f5feab2',
          documentName: 'Bill',
          documentUrl: 'http://url.com/#123'
        }
      ],
      invoiceReference: '#123456', //Should be programmatically generated with random values on every API request call.
      invoiceNumber: 'INV123456701',
      currency: 'GBP',
      invoiceDate: '2021-05-27', //Special
      dueDate: '2021-06-04', //Special
      description: 'Invoice is issued to Akila Jayasinghe', //Special
      customFields: [
        {
          key: 'invoiceCustomField',
          value: 'value'
        }
      ],
      extensions: [
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
      ],
      items: [
        {
          itemReference: 'itemRef', //Should be programmatically generated with random values on every API request call.
          description: 'Honda RC150',
          quantity: 1, //Should be programmatically generated with random values on every API request call.
          rate: 1000, //Should be programmatically generated with random values on every API request call.
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
  ]
}
