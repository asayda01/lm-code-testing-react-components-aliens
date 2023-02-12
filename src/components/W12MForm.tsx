import React, { useState } from 'react';
import W12MHeader from './W12MHeader';

import SpeciesName from './SpeciesName';
import PlanetName from './PlanetName';
import NumberOfBeings from './NumberOfBeings';
import WhatIs2Plus2 from './WhatIs2Plus2';
import ReasonForSparing from './ReasonForSparing';

const W12MForm = () => {

	const [speciesName,setSpeciesName] 		  		= useState<string>('Human');
	const [planetName,setPlanetName]  		  		= useState<string>('World');
	const [numberOfBeings,setNumberOfBeings]  		= useState<string>('8014725546');
	const [whatIs2Plus2,setwhatIs2Plus2]  			= useState<string>('Not 4');
	const [reasonForSparing,setReasonForSparing]  	= useState<string>('They are nice!');

	const formSubmitter = (event:React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log(`
			speciesName: ${speciesName},\n
			planetName: ${planetName},\n
			numberOfBeings:${numberOfBeings},\n
			whatIs2Plus2: ${whatIs2Plus2}, \n
			reasonForSparing: ${reasonForSparing}`);
	};

	return (

		<section className='w12MForm'>

			<form onSubmit={formSubmitter}>

				<W12MHeader />

				<SpeciesName 

					speciesName={speciesName} 

					onChangeSpeciesName={(event:any)=> setSpeciesName(event.target.value)}

				/>

				<p>

				</p>
		
				<PlanetName 

					planetName={planetName} 

					onChangePlanetName={(event:any)=> setPlanetName(event.target.value)}

				/>
		
				<p>

				</p>

				<NumberOfBeings 

					numberOfBeings={numberOfBeings} 

					onChangeNumberOfBeings={(event:any)=> setNumberOfBeings(event.target.value)}

				/>
			
				<p>

				</p>

				<WhatIs2Plus2 

					whatIs2Plus2={whatIs2Plus2} 

					onChangeWhatIs2Plus2={(event:any)=> setwhatIs2Plus2(event.target.value)}

				/>

				<p>

				</p>

				<ReasonForSparing 

					reasonForSparing={reasonForSparing} 

					onChangeReasonForSparing={(event:any)=> setReasonForSparing(event.target.value)}

				/>
				
				<p>

				</p>

				<button type = 'submit' >Submit a Form</button>

			</form>		
		
		</section>

	);

};

export default W12MForm;
