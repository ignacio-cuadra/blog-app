import React from 'react'
import PropTypes from 'prop-types'
import { AiOutlineLoading } from 'react-icons/ai'

const Button = ({
  children,
  variant = 'primary',
  icon = null,
  onClick,
  disabled = false,
  isLoading = false
}) => {
  const variants = {
    primary:
      'text-white bg-blue-500 hover:bg-blue-400 active:bg-blue-600 dark:border-2 dark:bg-transparent dark:text-blue-500 dark:border-blue-500 dark:hover:bg-blue-500 dark:hover:text-white dark:active:bg-blue-600 dark:active:border-blue-600',
    secondaty:
      'text-white bg-gray-500 hover:bg-gray-400 active:bg-gray-600 dark:border-2 dark:bg-transparent dark:text-gray-500 dark:border-gray-500 dark:hover:bg-gray-500 dark:hover:text-white dark:active:bg-gray-600 dark:active:border-gray-600',
    danger:
      'text-white bg-red-500 hover:bg-red-400 active:bg-red-600 dark:border-2 dark:bg-transparent dark:text-red-500 dark:border-red-500 dark:hover:bg-red-500 dark:hover:text-white dark:active:bg-red-600 dark:active:border-red-600',
    success:
      'text-white bg-green-600 hover:bg-green-500 active:bg-green-700 dark:border-2 dark:bg-transparent dark:text-green-500 dark:border-green-500 dark:hover:bg-green-500 dark:hover:text-white dark:active:bg-green-600 dark:active:border-green-600'
  }
  const theme = variants[variant]
  return (
    <button
      aria-label={children}
      className={`p-2 flex items-center gap-1 transition-all ${theme}`}
      onClick={onClick}
      disabled={disabled || isLoading}>
      {isLoading ? <AiOutlineLoading className=" animate-spin" /> : icon}
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.any,
  variant: PropTypes.any,
  icon: PropTypes.any,
  onClick: PropTypes.any,
  disabled: PropTypes.any,
  isLoading: PropTypes.any
}

export default Button
