import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from './Firebase';


firebase.database().ref("/").on("value", function(snapshot){
	snapshot.forEach((snapshot)=>{
		const value = snapshot.val();
		// console.log(value.name)
	})
})



ReactDOM.render(
	<App/>, 
	document.getElementById('root')
);