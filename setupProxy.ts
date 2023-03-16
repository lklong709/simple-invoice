import { createProxyMiddleware } from 'http-proxy-middleware'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
module.exports = (app: any) => {
  app.use(
    createProxyMiddleware('/invoice-service/2.0.0/invoices', {
      target: 'https://sandbox.101digital.io',
      changeOrigin: true
    })
  )
}
