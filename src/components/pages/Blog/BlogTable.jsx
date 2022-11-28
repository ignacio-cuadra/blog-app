import React from 'react'
import PropTypes from 'prop-types'
import PostTableRow from './PostTableRow'

const BlogTable = ({ posts = [] }) => {
  return (
    <div className="max-h-[600px] overflow-y-auto my-5">
      <table className="w-full">
        <thead className="sticky top-0">
          <tr className="text-gray-200 bg-gray-800 dark:bg-gray-300 dark:text-gray-800">
            <th className="py-2 w-0">Nombre</th>
            <th className="py-2">Descripción</th>
            <th className="py-2 w-0"></th>
          </tr>
        </thead>
        <tbody className="dark:text-gray-300">
          {posts.map((post, index) => (
            <PostTableRow key={post.id} index={index} post={post} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

BlogTable.propTypes = {
  posts: PropTypes.any
}

export default BlogTable
