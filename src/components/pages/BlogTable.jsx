import React from 'react'
import PropTypes from 'prop-types'
import Button from '../common/Button'
import { AiFillDelete, AiOutlineNumber } from 'react-icons/ai'

const BlogTable = ({ posts = [] }) => {
  return (
    <div className="max-h-[600px] overflow-y-auto my-5">
      <table className="w-full">
        <thead className="sticky top-0">
          <tr className="text-gray-200 bg-gray-800 dark:bg-gray-300 dark:text-gray-800">
            <th className="py-2">Nombre</th>
            <th className="py-2">Descripción</th>
            <th className="py-2"></th>
          </tr>
        </thead>
        <tbody className="dark:text-gray-300">
          {posts.map((post, index) => {
            return (
              <tr
                key={post.id}
                className={
                  index % 2 === 0 ? 'bg-gray-200 dark:bg-gray-800' : 'bg-gray-300 dark:bg-gray-900'
                }>
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
                  <Button variant="danger" icon={<AiFillDelete />}>
                    Eliminar
                  </Button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

BlogTable.propTypes = {
  posts: PropTypes.any
}

export default BlogTable
