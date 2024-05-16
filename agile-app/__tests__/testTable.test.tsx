import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Table from '../src/components/table/table';

describe('Page', () => {
    it('renders the Table of the webapp', () => {
        render(<Table data={[["Göteborg", "Inbrott", 25],
                             ["Göteborg", "Stöld", 24  ],
                             ["Göteborg", "Mord", 10   ]]}/>)
        const header = screen.getByTestId("TableHeader")
        const body = screen.getByTestId("TableBody")

        expect(header).toBeInTheDocument()
        expect(body).toBeInTheDocument()
    })
})