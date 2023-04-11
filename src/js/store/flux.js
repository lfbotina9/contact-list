import rigoImage from "../../img/rigo-baby.jpg";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [
				{name:"Luis",address:"Colombia",email:"luis.botina@gmail.com",phone:"+573207034380",img:rigoImage},
				{name:"Luis",address:"Colombia",email:"luis.botina@gmail.com",phone:"+573207034380",img:rigoImage},
				{name:"Luis",address:"Colombia",email:"luis.botina@gmail.com",phone:"+573207034380",img:rigoImage},
				{name:"Luis",address:"Colombia",email:"luis.botina@gmail.com",phone:"+573207034380",img:rigoImage},
				{name:"Luis",address:"Colombia",email:"luis.botina@gmail.com",phone:"+573207034380",img:rigoImage},
				]				
			
		},
		actions: {			
			addContact:(contact)=>{
				let store = getStore()
				let newContacts=[...store.contacts,contact]
				setStore({contacts:newContacts})
			},
			delContact:(index)=>{
				let newContacts =[...getStore().contacts]
				newContacts.splice(index,1)
				setStore({contacts:newContacts})
			},
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
