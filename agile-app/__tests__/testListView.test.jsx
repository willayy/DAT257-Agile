import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import ListView from '../src/components/listView/listView.tsx'

describe('Page', () => {
  it('renders a heading', () => {
    const { container } = render(<ListView />)
 
    const text = screen.getByText('Sök Händelser')
    const ulElement = container.querySelector('ul');
    const ulContent = ulElement.textContent;
    const liElements = ulElement.querySelectorAll('div');
 
    expect(text).toBeInTheDocument()
    expect(ulContent).toContain(' ');
    expect(liElements.length).toBeGreaterThan(0);
  })
})