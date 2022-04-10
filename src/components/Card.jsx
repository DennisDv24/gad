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
				<Grid
					alignItems='baseline' 
					templateColumns='repeat(2, 1fr)'
					p='4'
				>
					<Box 
						fontWeight='bold' 
						as='h3' 
						justifySelf='right'
						pr='2'
					>
						{card.eventTitle}
					</Box>
					<Box pl='2'>
						<Badge borderRadius='full' px='2'>
							{card.date}
						</Badge>
						<Badge>
							{card.maxEntries} / {card.currentEntries}
						</Badge>
					</Box>
				</Grid>
			</Link>
		</>
	);
}


