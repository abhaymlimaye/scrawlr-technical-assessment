import React, { useState } from "react";
import { fireEvent, render, screen } from '@testing-library/react';
import UpvoteButton from "./UpvoteButton";


jest.mock("lucide-react", () => ({ // Mock ArrowUp to prevent Jest from failing
  ArrowUp: () => <svg data-testid="mock-arrow-up" />,
}));

test("toggles selection state when clicked", () => {
  const Wrapper = () => { // Create a wrapper component to handle state
    const [selected, setSelected] = useState(false);
    return <UpvoteButton isSelected={selected} onClick={() => setSelected(!selected)} />;
  };

  render(<Wrapper />); // Render the wrapper component
  
  const button = screen.getByRole("button");

  expect(button).toHaveClass("default"); // Initial state should be default
   
  fireEvent.click(button); // Click to select
  expect(button).toHaveClass("selected");

  
  fireEvent.click(button); // Click again to deselect
  expect(button).toHaveClass("default");

});
