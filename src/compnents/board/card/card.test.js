import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';

import TaskCard from './card.component'
import { TASKS } from '../../../data';

describe("Testing Card Component", () => {
  it("Rendering Card", () => {
    render(<TaskCard task = {TASKS[0]} lanes = {[]}/>);
    const divElement = screen.getByText(TASKS[0].title);
    expect(divElement).toBeInTheDocument();
  })
})