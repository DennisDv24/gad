import React from "react";
import CreateNewTeamButton from './CreateNewTeamButton.jsx';
import TeamCard from './TeamCard.jsx';
import { 
	Box, Grid, GridItem, VStack
} from '@chakra-ui/react';

export default function OptionsList({teams}) {
	// TODO map ods to left and evens to right
	let evens = []
	let odds = []
	for(var i = 0; i < teams.length; i++) {
		i % 2 == 0 ? evens.push(teams[i]) : odds.push(teams[i]);
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
