interface interfaceWhatIs2Plus2Props {

    whatIs2Plus2:string;
    
    onChangeWhatIs2Plus2:(event:React.ChangeEvent<HTMLInputElement>)=>void;

}

const WhatIs2Plus2 : React.FC<interfaceWhatIs2Plus2Props> = ({whatIs2Plus2,onChangeWhatIs2Plus2}) => (

    <>

    <label htmlFor='whatIs2Plus2'>What is 2 + 2 : </label>

    <input id='idwhatIs2Plus2' type='text' value={whatIs2Plus2} onChange={onChangeWhatIs2Plus2}  />
    
    </>

);

export default WhatIs2Plus2; 