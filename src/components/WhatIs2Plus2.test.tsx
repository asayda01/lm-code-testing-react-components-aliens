import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";

import WhatIs2Plus2 , {interfaceWhatIs2Plus2Props} from "./WhatIs2Plus2";

describe("Testing for the What is 2 + 2 component",() => {


    test("Given the required props , when the component is rendered, then the What is 2 + 2 label must be present", () => {

        render(<WhatIs2Plus2 whatIs2Plus2 = "" onChangeWhatIs2Plus2 = { () => {} } />);
        const testLabelText = screen.getByText("What is 2 + 2 :");
        expect(testLabelText).toBeInTheDocument();

    });
    
    test("Given the required props , when the component is rendered, then the valid data must be present",()=>{
        
        const testInterfaceWhatIs2Plus2Props:interfaceWhatIs2Plus2Props = {
            whatIs2Plus2:"Not 4",
            onChangeWhatIs2Plus2:() => {},
        };
        render(<WhatIs2Plus2{ ... testInterfaceWhatIs2Plus2Props } />);
        expect(screen.getByDisplayValue(testInterfaceWhatIs2Plus2Props.whatIs2Plus2)).toBeInTheDocument();
        
    });

    test("Given the required props , when the component is rendered, then it must provide two options",()=>{
        
        render(<WhatIs2Plus2 whatIs2Plus2="Not 4" onChangeWhatIs2Plus2={ () => {} } />);
        const testTwoOptions =  screen.getAllByRole("option");
        expect(testTwoOptions.length).toEqual(2);
        
    });
    
    
    test(`Given the required props, if an input option is clicked, it must React to the new clicked option with calling an event handler function`, async () => {

        const testonChangeWhatIs2Plus2EventHandler = jest.fn( event => event.target.value );
        const testInterfaceWhatIs2Plus2Props: interfaceWhatIs2Plus2Props = {
            whatIs2Plus2: "4",
            onChangeWhatIs2Plus2: testonChangeWhatIs2Plus2EventHandler,
        };

        render(<WhatIs2Plus2 { ... testInterfaceWhatIs2Plus2Props } />);
        await userEvent.selectOptions(screen.getByRole("combobox"), "Not 4");
        expect(testonChangeWhatIs2Plus2EventHandler).toHaveLastReturnedWith("Not 4")
        expect(testonChangeWhatIs2Plus2EventHandler).toHaveBeenCalled();

        await userEvent.selectOptions(screen.getByRole("combobox"), "4");
        expect(testonChangeWhatIs2Plus2EventHandler).toHaveLastReturnedWith("4")
        expect(testonChangeWhatIs2Plus2EventHandler).toHaveBeenCalledTimes(2);

    });
    
});
