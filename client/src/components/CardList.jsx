import React from "react";
import { VStack } from '@chakra-ui/react'
import { Card } from "./Card";


export function CardList({ activities }) {
	return (
		// TODO how can I put the CardList below the 
		// pos='fixed' element without hardcoding
		// the pt='20' attribute?
		<VStack p='3' pb='20'>
			{activities.map((act) => (
				<Card 
					currentAct={act}
				/>
			))}
		</VStack>
	)
}
