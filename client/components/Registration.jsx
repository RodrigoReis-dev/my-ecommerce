import React, { useEffect, useState } from 'react'
import { LockClosedIcon } from '@heroicons/react/solid'
import { useSelector } from 'react-redux'
import addUser from '../apis/api'
import LogIn from './Login'

export default function Registration() {
  const user = useSelector((state) => state.loggedInUser)
  const [formUserData, setFormUserData] = useState({
    auth0Id: '',
    name: '',
    email: '',
    password: '',
  })

  useEffect(() => {
    setFormUserData({
      ...formUserData,
      auth0Id: user?.auth0Id,
      token: user?.token,
    })
  }, [user])

  function handleInput(evt) {
    setFormUserData({
      ...formUserData,
      [evt.target.name]: evt.target.value,
    })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    await addUser(formUserData)
  }

  return (
    <main>
      <div className="w-full text-center">
        <LogIn />
      </div>
      <div className="min-h-full flex items-center justify-center mt-10 py-12 px-4 sm:px-6 lg:px-8 bg-stone-100 drop-shadow-[0_10px_10px_rgba(0,0,0)]">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-orange-500.svg"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Register user account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{' '}
              <a
                href="#"
                className="font-medium text-orange-500 hover:text-indigo-500"
              >
                start your 14-day free trial
              </a>
            </p>
          </div>
          <form
            className="mt-8 space-y-6"
            action="#"
            method="POST"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  value={formUserData.name}
                  type="text"
                  autoComplete="name"
                  required
                  onChange={handleInput}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Full name"
                />
              </div>
            </div>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  value={formUserData.email}
                  type="email"
                  autoComplete="email"
                  required
                  onChange={handleInput}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  value={formUserData.password}
                  type="password"
                  autoComplete="current-password"
                  required
                  onChange={handleInput}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-orange-500 hover:text-indigo-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div>
            <div>
              <button
                href="/"
                onClick={LogIn.handleRegister}
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-stone-600 hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 font-bold text-stone-300 group-hover:text-stone-300"
                    aria-hidden="true"
                  />
                </span>
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}
