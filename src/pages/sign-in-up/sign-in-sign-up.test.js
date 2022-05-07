import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';

import SignInAndSignUp from './sign-in-sign-up.component';

describe("Testing SignIn SignUp Page", () => {
  it("Rendering Page", () => {
    render(<SignInAndSignUp />);
    const divElement = screen.getByText(/Welcome to the world of Kanban/);
    expect(divElement).toBeInTheDocument();
  })
})