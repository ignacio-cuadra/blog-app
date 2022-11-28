import { faker } from '@faker-js/faker'

describe('Blog App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })
  it('websate can be opened', () => {
    cy.contains('Blog')
  })
  it('post form can create post', () => {
    const name = faker.animal.cat()
    const description = faker.lorem.paragraph()
    cy.get('input[placeholder="Nombre..."]').type(name)
    cy.get('input[placeholder="Descripción..."]').type(description)
    cy.get('button[aria-label="Crear"]').click()
    cy.contains('Se ha creado el post con éxito')
  })

  it('delete post', () => {
    cy.get('tr:last td:last button').click()
    cy.contains('Se ha eliminado el post con éxito')
  })
})
