import { useState } from "react";
import ErrorMessage from "./ErrorMessage";

export interface interfaceSNumberOfBeingsProps {

    numberOfBeings:string;
    
    onChangeNumberOfBeings:(event:React.ChangeEvent<HTMLInputElement>)=>void;

};

const NumberOfBeings : React.FC<interfaceSNumberOfBeingsProps> = ({numberOfBeings,onChangeNumberOfBeings}) => {

    const [errorMessage , setErrorMessage] = useState< string | undefined >('');
    const validate : ( value:string ) => string | undefined = ( value ) => {
        if ( !( Number(value) > 999999999) || (!(/^[0-9]*$/).test(value)) ){
            return "ERROR - Number of beings: Numbers ONLY. Must be at least 1,000,000,000."
        };
        
        return undefined;
    };

    return (

    <>

        <label htmlFor='numberOfBeings'>Number of beings: </label>

        <input id='idnumberOfBeings' 
            type='text' 
            value={numberOfBeings}
            onChange={ (event) => {
                                    const errorMessage = validate(event.target.value);
                                    setErrorMessage(errorMessage);
                                    onChangeNumberOfBeings(event); 
                                }
                    }
        />

        < ErrorMessage errorMessage = {errorMessage} />

    </>

    );
};

export default NumberOfBeings; 