import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { AiFillDelete, AiOutlineNumber } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import Button from '../../common/Button'
import { postRemovedById } from '../../../slices/postSlice'
import deletePostFetcher from '../../../fetchers/deletePostFetcher'
import useNotify from '../../../hooks/useNotify'

const PostTableRow = ({ index, post }) => {
  const dispatch = useDispatch()
  const notify = useNotify()
  const [isLoading, setIsLoading] = useState(false)
  const removePost = () => {
    setIsLoading(true)
    deletePostFetcher({ id: post.id })
      .then(() => {
        dispatch(postRemovedById(post.id))
        notify({ message: 'Se ha eliminado el post con éxito', variant: 'success' })
      })
      .catch((error) => {
        notify({
          message: 'Ha ocurrido un error durante la eliminación del post',
          variant: 'danger'
        })
        console.log('error', error)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }
  return (
    <tr
      className={index % 2 === 0 ? 'bg-gray-200 dark:bg-gray-800' : 'bg-gray-300 dark:bg-gray-900'}>
      <td className="table-cell sm:hidden p-2">
        <span className="block font-semibold">{post.name}</span>
        <span className="text-xs text-gray-500 flex items-center whitespace-nowrap">
          <AiOutlineNumber />
          {post.id}
        </span>
        <p className="my-2">{post.description}</p>
        <div className="flex justify-end">
          <Button
            variant="danger"
            icon={<AiFillDelete />}
            onClick={removePost}
            isLoading={isLoading}>
            Eliminar
          </Button>
        </div>
      </td>
      <td className="hidden sm:table-cell p-2">
        <span className="block">{post.name}</span>
        <span className="text-xs text-gray-500 flex items-center whitespace-nowrap">
          <AiOutlineNumber />
          {post.id}
        </span>
      </td>
      <td className="hidden sm:table-cell p-2">
        <p>{post.description}</p>
      </td>
      <td className="hidden sm:table-cell p-2">
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
