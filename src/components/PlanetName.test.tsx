import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";

import PlanetName , {interfaceSPlanetNameProps} from "./PlanetName";


describe("Testing for the Planet Name component",() => {


    test("Given the required props , when the component is rendered, then the Planet Name label must be present", () => {

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
