import React from "react";
import { Card } from "./Card";
import { 
	VStack, Container, Center, Box, Text
} from '@chakra-ui/react'

export function CardList({ cards }) {
	return (
		// TODO how can I put the CardList below the 
		// pos='fixed' element without hardcoding
		// the pt='20' attribute?
		<VStack p='3' pb='20'>
			{cards.map((card) => (
				<Card card={card}/>
			))}
		</VStack>
	)
}
