import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import ListView from '../src/components/listView/listView.tsx'

describe('Page', () => {
  it('renders a heading', () => {
    const { container } = render(<ListView />)
 
    const text = screen.getByText('Sök Händelser')
    const ulElement = container.querySelector('ul');
    const ulContent = ulElement.childElementCount;
    console.log(ulContent)
  
 
    expect(text).toBeInTheDocument()
    expect(ulElement).toBeInTheDocument()
    expect(ulContent.length).toBeGreaterThan(0);
  })
})