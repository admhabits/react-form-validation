import React, { useState, useEffect } from 'react';
import content from './static.js';
import {db } from './Firebase';

import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
	name: yup.string().min(6).required(),
	email: yup.string().email().required(),
	nohp: yup.string().min(11).max(12).required(),
	address: yup.string().max(150).required()
})

export default function FormHooks() {
	const { register, formState: { errors, isSubmitSuccessful }, handleSubmit, reset } = useForm({
		resolver: yupResolver(schema)
	}) 

	const [ data, setData ] = useState({});
	console.log(data)
	useEffect(() => {
		if (isSubmitSuccessful) {
			  db.set(data)
		      reset({});
		      
		    }
	}, [isSubmitSuccessful, data])
	return (
		<div className="container">
			<form autoComplete="off" onSubmit={handleSubmit((d) => setData(d))}>
				<div className="display-flex justify-center align-center">
					
					{
						content.inputs.map((input, key)=>(
							
							
								<input
									key={key}
									type={input.type}
									placeholder={input.placeholder} 
									className="form-control full-width m-sm" 
									name={input.name}
									{...register(input.name)}
									
								/>
							
						))
					}
					
				</div>
				<div className="display-flex">
					<textarea 
						className="form-control full-width m-sm"
						name="address" id="address" cols="30" rows="6"
						{...register("address")}
						
						></textarea>

				</div>
				<div className="display-flex justify-end">
					<button
						
						className="btn btn-primary m-sm mt-sm btn-match">Submit</button>
				</div>
			</form>
		</div>
	)
}