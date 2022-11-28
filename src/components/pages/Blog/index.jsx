import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AiOutlineClose, AiOutlineLoading } from 'react-icons/ai'
import MainLayout from '../../layout/MainLayout'
import { postsLoaded } from '../../../slices/postSlice'
import BlogFilter from './BlogFilter'
import BlogTable from './BlogTable'
import BlogForm from './BlogForm'
import listPostsFetcher from '../../../fetchers/listPostsFetcher'
import Button from '../../common/Button'

const Blog = () => {
  const dispatch = useDispatch()
  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const posts = useSelector((state) => state.posts)
  const [filteredPosts, setFilteredPosts] = useState(posts)
  const [isFiltered, setIsFiltered] = useState(false)
  const loadPosts = () => {
    setIsLoading(true)
    listPostsFetcher()
      .then(({ data }) => {
        dispatch(postsLoaded(data.posts))
        setIsError(false)
        setIsLoading(false)
      })
      .catch((error) => {
        setIsError(true)
        console.log('error', error)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }
  useEffect(() => {
    loadPosts()
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

  if (isError)
    return (
      <MainLayout>
        <div className="container max-w-4xl mx-auto">
          <div className="flex flex-col gap-2 items-center justify-center my-10">
            <AiOutlineClose className="text-4xl text-red-500 dark:text-red-500" />
            <span className="text-sm text-red-500 dark:text-red-500">
              Ha ocurrido un error durante la carga de posts
            </span>
            <div className="py-5">
              <Button variant="danger" onClick={loadPosts}>
                Recargar
              </Button>
            </div>
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
