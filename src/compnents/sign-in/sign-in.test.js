import {render, screen} from '@testing-library/react';
import Signin from './sign-in.component';
import '@testing-library/jest-dom';

describe("Rendering Test", () => {
  it("Rendering titile", () => {
    render(<Signin />);
    const divElement = screen.getByText(/I already have a account/);
    expect(divElement).toBeInTheDocument();
  })
})