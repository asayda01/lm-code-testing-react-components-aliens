interface interfaceSpeciesNameProps {

    speciesName:string;

    onChangeSpeciesName:(event:React.ChangeEvent<HTMLInputElement>)=>void;

    // You might be wondering what line 50 (e: React.ChangeEvent<HTMLInputElement>) is saying.
    // Let's break it down! 🔨😃 

	// React has different ChangeEvents for different elements that might change. 
    // Imagine a React.ChangeEvent<HTMLTextAreaElement> or React.ChangeEvent<HTMLSelectElement>,
    // these are the specific events you get back from changing specific types of element. 
    // This means when you write the code you know what type of element you're reacting to,
    // so you might want to do different things with a select versus an input text box.
	
	// If you wanted the same function for all of them 
    // (for example, if we wanted to refactor our forms 
    // so we had one function that handled all of them),
    //  you could write a function with the signature 
    // (e : React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void,
    // and pass that function as onChange to any of those kinds of elements!
}

const SpeciesName : React.FC<interfaceSpeciesNameProps> = ({speciesName,onChangeSpeciesName}) => (

    <>

    <label htmlFor='speciesName'>Species Name: </label>

    <input id='idspeciesName' type='text' value={speciesName} onChange={onChangeSpeciesName}  />
    
    </>

);

export default SpeciesName; 