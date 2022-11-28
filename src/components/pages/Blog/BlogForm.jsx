import { v4 as uuidv4 } from 'uuid'
import React, { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import Button from '../../common/Button'
import { postAdded } from '../../../slices/postSlice'
import storePostFetcher from '../../../fetchers/storePostFetcher'
import useNotify from '../../../hooks/useNotify'

const BlogForm = () => {
  const dispatch = useDispatch()
  const notify = useNotify()
  const [isLoading, setIsLoading] = useState(false)
  const [messageIsResalted, setMessageIsResalted] = useState(false)
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const createPost = () => {
    const post = { id: uuidv4(), name, description }
    setIsLoading(true)
    storePostFetcher(post)
      .then(({ data }) => {
        setName('')
        setDescription('')
        dispatch(postAdded(data.post))
        notify({ message: 'Se ha creado el post con éxito', variant: 'success' })
      })
      .catch((error) => {
        notify({ message: 'Ha ocurrido un error durante la creación del post', variant: 'danger' })
        console.log('error', error)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  const handleSearchSubmit = (event) => {
    event.preventDefault()
    if (name.length < 3) {
      setMessageIsResalted(true)
      return
    }
    setMessageIsResalted(false)
    createPost()
  }
  return (
    <div className="border border-gray-400 p-4  dark:border-gray-700 dark:text-gray-300">
      <span className="block mb-3 font-raleway font-semibold">Crear nuevo registro</span>
      <form className="flex my-2 gap-4 place-items-end" onSubmit={handleSearchSubmit}>
        <label>
          <span className="block mb-1 ">Nombre</span>
          <input
            type="text"
            placeholder="Nombre..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-2 outline-none dark:bg-gray-900 dark:text-gray-300"
          />
        </label>
        <label className="grow">
          <span className="block mb-1 ">Descripción</span>
          <input
            type="text"
            placeholder="Descripción..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="p-2 w-full outline-none dark:bg-gray-900 dark:text-gray-300"></input>
        </label>
        <Button variant="success" icon={<AiOutlinePlus />} isLoading={isLoading}>
          Crear
        </Button>
      </form>
      <small
        className={`transition-all ${
          messageIsResalted ? 'text-red-500 dark:text-yellow-500' : 'text-gray-500'
        }`}>
        El nombre debe tener como mínimo 3 carácteres
      </small>
    </div>
  )
}

BlogForm.propTypes = {}

export default BlogForm
