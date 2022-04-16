import React from "react";
import { 
	Image,
	Badge, 
	Link,
	Center,
	AspectRatio,
	Box
} from '@chakra-ui/react';

import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

var imageRoute = '';
export default function TeamCard({ team }) {
	
	imageRoute = '/api/upload/image/' + team.imgId;

	return (
		<Link
			href='#'
			borderRadius='lg'
			borderWidth='1px'
			width='100%'
			style={{ textDecoration: 'none' }}
		>
			<Box p={3}>
			<AspectRatio 
				ratio='1' 
				width='100%' height='100%'
			>
				<Image
					objectFit='cover'
					borderRadius='lg'
					src={imageRoute}
				/>
			</AspectRatio>
			</Box>
			<Center pb={1} alignItems='baseline'>
			{team.teamName}
				<Badge borderRadius='full' ml='1'>
					{team.currentMembers} / {team.maxMembers}
				</Badge>
			</Center>
		</Link>
	);
}


