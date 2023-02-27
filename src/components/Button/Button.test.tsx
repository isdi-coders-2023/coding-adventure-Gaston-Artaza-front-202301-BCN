import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When it is rendered and receives a text 'Send'", () => {
    test("Then it should show the text received", () => {
      const expectedText = "Send";
      render(<Button text={expectedText} />);

      const button = screen.getByRole("button", { name: expectedText });
      expect(button).toBeInTheDocument();
    });
  });
});
