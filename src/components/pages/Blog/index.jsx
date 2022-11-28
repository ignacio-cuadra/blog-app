import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AiOutlineLoading } from 'react-icons/ai'
import MainLayout from '../../layout/MainLayout'
import { postsLoaded } from '../../../slices/postSlice'
import BlogFilter from './BlogFilter'
import BlogTable from './BlogTable'
import BlogForm from './BlogForm'
import listPostsFetcher from '../../../fetchers/listPostsFetcher'

const Blog = () => {
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(true)
  const posts = useSelector((state) => state.posts)
  const [filteredPosts, setFilteredPosts] = useState(posts)
  const [isFiltered, setIsFiltered] = useState(false)
  useEffect(() => {
    listPostsFetcher()
      .then(({ data }) => {
        dispatch(postsLoaded(data.posts))
        setIsLoading(false)
      })
      .catch((error) => {
        console.log('error', error)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  if (isLoading)
    return (
      <MainLayout>
        <div className="container max-w-4xl mx-auto">
          <div className="flex flex-col gap-2 items-center justify-center my-10">
            <AiOutlineLoading className="text-4xl animate-spin text-blue-500 dark:text-yellow-500" />
            <span className="text-sm text-blue-500 dark:text-yellow-500">
              Cargando listado de posts
            </span>
          </div>
        </div>
      </MainLayout>
    )

  return (
    <MainLayout>
      <div className="container max-w-4xl mx-auto">
        <BlogFilter
          isFiltered={isFiltered}
          setIsFiltered={setIsFiltered}
          filteredPosts={filteredPosts}
          setFilteredPosts={setFilteredPosts}
        />
        {filteredPosts.length > 0 ? <BlogTable posts={filteredPosts} /> : null}
        <BlogForm />
      </div>
    </MainLayout>
  )
}

Blog.propTypes = {}

export default Blog
