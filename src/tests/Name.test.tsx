import { render, screen } from '@testing-library/react'
import Name from '../components/Name'

describe('Name component test', () => {
    it('Should be defined', () => {
        render(<Name name="" />)
        expect(screen.getByTestId('name_component')).toBeDefined()
    })
    it('Should display the name passed as props', () => {
        render(<Name name="Hello world" />)
        expect(screen.getByText('Hello world')).toBeDefined()
    })
})
