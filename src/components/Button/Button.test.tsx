import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When it is rendered and receives a text 'Sign up'", () => {
    test("Then it should show the text received", () => {
      const expectedText = "Sign up";

      render(<Button text={expectedText} />);
      const button = screen.getByRole("button", { name: expectedText });

      expect(button).toBeInTheDocument();
    });
  });
});
