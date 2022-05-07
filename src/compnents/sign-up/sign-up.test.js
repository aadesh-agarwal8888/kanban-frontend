import {render, screen} from '@testing-library/react';
import Signup from './sign-up.component';
import '@testing-library/jest-dom';

test('Rendering SignUp Component', () => {
  render(<Signup />);
  const divElement = screen.getByText(/I do not have a Account/);
  expect(divElement).toBeInTheDocument();
});