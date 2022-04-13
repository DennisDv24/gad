import { GET_ITEMS, ADD_ITEM, GET_ITEM } from '../actions/types';

// NOTE this will be fetched from the DB in another script
const initialState = {
	items: [
		{
			"eventTitle": "Torneo Basket",
			"eventImg": "img/card1.jpg", 
			"date": "21/02/2022",
			"maxEntries": 100,
			"currentEntries": 69,
			"price": 6,
			"cardId": 1,
			"teams": [
				{
					"teamName": "EquipoDe Mierda",
					"currentMembers": 3,
					"maxMembers": 6,
					"teamShield": "/img/shield1.jpg" 
				},
				{
					"teamName": "EquipoEjemplo",
					"currentMembers": 5,
					"maxMembers": 6,
					"teamShield": "/img/shield2.jpg" 
				},
				{
					"teamName": "EquipoEjemplo",
					"currentMembers": 5,
					"maxMembers": 6,
					"teamShield": "/img/shield2.jpg" 
				},
				{
					"teamName": "EquipoDeJaja",
					"currentMembers": 3,
					"maxMembers": 6,
					"teamShield": "/img/shield1.jpg" 
				}
			]
		},
		{
			"eventTitle": "Final futbol",
			"eventImg": "img/card2.jpg", 
			"date": "23/11/2022",
			"maxEntries": 20,
			"currentEntries": 11,
			"price": 15,
			"cardId": 2,
			"teams": [
				{
					"teamName": "EquipoDeMierda",
					"currentMembers": 3,
					"maxMembers": 6,
					"teamShield": "/img/shield1.jpg" 
				},
				{
					"teamName": "EquipoEjemplo",
					"currentMembers": 5,
					"maxMembers": 6,
					"teamShield": "/img/shield2.jpg" 
				},
				{
					"teamName": "EquipoEjemplo",
					"currentMembers": 5,
					"maxMembers": 6,
					"teamShield": "/img/shield2.jpg" 
				}
			]
		},
		{
			"eventTitle": "Running loco",
			"eventImg": "img/card3.jpg", 
			"date": "4/05/2022",
			"maxEntries": 15,
			"currentEntries": 14,
			"price": 12,
			"cardId": 3,
			"teams": [
				{
					"teamName": "EquipoDeMierda",
					"currentMembers": 3,
					"maxMembers": 6,
					"teamShield": "/img/shield1.jpg" 
				},
				{
					"teamName": "EquipoEjemplo",
					"currentMembers": 5,
					"maxMembers": 6,
					"teamShield": "/img/shield2.jpg" 
				},
				{
					"teamName": "EquipoEjemplo",
					"currentMembers": 5,
					"maxMembers": 6,
					"teamShield": "/img/shield2.jpg" 
				}
			]
		},
		{
			"eventTitle": "Sesión de senderismo",
			"eventImg": "img/card4.jpg", 
			"date": "7/10/2022",
			"maxEntries": 10,
			"currentEntries": 3,
			"price": 7,
			"cardId": 4,
			"teams": [
				{
					"teamName": "EquipoDeMierda",
					"currentMembers": 3,
					"maxMembers": 6,
					"teamShield": "/img/shield1.jpg" 
				},
				{
					"teamName": "EquipoEjemplo",
					"currentMembers": 5,
					"maxMembers": 6,
					"teamShield": "/img/shield2.jpg" 
				}
			]
		}
	]
}

export default function(state = initialState, action) {
	switch(action.type) {
		case GET_ITEMS:
			return {
				...state
			}
		default: return state;
	}
}
