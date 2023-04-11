import React, { useContext, useState } from "react";
import "../../styles/home.css";
import { ContactCard } from "../component/ContactCard";
import rigoImage from "../../img/rigo-baby.jpg";
import { Context } from "../store/appContext";

export const Home = () => {
	const {store,actions}=useContext(Context)
	const {contacts}=store
	
	return(
	<div className="text-center mt-5">
		<h1>Hello Rigo!</h1>
		<div className="list-group">
			{contacts.map((contact,index)=>
			<ContactCard
			name={contact.name}
			address={contact.address}
			email={contact.email}
			phone={contact.phone}
			img={rigoImage}
			key={index}
			/>
			)}
		</div>
		<a href="#" className="btn btn-success">
			If you see this green button, bootstrap is working
		</a>
	</div>
)};
