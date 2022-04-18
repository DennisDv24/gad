import React from "react";
import { UseEffect }from "react";
import { 
	Box,
	Image,
	Badge, 
	Link
} from '@chakra-ui/react';

import { useSelector, useDispatch } from 'react-redux';
import { actionCreators } from '../state/index';
import { bindActionCreators } from 'redux';


export function Card({ currentAct, onClick=null }) {

	return (
			<Link
				{
					...(onClick === null ? {
						href: '/activity/'+currentAct._id
					} : {
						onClick: onClick
					})
				}
				borderRadius='md'
				borderWidth='1px'
				width='100%'
				style={{ textDecoration: 'none' }}
			>
				<Image 
					width='100%' height='200px'
					objectFit='cover'
					borderRadius='lg'
					p='1'
					src={'/api/upload/image/' + currentAct.imgId}
				/>
				<Box
					alignItems='baseline' 
					p='4'
				>
					<Box 
						fontWeight='bold' 
					>
						{currentAct.eventTitle}
					</Box>
					<Box >
						<Badge borderRadius='full' mr='2'>
							{currentAct.date}
						</Badge>
						<Badge borderRadius='full' mr='2'>
							{currentAct.currentEntries} / {currentAct.maxEntries} inscritos
						</Badge>
						<Badge borderRadius='full'>
							{currentAct.price} €
						</Badge>
					</Box>
				</Box>
			</Link>
	);
}


