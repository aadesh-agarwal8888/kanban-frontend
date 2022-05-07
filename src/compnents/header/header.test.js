import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';

import Header from './header.component'

describe("Testing Header", () => {
  it("Rendering Header", () => {
    render(<Header />);
    const divElement = screen.getByText(/Welcome to the world of Kanban/);
    expect(divElement).toBeInTheDocument();
  })
})