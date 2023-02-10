import { useState } from "react";
import ErrorMessage from "./ErrorMessage";

export interface interfaceReasonForSparingProps {

    reasonForSparing:string;
    
    onChangeReasonForSparing:(event:React.ChangeEvent<HTMLInputElement>)=>void;

}

const ReasonForSparing : React.FC<interfaceReasonForSparingProps> = ({reasonForSparing,onChangeReasonForSparing}) => {

    const [errorMessage , setErrorMessage] = useState< string | undefined >('');
    const validate : ( value:string ) => string | undefined = ( value ) => {
        if ( (value.length<17 || value.length>153) ) {
            return "Reason for sparing: Must be between 17 and 153 characters."
        };
        
        return undefined;
    };

    return (

    <>

        <label htmlFor='reasonForSparing'>Reason for sparing: </label>

        <input id='idreasonForSparing' 
            type='text' 
            value={reasonForSparing} 
            onChange={ (event) => {
                                    const errorMessage = validate(event.target.value);
                                    setErrorMessage(errorMessage);
                                    onChangeReasonForSparing(event); 
                                }
                    }
        />

        < ErrorMessage errorMessage = {errorMessage} />
    
    </>

    );
};

export default ReasonForSparing; 