import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render } from '@testing-library/react'
import { faker } from '@faker-js/faker'
import Button from './Button'

describe('<Button/>', () => {
  test('test default', () => {
    const buttonText = faker.animal.cat()
    const component = render(<Button>{buttonText}</Button>)
    const button = component.getByLabelText(buttonText)
    expect(button).toHaveClass('bg-blue-500')
  })

  test('test click', () => {
    const buttonText = faker.animal.cat()
    const mockHandler = jest.fn()
    const component = render(<Button onClick={mockHandler}>{buttonText}</Button>)
    const button = component.getByLabelText(buttonText)
    fireEvent.click(button)
    expect(mockHandler.mock.calls).toHaveLength(1)
  })

  test('test loading block', () => {
    const buttonText = faker.animal.cat()
    const mockHandler = jest.fn()
    const component = render(
      <Button onClick={mockHandler} isLoading={true}>
        {buttonText}
      </Button>
    )
    const button = component.getByLabelText(buttonText)
    fireEvent.click(button)
    expect(mockHandler.mock.calls).toHaveLength(0)
  })
})
