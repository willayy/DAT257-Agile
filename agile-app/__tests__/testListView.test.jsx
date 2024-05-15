import '@testing-library/jest-dom'
import { mockFetch } from './mock-fetch.ts';
import { render, screen } from '@testing-library/react'
import ListView from '../src/components/listView/listView.tsx'

describe('Page', () => {
  window.fetch = mockFetch
  it('renders a heading', () => {
    render(<ListView/>)
 
    const heading = screen.getByRole('heading', { level: 1 })
 
    expect(heading).toBeInTheDocument()
  })
})