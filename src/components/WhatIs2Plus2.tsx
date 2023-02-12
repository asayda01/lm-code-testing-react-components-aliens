import { useState } from "react";
import ErrorMessage from "./ErrorMessage";

export interface interfaceWhatIs2Plus2Props {

    whatIs2Plus2:string;
    
    onChangeWhatIs2Plus2:(event:React.ChangeEvent<HTMLSelectElement>)=>void;

};

const WhatIs2Plus2 : React.FC<interfaceWhatIs2Plus2Props> = ({whatIs2Plus2,onChangeWhatIs2Plus2}) => {
    
    const [errorMessage , setErrorMessage] = useState< string | undefined >('');
    const validate : ( value:string ) => string | undefined = ( value ) => {
        if ( value === "Not 4" ){
            return 'ERROR - Correct answer is "4". Please reconsider and then select the correct answer!'
        };
        
        return undefined;
    };

    return (

    <>

        <label htmlFor='whatIs2Plus2'>What is 2 + 2 : </label>

        <select  id='idwhatIs2Plus2'  
                 value={whatIs2Plus2}
                 onChange={ (event) => {
                                        const errorMessage = validate(event.target.value);
                                        setErrorMessage(errorMessage);
                                        onChangeWhatIs2Plus2(event); 
                                        }
                          }
        >
            
            <option value="Not 4">Not 4</option>
            <option value="4">4</option>

        </select>

        < ErrorMessage errorMessage = {errorMessage} />
    
    </>

    );
};

export default WhatIs2Plus2; 