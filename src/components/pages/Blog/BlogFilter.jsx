import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { AiOutlineSearch } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import Button from '../../common/Button'

const BlogFilter = ({ isFiltered, setIsFiltered, filteredPosts, setFilteredPosts }) => {
  const posts = useSelector((state) => state.posts)
  const [messageIsResalted, setMessageIsResalted] = useState(false)
  const [filter, setFilter] = useState('')
  const [filtered, setFiltered] = useState(null)
  useEffect(() => {
    if (isFiltered) filterPosts(filtered)
    else setFilteredPosts(posts)
  }, [posts])
  const filterPosts = (value) => {
    setFilteredPosts(posts.filter((post) => post.name.toLowerCase() === value.toLowerCase()))
  }
  const clearFilter = () => {
    setFilter('')
    setFiltered('')
    setFilteredPosts(posts)
    setIsFiltered(false)
  }
  const handleSearchSubmit = (event) => {
    event.preventDefault()
    if (filter.length < 3) {
      setMessageIsResalted(true)
      return
    }
    setMessageIsResalted(false)
    setIsFiltered(true)
    setFiltered(filter)
    filterPosts(filter)
  }
  return (
    <div className="my-5 flex justify-between gap-2">
      <div className="flex items-center">
        {!isFiltered ? (
          <span className="dark:text-white">Se ha(n) listado {filteredPosts.length} posts.</span>
        ) : (
          <span className="dark:text-white">
            Has filtrado por <b>&quot;{filtered}&quot;</b>, se ha(n) filtrado {filteredPosts.length}{' '}
            posts de {posts.length}.{' '}
            <button
              className="underline text-blue-500 dark:text-yellow-500"
              onClick={() => {
                clearFilter()
              }}>
              limpiar consulta
            </button>
          </span>
        )}
      </div>
      <div>
        <form className="flex" onSubmit={handleSearchSubmit}>
          <input
            onChange={(e) => setFilter(e.target.value)}
            value={filter}
            id="filter-input"
            type="text"
            placeholder="Buscar..."
            className="p-2 outline-none dark:bg-gray-900 dark:text-gray-300"
          />
          <Button icon={<AiOutlineSearch />}>Buscar</Button>
        </form>
        <small
          className={`transition-all ${
            messageIsResalted ? 'text-red-500 dark:text-yellow-500' : 'text-gray-500'
          }`}>
          Mínimo 3 carácteres
        </small>
      </div>
    </div>
  )
}

BlogFilter.propTypes = {
  posts: PropTypes.any,
  isFiltered: PropTypes.any,
  setIsFiltered: PropTypes.any,
  filteredPosts: PropTypes.any,
  setFilteredPosts: PropTypes.any
}

export default BlogFilter
