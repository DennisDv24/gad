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

import DeleteTeamButton from  '../systemManagement/DeleteTeamButton';

const computeRows = teams => {
	let evens = [];
	let odds = [];
	for(var i = 0; i < teams.length; i++) {
		i % 2 === 0 ? evens.push(teams[i]) : odds.push(teams[i]);
	}
	return [evens, odds];
}


export default function OptionsList({ id, isManaging=false }) {


	const state = useSelector((state) => state.activities);
	const dispatch = useDispatch();

	const { getTeamsAtActivity, getActivity } = bindActionCreators(
		actionCreators, dispatch
	);
	
	useEffect(() => getTeamsAtActivity(id), []);

	let evens = [];
	let odds = [];
	[evens, odds] = computeRows(state.currentItemTeams);

	const addButtonIfNot = isManaging => {
		if (!isManaging) {
			return (<CreateNewTeamButton />);
		}
	};

	const addDeleteButtonIf = (isManaging, teamToDelete) => {
		if (isManaging) {
			return (
				<DeleteTeamButton team={teamToDelete} />
			);
		}

	};
	
	return (
		<VStack
			p='4'
			templateColumns='repeat(2, 1fr)'
			gap='3'
		>
			{addButtonIfNot(isManaging)}}
			<Grid templateColumns='repeat(2, 1fr)' w='100%'>
				<GridItem mr={1}>
					<VStack>
					{evens.map((evenTeam) => (
						<>
						<TeamCard team={evenTeam}/>
						{addDeleteButtonIf(isManaging, evenTeam)}
						</>
					))}
					</VStack>
				</GridItem>
				<GridItem ml={1}>
					<VStack>
					{odds.map((oddTeam) => (
						<>
						<TeamCard team={oddTeam}/>
						{addDeleteButtonIf(isManaging, oddTeam)}
						</>
					))}
					</VStack>
				</GridItem>
			</Grid>
		</VStack>
	);
}
