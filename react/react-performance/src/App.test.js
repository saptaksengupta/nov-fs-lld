import { render, screen } from '@testing-library/react';
import App from './App';
import renderer from "react-test-renderer";

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('renders my main string properly', () => { 
  render(<App />);
  const pElement = screen.getByText(/Hello, a test implementation/i);
  expect(pElement).toBeInTheDocument();
});


test('renders hello world', () => { 
  render(<App />);
  const dElement = screen.getByText(/Hello world!!!/i);
  expect(dElement).toBeInTheDocument();
});

describe("Jest Snapshot testing suite", () => {
  it("Matches DOM Snapshot", () => {
    const domTree = renderer.create(<App />).toJSON();
    expect(domTree).toMatchSnapshot();
  });
});
