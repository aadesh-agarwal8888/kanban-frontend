import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import { unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import HomeScreen from './home.page';
import { USERS } from '../../data';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe("Testing Home", () => {
    it("Rendering Home", () => {
        render(<HomeScreen user = {USERS[0]}/>);
        const divElement = screen.getByText(/Welcome/);
        expect(divElement).toBeInTheDocument();
        
    })
})