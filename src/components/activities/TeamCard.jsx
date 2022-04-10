import React from "react";
import { 
	Box,
	Image,
	Badge, 
	Link,
	Center
} from '@chakra-ui/react';

export default function TeamCard({ team }) {
	return (
		<Link
			href='#'
			borderRadius='lg'
			borderWidth='1px'
			width='100%'
			style={{ textDecoration: 'none' }}
		>
			<Image
				width='100%' height='100%'
				objectFit='cover'
				borderRadius='lg'
				p='1'
				src={team.teamShield}
			/>
			<Center p='3' alignItems='baseline'>
			{team.teamName}
				<Badge borderRadius='full' ml='1'>
					{team.currentMembers} / {team.maxMembers}
				</Badge>
			</Center>
		</Link>
	);
}


