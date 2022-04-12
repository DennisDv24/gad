import React from "react";
import { 
	Box,
	Image,
	Badge, 
	Link
} from '@chakra-ui/react';
// NOTE card should be activity, and it should have
// activity.teams in it, so I should be able to use
// setActivity to change the state of Activity.jsx

export function Card({ currentAct }) {
	return (
			<Link
				href={'/activity/'+currentAct._id}
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
					src={currentAct.eventImg} 
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


