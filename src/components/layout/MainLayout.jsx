import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import Notification from '../common/Notification'

const MainLayout = ({ children }) => {
  const notifications = useSelector((state) => state.notifications)
  return (
    <>
      <div className="h-full p-2 overflow-auto bg-gray-200 dark:bg-gray-800">
        <header className="container max-w-4xl mx-auto pb-2 border-b-2 border-gray-500 dark:border-gray-600">
          <h1 className="block text-6xl text-center font-raleway font-extrabold mb-2 text-gray-700 dark:text-gray-300">
            Blog
          </h1>
          <h2 className="block text-center text-xs font-raleway text-gray-600 dark:text-gray-400">
            Desarrollado por <a href="#">Ignacio Cuadra</a>
          </h2>
        </header>
        <main className="relative">
          <div className="fixed z-10 flex flex-col max-w-4xl gap-2 top-1 container left-1/2 -translate-x-1/2 p-2">
            {notifications.map((notification) => (
              <Notification
                key={notification.id}
                id={notification.id}
                variant={notification.variant}>
                {notification.message}
              </Notification>
            ))}
          </div>
          {children}
        </main>
      </div>
    </>
  )
}

MainLayout.propTypes = {
  children: PropTypes.any
}

export default MainLayout
