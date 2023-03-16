import React from 'react'
import './assets/styles/app.scss'
// import { useObserver } from 'mobx-react-lite'
// import { AuthStore } from './store/AuthStore'
// import { LoginForm } from './components/LoginForm'

import Login from './pages/Login'
import Home from './pages/Home'
import InvoiceAdd from './pages/InvoiceAdd'
import { Route, Routes } from 'react-router-dom'
import List from './components/List'

const App: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}>
        <Route index element={<List />} />
        <Route path='/add' element={<InvoiceAdd />} />
      </Route>
      <Route path='login' element={<Login />} />
    </Routes>
  )
}

// const App = ({ authStore }: { authStore: AuthStore }) => {
//   return useObserver(() => {
//     if (!authStore.isLoggedIn) {
//       return (
//         <div className='grid h-screen items-center justify-items-center'>
//           <div className='p-5 w-full sm:w-6/12 lg:w-3/12'>
//             <LoginForm authStore={authStore} />
//           </div>
//         </div>
//       )
//     }

//     return (
//       <div className='grid h-screen justify-items-center'>
//         <div className='px-5 w-full w-10/12'>
//           <div className='flex justify-between w-full py-5'>
//             <p>Welcome!</p>
//             <button onClick={authStore.logout}>Logout</button>
//           </div>
//           <div className='py-5'>Test</div>
//         </div>
//       </div>
//     )
//   })
// }

export default App
