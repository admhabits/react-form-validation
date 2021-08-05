import React, { useState } from 'react'
import { db } from './Firebase'

export default function FormCommon() {
	const [data, setData ] = useState({
		name: "",
		nohp: "",
		email: "",
		address: ""
	});

	const handleInput = (e) => {
		const { value, name } = e.target.value;
		setData({
			...data,
			[ name ] : value,
		});
	}

	const handleSubmit = (evt) => {
		evt.preventDefault();
		setData({
			name: "",
			nohp: "",
			email: "",
			address: ""
		})
		console.log(data)
		db.push(data)
	}




	return (
		<div className="container">
			<form autoComplete="off">
				<div className="display-flex justify-center align-center">
					
					<input
						type="text"
						placeholder="Full Name" 
						className="form-control full-width m-sm" 
						name="name"
						onChange={handleInput} value={data.name}/>
					<input
						type="text"
						placeholder="Full Name" 
						className="form-control full-width m-sm" 
						name="name"
						onChange={handleInput} value={data.email}/>
					<input
						type="text"
						placeholder="Full Name" 
						className="form-control full-width m-sm" 
						name="name"
						onChange={handleInput} value={data.nohp}/>
					
				</div>
				<div className="display-flex">
					<textarea 
						className="form-control full-width m-sm"
						name="address" id="address" cols="30" rows="6" 
						onChange={handleInput} value={data.address}></textarea>
				</div>
				<div className="display-flex justify-end">
					<button
						onClick={(e)=>handleSubmit(e)}
						className="btn btn-primary m-sm mt-sm btn-match">Submit</button>
				</div>
			</form>
		</div>
	)
}