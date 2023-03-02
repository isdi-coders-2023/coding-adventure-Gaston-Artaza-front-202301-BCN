import { render, screen } from "@testing-library/react";
import FormRegister from "./FormRegister";

describe("Given a FormRegister component", () => {
  describe("When it's rendered", () => {
    test("Then it should show an input with the label 'Email'", () => {
      const expectedLabelText = "Email";

      render(<FormRegister />);
      const emailInput = screen.getByLabelText(expectedLabelText);

      expect(emailInput).toBeInTheDocument();
    });

    test("Then it should show an input with the label 'Password'", () => {
      const expectedLabelText = "Password";

      render(<FormRegister />);
      const passwordInput = screen.getByLabelText(expectedLabelText);

      expect(passwordInput).toBeInTheDocument();
    });

    test("Then it should show an input with the label 'Image'", () => {
      const expectedLabelText = "Image";

      render(<FormRegister />);
      const imageInput = screen.getByLabelText(expectedLabelText);

      expect(imageInput).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'Sign up'", () => {
      const expectedButtonText = "Sign up";

      render(<FormRegister />);
      const button = screen.getByRole("button", { name: expectedButtonText });

      expect(button).toBeInTheDocument();
    });
  });
});
