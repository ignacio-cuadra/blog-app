import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Button from '../common/Button'
import { AiOutlineSearch } from 'react-icons/ai'

const BlogFilter = ({ posts, filteredPosts, setFilteredPosts }) => {
  const [filter, setFilter] = useState('')
  const [filtered, setFiltered] = useState(null)
  const filterPosts = (value) => {
    setFilteredPosts(posts.filter((post) => post.name === value))
  }
  const clearFilter = () => {
    setFilter('')
    setFiltered(null)
    setFilteredPosts(posts)
  }
  const handleSearchSubmit = (event) => {
    event.preventDefault()
    console.log(filter, '')
    setFiltered(filter)
    filterPosts(filter)
  }
  return (
    <div className="my-5 flex justify-between gap-2">
      <div className="flex items-center">
        {filtered === null ? (
          <span className="dark:text-white">Se ha(n) listado {filteredPosts.length} posts.</span>
        ) : (
          <span className="dark:text-white">
            Has filtrado por <b>&quot;{filtered}&quot;</b>, se ha(n) encontrado{' '}
            {filteredPosts.length} posts.{' '}
            <button
              className="underline dark:text-yellow-500"
              onClick={() => {
                clearFilter()
              }}>
              limpiar consulta
            </button>
          </span>
        )}
      </div>
      <form className="flex" onSubmit={handleSearchSubmit}>
        <input
          onChange={(e) => setFilter(e.target.value)}
          value={filter ?? ''}
          id="filter-input"
          type="text"
          placeholder="Buscar..."
          className="p-2 outline-none dark:bg-gray-900 dark:text-gray-300"
        />
        <Button icon={<AiOutlineSearch />}>Buscar</Button>
      </form>
    </div>
  )
}

BlogFilter.propTypes = {
  posts: PropTypes.any,
  filteredPosts: PropTypes.any,
  setFilteredPosts: PropTypes.any
}

export default BlogFilter
