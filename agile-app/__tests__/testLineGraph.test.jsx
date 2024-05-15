import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import LineGraph from '../src/components/lineGraph/lineGraph.tsx';

describe('LineGraph', () => {
    it('renders without crashing', () => {
        render(<LineGraph selectedOptionCrime="" selectedOptionLoc="" />);
    });

    it('renders the chart with correct attributes', () => {
        const { getByTestId } = render(<LineGraph selectedOptionCrime="" selectedOptionLoc="" />);
        const chart = screen.getByTestId('myChart');
        expect(chart).toBeInTheDocument();
        expect(chart).toHaveAttribute('width', '400');
        expect(chart).toHaveAttribute('height', '400');
    });
});
