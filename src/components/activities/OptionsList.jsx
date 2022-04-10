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
			<Grid templateColumns='repeat(2, 1fr)'>
				<GridItem>
					<VStack mr='1'>
					{evens.map((evenTeam) => (
						<TeamCard team={evenTeam}/>
					))}
					</VStack>
				</GridItem>
				<GridItem>
					<VStack ml='1'>
					{odds.map((oddTeam) => (
						<TeamCard team={oddTeam}/>
					))}
					</VStack>
				</GridItem>
			</Grid>
		</VStack>
	);
}
