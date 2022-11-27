import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { AiFillDelete, AiOutlineNumber } from 'react-icons/ai'
import Button from '../common/Button'
import { useDispatch } from 'react-redux'
import { postRemovedById } from '../../slices/postSlice'

const PostTableRow = ({ index, post }) => {
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false)
  const removePost = () => {
    setIsLoading(true)
    fetch('http://localhost:5000/api/v1/posts/' + post.id, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })
      .then((response) => response.json())
      .then(() => {
        dispatch(postRemovedById(post.id))
        setIsLoading(false)
      })
      .catch((error) => {
        console.log('error', error)
      })
  }
  return (
    <tr
      className={index % 2 === 0 ? 'bg-gray-200 dark:bg-gray-800' : 'bg-gray-300 dark:bg-gray-900'}>
      <td className="p-2">
        <span className="block">{post.name}</span>
        <span className="text-xs text-gray-500 flex items-center whitespace-nowrap">
          <AiOutlineNumber />
          {post.id}
        </span>
      </td>
      <td className="p-2">
        <p>{post.description}</p>
      </td>
      <td className="p-2">
        <Button variant="danger" icon={<AiFillDelete />} onClick={removePost} isLoading={isLoading}>
          Eliminar
        </Button>
      </td>
    </tr>
  )
}

PostTableRow.propTypes = {
  index: PropTypes.any,
  post: PropTypes.any
}

export default PostTableRow
