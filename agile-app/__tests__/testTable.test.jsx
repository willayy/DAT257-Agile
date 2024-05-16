import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Table from '../src/components/table/table.tsx';



describe('Page', () => {
    it('renders without crashing', () => {
        render(<Table data={""}/>)
    });

    it('renders the Table of the webapp', () => {
        render(<Table data={}/>)
        const header = screen.getByTestId("TableHeader")
        const body = screen.getByTestId("TableBody")

        expect(header).toBeInTheDocument()
        expect(body).toBeInTheDocument()
    })
})