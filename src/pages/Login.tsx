import { ErrorMessage, Field, Form, Formik } from 'formik'
import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import Button from '..//components/Button'
import { getUserProfile, login } from '../auth'

interface User {
  username: string
  password: string
}

interface userError {
  username?: string
  password?: string
}

const Login: React.FC = () => {
  const [authenticated, setAuthenticated] = useState(localStorage.getItem('authenticated') === 'true' ? true : false)
  const [authErrors, setAuthErrors] = useState<string>('')

  const initialValues: User = {
    username: '',
    password: ''
  }

  const validate = (values: User) => {
    const errors: Partial<userError> = {}

    if (!values.username) {
      errors.username = 'Required'
    }

    if (!values.password) {
      errors.password = 'Required'
    }

    setAuthErrors('')

    return errors
  }

  const onSubmit = async (values: User) => {
    await login(values.username, values.password)
    const userProfile = await getUserProfile(`${localStorage.getItem('accessToken')}`)

    if (userProfile) {
      setAuthenticated(true)
    } else {
      setAuthErrors('The Username or Password is Incorrect')
    }
  }

  // const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault()
  //   await login(username, password)
  //   const response = await getUserProfile(`${localStorage.getItem('accessToken')}`)
  //   if (response) {
  //     setAuthenticated(true)
  //   }
  // }

  if (authenticated) {
    return <Navigate replace to='/' />
  }

  return (
    <div className='grid h-screen items-center justify-items-center'>
      <div className='p-5 w-full md:w-6/12 lg:w-3/12'>
        <Formik initialValues={initialValues} onSubmit={onSubmit} validate={validate}>
          {({ errors }) => (
            <Form>
              <h1 className='text-3xl font-medium mb-5 text-emerald-400'>Simple Invoice Apps</h1>
              <div className='mb-5'>
                <label htmlFor='username' className='block mb-2 font-medium'>
                  Username:
                </label>
                <Field
                  className='border px-3 py-2 rounded outline-none w-full'
                  type='text'
                  id='username'
                  name='username'
                />
                <ErrorMessage name='username' component='div' className='text-red-500 mt-2' />
              </div>
              <div className='mb-5'>
                <label htmlFor='password' className='block mb-2 font-medium'>
                  Password:
                </label>
                <Field
                  className='border px-3 py-2 rounded outline-none w-full'
                  type='password'
                  id='password'
                  name='password'
                />
                <ErrorMessage name='password' component='div' className='text-red-500 mt-2' />
                {authErrors && (!errors.username || !errors.username) && (
                  <div className='text-red-500 mt-3'>{authErrors}</div>
                )}
              </div>

              <Button
                type='submit'
                title={`Login`}
                className={`hover:bg-emerald-400 hover:border-emerald-400 hover:text-white`}
              />
            </Form>
          )}
        </Formik>

        {/* <form onSubmit={handleSubmit} className={`mt-[100px]`}>
          <h1 className='text-3xl font-medium mb-5 text-emerald-400'>Simple Invoice Apps</h1>
          <div className='mb-5'>
            <label className='block mb-2' htmlFor='username'>
              Username
            </label>
            <input
              type='text'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              id='username'
              className='border px-3 py-2 rounded outline-none w-full'
            />
          </div>
          <div className='mb-5'>
            <label className='block mb-2' htmlFor='username'>
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type='password'
              id='username'
              className='border px-3 py-2 rounded outline-none w-full'
            />
          </div>
          <div className='text-center'>
            <Button
              title='Login'
              type='submit'
              className='hover:border-emerald-400 hover:bg-emerald-400 hover:text-white '
            />
          </div>
        </form> */}
      </div>
    </div>
  )
}

export default Login
