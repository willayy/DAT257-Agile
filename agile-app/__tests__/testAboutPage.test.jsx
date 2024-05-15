import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import AboutPage from 'agile-app/src/app/about/page.tsx'

describe('Page', () => {
  it('renders the aboutPage of the webapp', () => {
    render(<AboutPage />)
 
    // gets different html elements by their data-testid
    const header = screen.getByTestId('AboutPageHeader')
    const fnTextP = screen.getByTestId('FnTextP')
    const developerDiv = screen.getByTestId('DeveloperDiv')
 
    // checks if the elements are in the document
    expect(header).toBeInTheDocument()
    expect(fnTextP).toBeInTheDocument()
    expect(developerDiv).toBeInTheDocument()

    // checks if the elements have the expected content, just some text bigger than 50 characters.
    expect(fnTextP.textContent.length).toBeGreaterThan(50)
  })
})