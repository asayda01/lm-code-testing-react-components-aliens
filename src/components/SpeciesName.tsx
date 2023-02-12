import { useState } from "react";
import ErrorMessage from "./ErrorMessage";

export interface interfaceSpeciesNameProps {

    speciesName:string;

    onChangeSpeciesName:(event:React.ChangeEvent<HTMLInputElement>)=>void;

};

const SpeciesName : React.FC<interfaceSpeciesNameProps> = ({speciesName,onChangeSpeciesName}) => {

    const [errorMessage , setErrorMessage] = useState< string | undefined >('');
    const validate : ( value:string ) => string | undefined = ( value ) => {
        if ( (value.length<3 || value.length>23) || (!(/^[a-zA-Z]*$/).test(value)) ){
            return "ERROR - Species Name: Must be between 3 and 23 characters. No numbers or special characters allowed!"
        };

        return undefined;
    };

    return (

    <>

        <label htmlFor='speciesName'>Species Name: </label>

        <input id='idspeciesName'
            type='text'
            value={speciesName}
            onChange={ (event) => {
                                    const errorMessage = validate(event.target.value);
                                    setErrorMessage(errorMessage);
                                    onChangeSpeciesName(event); 
                                }
                    }  
        />

        < ErrorMessage errorMessage = {errorMessage} />
    
    </>

    );
};

export default SpeciesName; 