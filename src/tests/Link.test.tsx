import { render, screen } from '@testing-library/react'
import Link from '../components/Link'

describe('Link test', () => {
    it('Should be defined', () => {
        render(<Link href="/home" text={'Home'} />)
        expect(screen.getByTestId('link_component')).toBeInTheDocument()
        expect(screen.getByText('Home')).toBeInTheDocument()
    })
    it('Should have an href defined', () => {
        render(<Link href="/home" text={'Home'} />)
        expect(screen.getByText('Home').closest('a')).toHaveAttribute('href', '/home')
    })
})
