import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { notificationAdded, notificationRemovedById } from '../slices/notificationSlice'

export default function useNotify() {
  const dispatch = useDispatch()
  const notify = ({ id = uuidv4(), message = '', variant = 'info' }) => {
    dispatch(
      notificationAdded({
        id,
        message,
        variant
      })
    )

    setTimeout(() => {
      dispatch(notificationRemovedById(id))
    }, 3000)
  }
  return notify
}
