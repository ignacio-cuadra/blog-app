import React from 'react'
import PropTypes from 'prop-types'

const MainLayout = ({ children }) => {
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
        <main>{children}</main>
      </div>
    </>
  )
}

MainLayout.propTypes = {
  children: PropTypes.any
}

export default MainLayout
