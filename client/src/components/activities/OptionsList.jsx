import React from "react";
import CreateNewTeamButton from './CreateNewTeamButton.jsx';
import TeamCard from './TeamCard.jsx';
import { 
	Grid, GridItem, VStack
} from '@chakra-ui/react';

import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators } from '../../state/index';

const computeRows = (act) => {
	let evens = [];
	let odds = [];
	for(var i = 0; i < act.teams.length; i++) {
		i % 2 === 0 ? evens.push(act.teams[i]) : odds.push(act.teams[i]);
	}
	return [evens, odds];
}

export default function OptionsList() {
	
	const { id } = useParams();

	const state = useSelector((state) => state);
	const dispatch = useDispatch()

	const { getActivities, getActivity } = bindActionCreators(
		actionCreators, dispatch
	);
	
	useEffect(() => getActivity(id), []);
	let currentAct = state.activities.currentItem;

	let evens = [];
	let odds = [];
	if (currentAct !== null) {
		[evens, odds] = computeRows(currentAct);
	}
	
	return (
		<VStack
			p='4'
			templateColumns='repeat(2, 1fr)'
			gap='3'
		>
			<CreateNewTeamButton/>
			<Grid templateColumns='repeat(2, 1fr)' w='100%'>
				<GridItem mr={1}>
					<VStack>
					{evens.map((evenTeam) => (
						<TeamCard team={evenTeam}/>
					))}
					</VStack>
				</GridItem>
				<GridItem ml={1}>
					<VStack>
					{odds.map((oddTeam) => (
						<TeamCard team={oddTeam}/>
					))}
					</VStack>
				</GridItem>
			</Grid>
		</VStack>
	);
}
