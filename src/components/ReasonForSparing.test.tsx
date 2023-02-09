import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";

import ReasonForSparing , {interfaceReasonForSparingProps} from "./ReasonForSparing";

describe("Testing for the Reason For Sparing component",() => {


    test("Given the required props , when the component is rendered, then the Reason For Sparing label must be present", () => {

        render(<ReasonForSparing reasonForSparing = "" onChangeReasonForSparing = { () => {} } />);
        const testLabelText = screen.getByText(/Reason for sparing:/i);
        expect(testLabelText).toBeInTheDocument();

    });
    
    test("Given the required props , when the component is rendered, then the valid data must be present",()=>{
        
        const testInterfaceReasonForSparingProps:interfaceReasonForSparingProps = {
            reasonForSparing:"They are nice!",
            onChangeReasonForSparing:() => {},
        };
        render(<ReasonForSparing{ ... testInterfaceReasonForSparingProps } />);
        expect(screen.getByDisplayValue(testInterfaceReasonForSparingProps.reasonForSparing)).toBeInTheDocument();
        
    });

    test("Given the required props , when the component is rendered, then the valid data must be present",()=>{
        
        render(<ReasonForSparing reasonForSparing="They invented chocolate." onChangeReasonForSparing={ () => {} } />);
        expect(screen.getByDisplayValue("They invented chocolate.")).toBeInTheDocument();
        
    });
    
    
    test(`Given the required props, if an input text is typed, it must React to the new data with calling an event handler function`, async () => {

        const testonChangeReasonForSparingEventHandler = jest.fn( event => event.target.value );
        const testInterfaceReasonForSparingProps: interfaceReasonForSparingProps = {
            reasonForSparing: "",
            onChangeReasonForSparing: testonChangeReasonForSparingEventHandler,
        };
        render(<ReasonForSparing { ... testInterfaceReasonForSparingProps } />);
        const testInputTextbox = screen.getByRole("textbox");
        expect(testInputTextbox).toBeInTheDocument();
        await userEvent.type(testInputTextbox, "They have not decided to purpose a valid reason yet");
        expect(testonChangeReasonForSparingEventHandler).toHaveBeenCalledTimes(51);
        expect(testonChangeReasonForSparingEventHandler).toHaveReturnedWith("T");
        expect(testonChangeReasonForSparingEventHandler).toHaveLastReturnedWith("t");
    
    });
    
});
