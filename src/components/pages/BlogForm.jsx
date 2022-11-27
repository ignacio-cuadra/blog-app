import React from 'react'
import Button from '../common/Button'
import { AiOutlinePlus } from 'react-icons/ai'

const BlogForm = () => {
  return (
    <div className="border border-gray-400 p-4  dark:border-gray-700 dark:text-gray-300">
      <span className="font-raleway font-semibold ">Crear nuevo registro</span>
      <div className="py-5 flex gap-4 place-items-end">
        <label>
          <span className="block mb-1 ">Nombre</span>
          <input
            type="text"
            placeholder="Nombre..."
            className="p-2 outline-none dark:bg-gray-900 dark:text-gray-300"
          />
        </label>
        <label className="grow">
          <span className="block mb-1 ">Descripción</span>
          <input
            type="text"
            placeholder="Descripción..."
            className="p-2 w-full outline-none dark:bg-gray-900 dark:text-gray-300"></input>
        </label>
        <Button variant="success" icon={<AiOutlinePlus />}>
          Crear
        </Button>
      </div>
    </div>
  )
}

BlogForm.propTypes = {}

export default BlogForm
