export interface interfaceWhatIs2Plus2Props {

    whatIs2Plus2:string;
    
    onChangeWhatIs2Plus2:(event:React.ChangeEvent<HTMLSelectElement>)=>void;

}

const WhatIs2Plus2 : React.FC<interfaceWhatIs2Plus2Props> = ({whatIs2Plus2,onChangeWhatIs2Plus2}) => {

    return (

    <>

        <label htmlFor='whatIs2Plus2'>What is 2 + 2 : </label>

        <select  id='idwhatIs2Plus2'  value={whatIs2Plus2} onChange={onChangeWhatIs2Plus2}>

            <option value="Not 4">Not 4</option>

            <option value="4">4</option>

        </select>
    
    </>

    );
};

export default WhatIs2Plus2; 