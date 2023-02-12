import { render, screen } from "@testing-library/react";

import ErrorMessage , {interfaceErrorMessageProps} from "./ErrorMessage";

describe("Testing for the Error Message component",() => {

    test("Given the required props , when the component is rendered, then the Error Message must be present", () => {

        const testInterfaceErrorMessageProps : interfaceErrorMessageProps = {
            errorMessage  : 'An unexpected error occured'
        };
        render(<ErrorMessage { ... testInterfaceErrorMessageProps } />);
        expect(screen.getByText( "" + testInterfaceErrorMessageProps.errorMessage )).toBeInTheDocument();

    });
    
}
);