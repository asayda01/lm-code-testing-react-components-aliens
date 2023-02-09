export interface interfaceReasonForSparingProps {

    reasonForSparing:string;
    
    onChangeReasonForSparing:(event:React.ChangeEvent<HTMLInputElement>)=>void;

}

const ReasonForSparing : React.FC<interfaceReasonForSparingProps> = ({reasonForSparing,onChangeReasonForSparing}) => {

    return (

    <>

    <label htmlFor='reasonForSparing'>Reason for sparing: </label>

    <input id='idreasonForSparing' type='text' value={reasonForSparing} onChange={onChangeReasonForSparing}  />
    
    </>

    );
};

export default ReasonForSparing; 