import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';

import Lane from './lane.component';
import { LANES, TASKS } from '../../../data';

describe("Testing Lane", () => {
  it("Rendering Lane", () => {
    render(<Lane tasks = {[TASKS[0]]} user = {[]} lanes = {[LANES[0]]}/>);
    const divElement = screen.getByText(TASKS[0].title);
    expect(divElement).toBeInTheDocument();
  })
})