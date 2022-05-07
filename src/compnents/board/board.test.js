import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';

import Board from './board.component';
import { USERS } from '../../data';

describe("Testing Board Component", () => {
  it("Rendering Board", () => {
    render(<Board user = {USERS[0]} lanes = {[]} tasks = {[]}/>);
    const divElement = screen.getByText(/Welcome/);
    expect(divElement).toBeInTheDocument();
  })
})