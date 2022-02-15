import { render, screen, fireEvent } from '@testing-library/react'
import Button from '../components/Button'

describe('Button component', () => {
    it('Should be defined', () => {
        render(<Button onClick={() => {}} text="Hello World" />)
        expect(screen.getByTestId('button_component')).toBeInTheDocument()
        expect(screen.getByText('Hello World')).toBeInTheDocument()
    })
    it('Should be clickable ', () => {
        const handleClick = jest.fn()
        render(<Button onClick={handleClick} text="Hello World" />)
        fireEvent.click(screen.getByTestId('button_component'))
        expect(handleClick).toHaveBeenCalledTimes(1)
    })
})
