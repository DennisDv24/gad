import React from "react";
import { 
	Box,
	Image,
	Badge, 
	Link
} from '@chakra-ui/react';
//import { Link } from 'react-router-dom';

const activitiesDir = '/activities';
const indexDir = '/Act';
const getDir = (n) => {
	return activitiesDir + '/' + n + indexDir + n + '.jsx';
};

export function Card({ card }) {
	return (
		<>
			<Link
				href='/test'
				borderRadius='md'
				borderWidth='1px'
				//objectFit='cover'
				//width='100%' height='100px'
				width='100%'
				style={{ textDecoration: 'none' }}
			>
				<Image 
					width='100%' height='200px'
					objectFit='cover'
					borderRadius='lg'
					p='1'
					src={card.eventImg} 
				/>
				<Box
					alignItems='baseline' 
					p='4'
				>
					<Box 
						fontWeight='bold' 
					>
						{card.eventTitle}
					</Box>
					<Box >
						<Badge borderRadius='full' mr='2'>
							{card.date}
						</Badge>
						<Badge borderRadius='full' mr='2'>
							{card.currentEntries} / {card.maxEntries} inscritos
						</Badge>
						<Badge borderRadius='full'>
							{card.price} €
						</Badge>
					</Box>
				</Box>
			</Link>
		</>
	);
}


