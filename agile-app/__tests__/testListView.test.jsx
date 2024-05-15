import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import ListView from '../src/components/listView/listView.tsx'

describe('Page', () => {
  it('renders the listView of the webapp', () => {
    render(<ListView />)
 
    const header = screen.getByTestId('ListViewHeader')
    const datePickerBoxComponent = screen.getByTestId('DatePickerBox')
    const parentSearchComboBoxComponent = screen.getByTestId('ParentSearchComboBox')
    const crimeEventList = screen.getByTestId('CrimeEventList')
 
    expect(header).toBeInTheDocument()
    expect(datePickerBoxComponent).toBeInTheDocument()
    expect(parentSearchComboBoxComponent).toBeInTheDocument()
    expect(crimeEventList).toBeInTheDocument()
  })
})