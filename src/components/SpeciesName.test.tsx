import userEvent from "@testing-library/user-event";
import { fireEvent, render, screen } from "@testing-library/react";
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

describe("Testing for the SpeciesName VALIDATOR component",() => {

    test(`Given the required props , 
            when the component is rendered, 
              when a valid input is entered,
                then there should be NO error messages`, async () => {
        
        const testonChangeSpeciesNameEventHandler = jest.fn( event => event.target.value );
        const testInterfaceSpeciesNameProps: interfaceSpeciesNameProps = {
            speciesName: "Human",
            onChangeSpeciesName: testonChangeSpeciesNameEventHandler,
        };
        render(<SpeciesName { ... testInterfaceSpeciesNameProps } />);
        expect(screen.getByRole("textbox")).toBeInTheDocument();
        await userEvent.type(screen.getByRole("textbox"),"Earthlings"); 
        //fireEvent.change(screen.getByRole("textbox"),{target:{value:"Mankind"}});
        expect(screen.queryByText('ERROR - Species Name: Must be between 3 and 23',{exact:false})).not.toBeInTheDocument();

    });

    test(`Given the required props , 
    when the component is rendered, 
      when an invalid input is entered, e.g. too short characters entry
        then there should be an error messages`, () => {
        
        const testonChangeSpeciesNameEventHandler = jest.fn( event => event.target.value );
        const testInterfaceSpeciesNameProps: interfaceSpeciesNameProps = {
            speciesName: "",
            onChangeSpeciesName: testonChangeSpeciesNameEventHandler,
            };
        render(<SpeciesName { ... testInterfaceSpeciesNameProps } />);
        expect(screen.getByRole("textbox")).toBeInTheDocument();
        fireEvent.change(screen.getByRole("textbox"),{target:{value:"MC"}});
        expect(screen.queryByText('ERROR - Species Name: Must be between 3 and 23',{exact:false})).toBeInTheDocument();

    });

    test(`Given the required props , 
    when the component is rendered, 
      when an invalid input is entered, e.g. too long characters entry
        then there should be an error messages`, () => {

        const testonChangeSpeciesNameEventHandler = jest.fn( event => event.target.value );
        const testInterfaceSpeciesNameProps: interfaceSpeciesNameProps = {
            speciesName: "",
            onChangeSpeciesName: testonChangeSpeciesNameEventHandler,
        };
        render(<SpeciesName { ... testInterfaceSpeciesNameProps } />);
        expect(screen.getByRole("textbox")).toBeInTheDocument();
        fireEvent.change(screen.getByRole("textbox"),
            {target:{value:"Animalia Chordata Mammalia Primates Haplorhini Simiiformes Hominidae Homininae Hominini Homo Homosapiens"}});
        expect(screen.queryByText('ERROR - Species Name: Must be between 3 and 23',{exact:false})).toBeInTheDocument();
    });

    test(`Given the required props , 
    when the component is rendered, 
      when an invalid input is entered, e.g. a number entry
        then there should be an error messages`, () => {

        const testonChangeSpeciesNameEventHandler = jest.fn( event => event.target.value );
        const testInterfaceSpeciesNameProps: interfaceSpeciesNameProps = {
            speciesName: "",
            onChangeSpeciesName: testonChangeSpeciesNameEventHandler,
        };
        render(<SpeciesName { ... testInterfaceSpeciesNameProps } />);
        expect(screen.getByRole("textbox")).toBeInTheDocument();
        fireEvent.change(screen.getByRole("textbox"),
            {target:{value:"M@nK!nd?"}});
        expect(screen.queryByText('ERROR - Species Name: Must be between 3 and 23',{exact:false})).toBeInTheDocument();
    });

    test(`Given the required props , 
    when the component is rendered, 
      when an invalid input is entered, e.g. a special character entry
        then there should be an error messages`, () => {

        const testonChangeSpeciesNameEventHandler = jest.fn( event => event.target.value );
        const testInterfaceSpeciesNameProps: interfaceSpeciesNameProps = {
            speciesName: "",
            onChangeSpeciesName: testonChangeSpeciesNameEventHandler,
        };
        render(<SpeciesName { ... testInterfaceSpeciesNameProps } />);
        expect(screen.getByRole("textbox")).toBeInTheDocument();
        fireEvent.change(screen.getByRole("textbox"),
            {target:{value:"Earthl1ngs"}});
        expect(screen.queryByText('ERROR - Species Name: Must be between 3 and 23',{exact:false})).toBeInTheDocument();
        
    });

});