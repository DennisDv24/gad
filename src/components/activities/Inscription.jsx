import React from "react";
import { 
	Container, Center, Text, Icon, Box, Link
} from '@chakra-ui/react'
import {
	ArrowBackIcon
} from '@chakra-ui/icons'


export default function Inscription() {
	return (
			<Container
				zIndex='3'
				bg='urjcGray'
				pt='3'
				pb='3'
				fontWeight='bold'
				as='h1'
			>
				<Box
					display='flex'
					alignItems='center'
				>
				<Link
					href='/'
					borderRadius='md'
					p='1'
					style={{ textDecoration: 'none' }}
				>
					<Icon as={ArrowBackIcon} color='urjcRed' w='6' h='6'/>
				</Link>
				<Text fontSize='2xl' color='white' pl='4'>
					Inscripción
				</Text>
				</Box>
			</Container>
	)
}
