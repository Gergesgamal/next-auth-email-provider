import React from 'react'

const Register = () => {
  return (

     <div className="max-w-md mx-auto mb-8 overflow-hidden bg-white rounded-lg shadow-lg">
        <div className="p-8">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 text-center">Create Account</h2>
            <form action="" method='POST' className="space-y-5">
                <div>
                    <label className="block text-sm font-small text-gray-700">Username</label>
                    <input name='username' required type="text" 
                           className="block w-full px-3 py-2 mt-1 text-gray-700 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"/>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input name='email' required type="email" 
                           className="block w-full px-3 py-2 mt-1 text-gray-700 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"/>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Password</label>
                    <input name='password' required type="password" 
                           className="block w-full px-3 py-2 mt-1 text-gray-700 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"/>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Rewrite Password</label>
                    <input name='repassword' required type="password" 
                           className="block w-full px-3 py-2 mt-1 text-gray-700 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"/>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <input name='' id='remember' type="checkbox" 
                               className="w-4 h-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                        <label htmlFor='remember' className="select-none block ml-2 text-sm text-gray-900">Remember me</label>
                    </div>
                </div>
                <button type="submit" 
                        className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Create Account
                </button>
            </form>
        </div>
    </div>

  )
}

export default Register