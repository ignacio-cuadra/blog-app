import React from 'react'
import PropTypes from 'prop-types'
import { AiOutlineCheck, AiOutlineClose, AiOutlineCloseCircle } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { notificationRemovedById } from '../../slices/notificationSlice'

const Notification = ({ id, children, variant = 'primary' }) => {
  const dispatch = useDispatch()
  const variants = {
    primary: 'text-white bg-blue-500',
    secondaty: 'text-white bg-gray-500',
    danger: 'text-white bg-red-500',
    success: 'text-white bg-green-600'
  }
  const theme = variants[variant]
  return (
    <div className={`p-2 flex items-center gap-2 transition-all ${theme}`}>
      <div className="flex-none">
        {variant === 'success' ? <AiOutlineCheck /> : null}
        {variant === 'danger' ? <AiOutlineClose /> : null}
      </div>
      <div className="grow">{children}</div>
      <div className="flex flex-none items-center">
        <button
          onClick={() => {
            dispatch(notificationRemovedById(id))
          }}>
          <AiOutlineCloseCircle className="text-2xl" />
        </button>
      </div>
    </div>
  )
}

Notification.propTypes = {
  id: PropTypes.any,
  children: PropTypes.any,
  variant: PropTypes.any
}

export default Notification
