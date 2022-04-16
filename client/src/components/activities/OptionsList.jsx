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

const computeRows = (teams) => {
	let evens = [];
	let odds = [];
	for(var i = 0; i < teams.length; i++) {
		i % 2 === 0 ? evens.push(teams[i]) : odds.push(teams[i]);
	}
	return [evens, odds];
}

export default function OptionsList() {
	
	const { id } = useParams();

	const currentTeams = useSelector((state) => state.activities.currentTeams);
	const dispatch = useDispatch()

	const { getActivities, getActivity } = bindActionCreators(
		actionCreators, dispatch
	);
	
	useEffect(() => getActivity(id), []);

	let evens = [];
	let odds = [];
	if (currentTeams !== null) {
		[evens, odds] = computeRows(currentTeams);
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
