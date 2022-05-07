import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';

import TaskCreator from './task-creator.components';

describe("Testing task Creator", () => {
  it("Rendering Task Creator", () => {
    render(<TaskCreator employees = {[]}/>);
    const divElement = screen.getByText(/Task/);
    expect(divElement).toBeInTheDocument();
  })
})