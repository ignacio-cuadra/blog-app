import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { AiFillDelete, AiOutlineNumber } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import Button from '../../common/Button'
import { postRemovedById } from '../../../slices/postSlice'
import deletePostFetcher from '../../../fetchers/deletePostFetcher'

const PostTableRow = ({ index, post }) => {
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false)
  const removePost = () => {
    setIsLoading(true)
    deletePostFetcher({ id: post.id })
      .then(() => {
        dispatch(postRemovedById(post.id))
      })
      .catch((error) => {
        console.log('error', error)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }
  return (
    <tr
      className={index % 2 === 0 ? 'bg-gray-200 dark:bg-gray-800' : 'bg-gray-300 dark:bg-gray-900'}>
      <td className="p-2 ">
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
