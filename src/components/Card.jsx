import React from "react";
import { 
	Box,
	Image,
	Center,
	Link,
	Badge,
	Grid
} from '@chakra-ui/react';

export function Card({ card }) {
	// fix the widths
	return (
		<>
			<Link
				href='#'
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
					borderRadius='md'
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


