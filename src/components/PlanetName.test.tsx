import userEvent from "@testing-library/user-event";
import { fireEvent, render, screen } from "@testing-library/react";
import PlanetName , {interfaceSPlanetNameProps} from "./PlanetName";

describe("Testing for the PlanetName component",() => {

    test("Given the required props , when the component is rendered, then the PlanetName label must be present", () => {

        render(<PlanetName planetName="" onChangePlanetName = { () => {} } />);
        const testLabelText = screen.getByText(/Planet Name:/i);
        expect(testLabelText).toBeInTheDocument();

    });
    
    test("Given the required props , when the component is rendered, then the valid data must be present",()=>{
        
        const testInterfaceSPlanetNameProps:interfaceSPlanetNameProps = {
            planetName:"Earth",
            onChangePlanetName:() => {},
        };
        render(<PlanetName{ ... testInterfaceSPlanetNameProps } />);
        expect(screen.getByDisplayValue(testInterfaceSPlanetNameProps.planetName)).toBeInTheDocument();
        
    });

    test("Given the required props , when the component is rendered, then the valid data must be present",()=>{
        
        render(<PlanetName planetName="The Blue Planet" onChangePlanetName={ () => {} } />);
        expect(screen.getByDisplayValue("The Blue Planet")).toBeInTheDocument();
        
    });
    
    test(`Given the required props, if an input text is typed, it must React to the new data with calling an event handler function`, async () => {

        const testonChangePlanetNameEventHandler = jest.fn( event => event.target.value );
        const testInterfaceSPlanetNameProps: interfaceSPlanetNameProps = {
            planetName: "",
            onChangePlanetName: testonChangePlanetNameEventHandler,
        };
        render(<PlanetName { ... testInterfaceSPlanetNameProps } />);
        const testInputTextbox = screen.getByRole("textbox");
        expect(testInputTextbox).toBeInTheDocument();
        await userEvent.type(testInputTextbox, "Gaia");
        expect(testonChangePlanetNameEventHandler).toHaveBeenCalledTimes(4);
        expect(testonChangePlanetNameEventHandler).toHaveReturnedWith("G");
        expect(testonChangePlanetNameEventHandler).toHaveLastReturnedWith("a");
    
    });
    
});

describe("Testing for the PlanetName VALIDATOR component",() => {

    test(`Given the required props , 
            when the component is rendered, 
              when a valid input is entered,
                then there should be NO error messages`, () => {
        
        const testonChangePlanetNameEventHandler = jest.fn( event => event.target.value );
        const testInterfaceSPlanetNameProps: interfaceSPlanetNameProps = {
            planetName: "",
            onChangePlanetName: testonChangePlanetNameEventHandler,
        };
        render(<PlanetName { ... testInterfaceSPlanetNameProps } />);
        expect(screen.getByRole("textbox")).toBeInTheDocument();
        fireEvent.change(screen.getByRole("textbox"),{target:{value:"Gaia"}});  
        expect(screen.queryByText('ERROR - Planet Name: Must be between 2 and 49 characters. Numbers are allowed, but no special characters.',{exact:false})).not.toBeInTheDocument();

    });

    test(`Given the required props , 
            when the component is rendered, 
              when a valid input is entered, e.g. an entry including a number
                then there should be NO error messages`, () => {
        
        const testonChangePlanetNameEventHandler = jest.fn( event => event.target.value );
        const testInterfaceSPlanetNameProps: interfaceSPlanetNameProps = {
            planetName: "",
            onChangePlanetName: testonChangePlanetNameEventHandler,
        };
        render(<PlanetName { ... testInterfaceSPlanetNameProps } />);
        expect(screen.getByRole("textbox")).toBeInTheDocument();
        fireEvent.change(screen.getByRole("textbox"),{target:{value:"The 3rd Planet of The 1st Solar System"}});  
        expect(screen.queryByText('ERROR - Planet Name: Must be between 2 and 49 characters. Numbers are allowed, but no special characters.',{exact:false})).not.toBeInTheDocument();

    });

    test(`Given the required props , 
    when the component is rendered, 
      when an invalid input is entered, e.g. too short characters entry
        then there should be an error messages`, () => {
        
        const testonChangePlanetNameEventHandler = jest.fn( event => event.target.value );
        const testInterfaceSPlanetNameProps: interfaceSPlanetNameProps = {
            planetName: "",
            onChangePlanetName: testonChangePlanetNameEventHandler,
            };
        render(<PlanetName { ... testInterfaceSPlanetNameProps } />);
        expect(screen.getByRole("textbox")).toBeInTheDocument();
        fireEvent.change(screen.getByRole("textbox"),{target:{value:"W"}});
        expect(screen.queryByText('ERROR - Planet Name: Must be between 2 and 49 characters. Numbers are allowed, but no special characters.',{exact:false})).toBeInTheDocument();

    });

    test(`Given the required props , 
    when the component is rendered, 
      when an invalid input is entered, e.g. too long characters entry
        then there should be an error messages`, () => {

        const testonChangePlanetNameEventHandler = jest.fn( event => event.target.value );
        const testInterfaceSPlanetNameProps: interfaceSPlanetNameProps = {
            planetName: "",
            onChangePlanetName: testonChangePlanetNameEventHandler,
        };
        render(<PlanetName { ... testInterfaceSPlanetNameProps } />);
        expect(screen.getByRole("textbox")).toBeInTheDocument();
        fireEvent.change(screen.getByRole("textbox"),
            { target : { value:"Observable Universe Milkyway Scutum-Centaurus Solar System Orion-Cygnus The Blue Marble also known as The Blue Planet" } } ) ;
        expect(screen.queryByText('ERROR - Planet Name: Must be between 2 and 49 characters. Numbers are allowed, but no special characters.',{exact:false})).toBeInTheDocument();
    });

    test(`Given the required props , 
    when the component is rendered, 
      when an invalid input is entered, e.g. a special character entry
        then there should be an error messages`, () => {

        const testonChangePlanetNameEventHandler = jest.fn( event => event.target.value );
        const testInterfaceSPlanetNameProps: interfaceSPlanetNameProps = {
            planetName: "",
            onChangePlanetName: testonChangePlanetNameEventHandler,
        };
        render(<PlanetName { ... testInterfaceSPlanetNameProps } />);
        expect(screen.getByRole("textbox")).toBeInTheDocument();
        fireEvent.change(screen.getByRole("textbox"),
            {target:{value:"!£$%&@!£$%&@#?"}});
        expect(screen.queryByText('ERROR - Planet Name: Must be between 2 and 49 characters. Numbers are allowed, but no special characters.',{exact:false})).toBeInTheDocument();
    });

});