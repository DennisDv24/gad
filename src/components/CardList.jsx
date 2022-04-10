import React from "react";
import { Card } from "./Card";
import { VStack, ListItem } from '@chakra-ui/react'

export function CardList({ cards }) {
	return (
		<VStack m={3}>
			{cards.map((card) => (
				<Card card={card}/>
			))}
		</VStack>
	)
}
