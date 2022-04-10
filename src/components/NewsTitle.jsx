import React from "react";
import { Card } from "./Card";
import { 
	Container, Center, Text
} from '@chakra-ui/react'

export function NewsTitle() {
	return (
			<Container
				zIndex='3'
				bg='urjcRed'
				pt='3'
				pb='3'
				fontWeight='bold'
				as='h1'
			>
				<Center>	
					<Text fontSize='2xl' color='white'>
					Últimas novedades	
					</Text>
				</Center>
			</Container>
	)
}
