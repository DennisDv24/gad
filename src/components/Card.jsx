import React from "react";
import { 
	Box,
	Image,
	Center,
	Link,
	Badge
} from '@chakra-ui/react';

export function Card({ card }) {

	// fix the widths
	return (
		<>
			<Link
				href='#'
				borderRadius='md'
				borderWidth='1px'
				style={{ textDecoration: 'none' }}
			>
				<Image 
					width={[320, 400, 450]} height={[160, 200, 225]}
					objectFit='cover' 
					borderRadius='md'
					src={card.eventImg} 
				/>
				<Center>
				<Box display="flex" alignItems='baseline'>
						{card.eventTitle}
					<Box>
					<Badge borderRadius='full' px='2'>
						{card.date}
					</Badge>
					<Badge>

					</Badge>
					</Box>
				</Box>
				</Center>
			</Link>
		</>
	);
}


