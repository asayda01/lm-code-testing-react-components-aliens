import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";


import NumberOfBeings , {interfaceSNumberOfBeingsProps} from "./NumberOfBeings";

describe("Testing for the Number Of Beings component",() => {


    test("Given the required props , when the component is rendered, then the Number Of Beings label must be present", () => {

        render(<NumberOfBeings numberOfBeings="" onChangeNumberOfBeings = { () => {} } />);
        const testLabelText = screen.getByText(/Number Of Beings:/i);
        expect(testLabelText).toBeInTheDocument();

    });
    
    test("Given the required props , when the component is rendered, then the valid data must be present",()=>{
        
        const testInterfaceSNumberOfBeingsProps:interfaceSNumberOfBeingsProps = {
            numberOfBeings:"8014725546",
            onChangeNumberOfBeings:() => {},
        };
        render(<NumberOfBeings{ ... testInterfaceSNumberOfBeingsProps } />);
        expect(screen.getByDisplayValue(testInterfaceSNumberOfBeingsProps.numberOfBeings)).toBeInTheDocument();
        
    });

    test("Given the required props , when the component is rendered, then the valid data must be present",()=>{
        
        render(<NumberOfBeings numberOfBeings="999999999" onChangeNumberOfBeings={ () => {} } />);
        expect(screen.getByDisplayValue("999999999")).toBeInTheDocument();
        
    });
    
    
    test(`Given the required props, if an input text is typed, it must React to the new data with calling an event handler function`, async () => {

        const testonChangeNumberOfBeingsEventHandler = jest.fn( event => event.target.value );
        const testInterfaceSNumberOfBeingsProps: interfaceSNumberOfBeingsProps = {
            numberOfBeings: "",
            onChangeNumberOfBeings: testonChangeNumberOfBeingsEventHandler,
        };
        render(<NumberOfBeings { ... testInterfaceSNumberOfBeingsProps } />);
        const testInputTextbox = screen.getByRole("textbox");
        expect(testInputTextbox).toBeInTheDocument();
        await userEvent.type(testInputTextbox, "123456789");
        expect(testonChangeNumberOfBeingsEventHandler).toHaveBeenCalledTimes(9);
        expect(testonChangeNumberOfBeingsEventHandler).toHaveReturnedWith("1");
        expect(testonChangeNumberOfBeingsEventHandler).toHaveLastReturnedWith("9");
    
    });
    
});


