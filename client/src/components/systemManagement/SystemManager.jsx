import React from 'react';
import { 
	Grid,
	GridItem,
	VStack,
	Center,
} from '@chakra-ui/react';

import { useEffect, useState } from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators } from '../../state/index';


import ManagerActivityCard from './ManagerActivityCard';

//import "react-datepicker/dist/react-datepicker.css";

import NewActivityButton from './NewActivityButton';

var newActToAdd = null;
export default function SystemManager() {
	
	const activities = useSelector((state) => state.activities.items);
	const lastImg = useSelector((state) => state.images.lastImg);
	const dispatch = useDispatch()

	const { getActivities, addActivityImage, addActivity } = bindActionCreators(
		actionCreators, dispatch
	);

	useEffect(() => getActivities(), []);

	// TODO show all the teams, users, nshit
	return (
		<>
			<Center 
				fontSize='2xl' bg='urjcRed' color='white'
				pt='3'
				pb='3'
				fontWeight='bold'
				as='h1'
			>
				Gestionar actividades
			</Center>
			<Center>
				<VStack mx={1} mt={1}>
					<NewActivityButton />
					{activities.map((act) => (
						<ManagerActivityCard currentAct={act} />
					))}
				</VStack>
			</Center>
		{/* TODO fix colorschema */}
		</>
	)

}
