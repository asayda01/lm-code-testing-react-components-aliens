export interface interfaceSNumberOfBeingsProps {

    numberOfBeings:string;
    
    onChangeNumberOfBeings:(event:React.ChangeEvent<HTMLInputElement>)=>void;

}

const NumberOfBeings : React.FC<interfaceSNumberOfBeingsProps> = ({numberOfBeings,onChangeNumberOfBeings}) => {

    return (

    <>

    <label htmlFor='numberOfBeings'>Number of beings: </label>

    <input id='idnumberOfBeings' type='text' value={numberOfBeings} onChange={onChangeNumberOfBeings}  />
    
    </>

    );
};

export default NumberOfBeings; 