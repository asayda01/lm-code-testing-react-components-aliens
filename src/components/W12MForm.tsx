import { useState } from 'react';
import W12MHeader from './W12MHeader';

import SpeciesName from './SpeciesName';
import PlanetName from './PlanetName';
import NumberOfBeings from './NumberOfBeings';
import WhatIs2Plus2 from './WhatIs2Plus2';
import ReasonForSparing from './ReasonForSparing';

const W12MForm = () => {

	const [speciesName,setSpeciesName] 		  		= useState<string>('Humans');
	const [planetName,setPlanetName]  		  		= useState<string>('World');
	const [numberOfBeings,setNumberOfBeings]  		= useState<string>('8014725546');
	const [reasonForSparing,setReasonForSparing]  	= useState<string>('They are nice!');
	

	return (

		<section className='w12MForm'>

			<W12MHeader />

			{<SpeciesName 

				speciesName={speciesName} 

				onChangeSpeciesName={(event:any)=> setSpeciesName(event.target.value)}

			/>}

			<p>

			</p>
		
			{<PlanetName 

				planetName={planetName} 

				onChangePlanetName={(event:any)=> setPlanetName(event.target.value)}

			/>}
		
			<p>

			</p>

			{<NumberOfBeings 

				numberOfBeings={numberOfBeings} 

				onChangeNumberOfBeings={(event:any)=> setNumberOfBeings(event.target.value)}

			/>}		
			
			<p>

			</p>
	
			{<ReasonForSparing 
	
					reasonForSparing={reasonForSparing} 
	
					onChangeReasonForSparing={(event:any)=> setReasonForSparing(event.target.value)}
	
			/>}

		</section>

	);

};

export default W12MForm;
