import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";

import SpeciesName, {interfaceSpeciesNameProps} from "./SpeciesName";

describe("Testing for the SpeciesName component",() => {


    test("Given the required props , when the component is rendered, then the Species Name label must be present", () => {

        render(<SpeciesName speciesName='' onChangeSpeciesName={ () => {} } />);
        const testLabelText = screen.getByText(/Species Name:/i);
        expect(testLabelText).toBeInTheDocument();

    });
    
    test("Given the required props , when the component is rendered, then the valid data must be present",()=>{
        
        const testInterfaceSpeciesNameProps:interfaceSpeciesNameProps = {
            speciesName:"Humans",
            onChangeSpeciesName:() => {},
        };
        render(<SpeciesName{ ... testInterfaceSpeciesNameProps } />);
        expect(screen.getByDisplayValue(testInterfaceSpeciesNameProps.speciesName)).toBeInTheDocument();
        
    });

    test("Given the required props , when the component is rendered, then the valid data must be present",()=>{
        
        render(<SpeciesName speciesName="Earthlings" onChangeSpeciesName={ () => {} } />);
        expect(screen.getByDisplayValue("Earthlings")).toBeInTheDocument();
        
    });
    
    
    test(`Given the required props, if an input text is typed, it must React to the new data with calling an event handler function`, async () => {

        const testonChangeSpeciesNameEventHandler = jest.fn( event => event.target.value );
        const testInterfaceSpeciesNameProps: interfaceSpeciesNameProps = {
            speciesName: "",
            onChangeSpeciesName: testonChangeSpeciesNameEventHandler,
        };
        render(<SpeciesName { ... testInterfaceSpeciesNameProps } />);
        const testInputTextbox = screen.getByRole("textbox");
        expect(testInputTextbox).toBeInTheDocument();
        await userEvent.type(testInputTextbox, "Earthlings");
        expect(testonChangeSpeciesNameEventHandler).toHaveBeenCalledTimes(10);
        expect(testonChangeSpeciesNameEventHandler).toHaveReturnedWith("E");
        expect(testonChangeSpeciesNameEventHandler).toHaveLastReturnedWith("s");
    
    });
    
});


