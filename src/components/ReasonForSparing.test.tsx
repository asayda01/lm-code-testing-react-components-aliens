import userEvent from "@testing-library/user-event";
import { fireEvent, render, screen } from "@testing-library/react";
import ReasonForSparing , {interfaceReasonForSparingProps} from "./ReasonForSparing";

describe("Testing for the ReasonForSparing component",() => {

    test("Given the required props , when the component is rendered, then the ReasonForSparing label must be present", () => {

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

describe("Testing for the ReasonForSparing VALIDATOR component",() => {

    test(`Given the required props , 
            when the component is rendered, 
              when a valid input is entered,
                then there should be NO error messages`, () => {
        
        const testonChangeReasonForSparingEventHandler = jest.fn( event => event.target.value );
        const testInterfaceReasonForSparingProps: interfaceReasonForSparingProps = {
            reasonForSparing: "",
            onChangeReasonForSparing: testonChangeReasonForSparingEventHandler,
        };
        render(<ReasonForSparing { ... testInterfaceReasonForSparingProps } />);
        expect(screen.getByRole("textbox")).toBeInTheDocument();
        fireEvent.change(screen.getByRole("textbox"),{target:{value:"They are nice and they are , indeed , deserve a second chance."}});  
        expect(screen.queryByText('ERROR - Reason for sparing: Must be between 17 and 153 characters.',{exact:false})).not.toBeInTheDocument();

    });

    test(`Given the required props , 
            when the component is rendered, 
              when a valid input is entered, e.g. an entry including a number or a special character
                then there should be NO error messages`, () => {
        
        const testonChangeReasonForSparingEventHandler = jest.fn( event => event.target.value );
        const testInterfaceReasonForSparingProps: interfaceReasonForSparingProps = {
            reasonForSparing: "",
            onChangeReasonForSparing: testonChangeReasonForSparingEventHandler,
        };
        render(<ReasonForSparing { ... testInterfaceReasonForSparingProps } />);
        expect(screen.getByRole("textbox")).toBeInTheDocument();
        fireEvent.change(screen.getByRole("textbox"),{target:{value:"They are nice! They are , indeed , deserve a 2nd chance :) "}});  
        expect(screen.queryByText('ERROR - Reason for sparing: Must be between 17 and 153 characters.',{exact:false})).not.toBeInTheDocument();

    });

    test(`Given the required props , 
    when the component is rendered, 
      when an invalid input is entered, e.g. too short characters entry
        then there should be an error messages`, () => {
        
        const testonChangeReasonForSparingEventHandler = jest.fn( event => event.target.value );
        const testInterfaceReasonForSparingProps: interfaceReasonForSparingProps = {
            reasonForSparing: "",
            onChangeReasonForSparing: testonChangeReasonForSparingEventHandler,
            };
        render(<ReasonForSparing { ... testInterfaceReasonForSparingProps } />);
        expect(screen.getByRole("textbox")).toBeInTheDocument();
        fireEvent.change(screen.getByRole("textbox"),{target:{value:"They are nice!"}});
        expect(screen.queryByText('ERROR - Reason for sparing: Must be between 17 and 153 characters.',{exact:false})).toBeInTheDocument();

    });

    test(`Given the required props , 
    when the component is rendered, 
      when an invalid input is entered, e.g. too long characters entry
        then there should be an error messages`, () => {

        const testonChangeReasonForSparingEventHandler = jest.fn( event => event.target.value );
        const testInterfaceReasonForSparingProps: interfaceReasonForSparingProps = {
            reasonForSparing: "",
            onChangeReasonForSparing: testonChangeReasonForSparingEventHandler,
        };
        render(<ReasonForSparing { ... testInterfaceReasonForSparingProps } />);
        expect(screen.getByRole("textbox")).toBeInTheDocument();
        fireEvent.change(screen.getByRole("textbox"),
            { target : { value:`The species who lives in 
                                Observable Universe Milkyway Scutum-Centaurus Solar System Orion-Cygnus The Blue Marble also known as The Blue Planet, 
                                is nice! The species , indeed , deserves a 2nd chance :)` } } ) ;
        expect(screen.queryByText('ERROR - Reason for sparing: Must be between 17 and 153 characters.',{exact:false})).toBeInTheDocument();
    });

});