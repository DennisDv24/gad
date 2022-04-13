import React from "react";
import { useEffect } from "react";
import { VStack } from '@chakra-ui/react'
import { Card } from "./Card";
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators } from '../state/index';

export function CardList() {

	const activities = useSelector((state) => state.activities.items);
	const dispatch = useDispatch()

	const { getActivities } = bindActionCreators(
		actionCreators, dispatch
	);

	useEffect(() => getActivities(), []);
	console.log(activities);

	return (
		<VStack p='3' pb='20'>
			{activities.map((act) => (
				<Card 
					currentAct={act}
				/>
			))}
		</VStack>
	)
}
