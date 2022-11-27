import React, { useState } from 'react'
import Button from '../common/Button'
import MainLayout from '../layout/MainLayout'
import { AiOutlineNumber, AiOutlineSearch, AiFillDelete, AiOutlinePlus } from 'react-icons/ai'

const posts = [
  {
    id: '7240560b-28ae-4a84-ae21-ae04ea1aa6da',
    name: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    description: 'Descripción',
    createdAt: '2022-11-26T22:02:16.576Z'
  },
  {
    id: '19197400-1c81-48fd-a738-1d9ca77d2d63',
    name: 'Ojos Azules',
    description:
      'Neque maiores tempora. Earum ea doloribus assumenda. Deserunt veritatis libero quisquam harum assumenda omnis quisquam.',
    createdAt: '2022-11-26T22:00:18.627Z'
  },
  {
    id: '27e81816-df59-4dea-9e7c-a332804b9226',
    name: 'British Shorthair',
    description:
      'Optio mollitia tempore quos sunt tenetur provident distinctio corporis. Unde fugiat eligendi. Aspernatur eius eligendi. Eligendi perferendis cupiditate. Veritatis voluptatem eos. Vero modi autem exercitationem est.',
    createdAt: '2022-11-26T21:58:33.423Z'
  },
  {
    id: '991b276d-a553-44b2-bd2f-a95481bfcfdb',
    name: 'Havana',
    description:
      'Temporibus nam velit expedita. Beatae atque laboriosam repudiandae corrupti deleniti odio consequatur aut veniam. Quasi doloremque officia. Excepturi neque suscipit enim harum quia dolores occaecati. Cum blanditiis consectetur tempora tempore enim vero ipsa fugiat rem. Sint harum dolorem dolores.',
    createdAt: '2022-11-26T21:57:41.690Z'
  },
  {
    id: '3fb22260-8626-403a-aacd-dd0d95728d0b',
    name: 'Highlander',
    description:
      'Quo accusantium ducimus. Dolorum maxime accusamus. Rerum optio aut ab beatae voluptatem nam similique dolore.',
    createdAt: '2022-11-26T21:56:42.055Z'
  },
  {
    id: '199c6384-0f58-4889-b6b6-15c6531b62b8',
    name: 'Korat',
    description:
      'Est nemo cum a error laudantium maxime illum velit. Praesentium repellat maiores vel officiis sequi. Non illo asperiores molestiae quod velit illo saepe libero. Quia asperiores itaque laudantium ipsa quisquam quaerat. Impedit blanditiis sint tenetur laudantium sint. Debitis mollitia cumque magni maxime deserunt dolores esse suscipit ullam.',
    createdAt: '2022-11-26T21:55:00.229Z'
  },
  {
    id: '9d514367-5b86-435e-8157-be7026e8deba',
    name: 'Singapura',
    description:
      'Pariatur aliquid molestias saepe. Nemo voluptatum perspiciatis aperiam amet minima. Quod nulla dolor eum quidem modi itaque aliquid laudantium.',
    createdAt: '2022-11-26T21:54:43.453Z'
  },
  {
    id: 'bb26b3d0-6866-400a-9245-9dcd47836c92',
    name: 'Egyptian Mau',
    description:
      'Earum delectus blanditiis quaerat nesciunt. Rerum sit tempore consectetur laudantium ad quod ratione. Placeat eaque magni debitis cumque assumenda voluptates corrupti quas. Suscipit eligendi temporibus.',
    createdAt: '2022-11-26T21:48:21.587Z'
  },
  {
    id: '12c87c26-9953-4d97-b4c1-a2d64aeca4d9',
    name: 'Persian',
    description:
      'Ducimus nisi repudiandae. Eum possimus sint quia quas sit quis quaerat earum ipsum. Nulla ipsam voluptas mollitia. Iste quas necessitatibus reiciendis aliquid ipsa. Et error repellat quia rem excepturi.',
    createdAt: '2022-11-26T21:47:34.495Z'
  },
  {
    id: '3284f5a2-15a0-4080-92ae-dcfbfb412e3c',
    name: 'American Shorthair',
    description:
      'Eveniet aliquid tempore cumque ullam dolore. Blanditiis quod aliquam quibusdam omnis unde atque quaerat quos. Temporibus reprehenderit aperiam fugiat quos reprehenderit doloribus est. Modi eligendi corporis ea eaque tempore dolor ipsam ex suscipit.',
    createdAt: '2022-11-26T21:47:34.495Z'
  }
]

const Blog = () => {
  const [filter, setFilter] = useState('')
  const [filtered, setFiltered] = useState(null)
  const [filteredPosts, setFilteredPosts] = useState(posts)
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
    <MainLayout>
      <div className="container max-w-4xl mx-auto">
        <div className="my-5 flex justify-between gap-2">
          <div className="flex items-center">
            {filtered === null ? (
              <span className="dark:text-white">
                Se ha(n) listado {filteredPosts.length} posts.
              </span>
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
        {filteredPosts.length > 0 ? (
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
                {filteredPosts.map((post, index) => {
                  return (
                    <tr
                      key={post.id}
                      className={
                        index % 2 === 0
                          ? 'bg-gray-200 dark:bg-gray-800'
                          : 'bg-gray-300 dark:bg-gray-900'
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
        ) : null}
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
      </div>
    </MainLayout>
  )
}

Blog.propTypes = {}

export default Blog
