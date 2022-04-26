import React from "react";
import { 
	Box, Center, Heading, Text, Image, Badge, Icon
} from '@chakra-ui/react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state/index';

import { IoPersonSharp } from "react-icons/io5";


export default function ActivityInfo() {
	const { id } = useParams();
	const currentAct = useSelector((state) => state.activities.currentItem);
	const dispatch = useDispatch()

	const { getActivities, getActivity } = bindActionCreators(
		actionCreators, dispatch
	);
	useEffect(() => getActivity(id), []);
	
	if(currentAct !== null)
	return (
		<Box
			p={4}
			borderRadius='lg'
			borderWidth='1px'
			m={4}
			mb={0}
		>
			<Image 
				width='100%' height='200px'
				objectFit='cover'
				borderRadius='lg'
				p='1'
				src={'/api/upload/image/' + currentAct.imgId}
			/>
			<Heading as='h3' size='lg'>{currentAct.eventTitle}</Heading>
			<Text>{currentAct.description}</Text>
			<Box >
				<Badge borderRadius='full' mr='2'>
					{currentAct.date}
				</Badge>
				<Badge borderRadius='full' mr='2' verticalAlign='center'>
					{currentAct.currentEntries} / {currentAct.maxEntries} <Icon 
						as={IoPersonSharp} 
						verticalAlign='text-top'
						color='black'
					/>
				</Badge>
				<Badge borderRadius='full'>
					{currentAct.price} €
				</Badge>
			</Box>
		</Box>
	)
}
