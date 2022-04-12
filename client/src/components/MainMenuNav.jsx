import React from "react";
import { 
	Container, Center, Icon, Grid, Link
} from '@chakra-ui/react'
import {
	CalendarIcon, SettingsIcon, SearchIcon
} from '@chakra-ui/icons'

export function MainMenuNav() {
	return (
			<Container
				zIndex='3'
				bg='urjcGray'
				pt='3'
				pb='3'
				fontWeight='bold'
				as='h1'
				lineHeight='tight'
				isTruncated
				pos='fixed'
				bottom='0'
			>
				<Grid templateColumns='repeat(3, 1fr)'>
					<Center>
						<Link
							href='#'
							borderRadius='md'
							p='1'
							style={{ textDecoration: 'none' }}
						>
						<Icon 
							as={SearchIcon} 
							color='white' 
							w='5' h='5'
						/>
						</Link>
					</Center>
					<Center>
						<Link
							href='#'
							borderRadius='md'
							p='1'
							style={{ textDecoration: 'none' }}
						>
						<Icon 
							as={CalendarIcon} 
							color='white' 
							w='5' h='5'
						/>
						</Link>
					</Center>
					<Center>
						<Link
							href='#'
							borderRadius='md'
							p='1'
							style={{ textDecoration: 'none' }}
						>
						<Icon 
							as={SettingsIcon} 
							color='white' 
							w='5' h='5'
						/>
						</Link>
					</Center>
				</Grid>
			</Container>
	)
}
