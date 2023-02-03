interface interfaceSReasonForSparingProps {

    reasonForSparing:string;
    
    onChangeReasonForSparing:(event:React.ChangeEvent<HTMLInputElement>)=>void;

}

const ReasonForSparing : React.FC<interfaceSReasonForSparingProps> = ({reasonForSparing,onChangeReasonForSparing}) => (

    <>

    <label htmlFor='reasonForSparing'>Reason for sparing: </label>

    <input id='idreasonForSparing' type='text' value={reasonForSparing} onChange={onChangeReasonForSparing}  />
    
    </>

);

export default ReasonForSparing; 