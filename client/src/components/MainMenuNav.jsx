import React from "react";
import { 
	Container, Center, Icon, Grid, Link
} from '@chakra-ui/react'

import { IoHomeSharp, IoSearch, IoSettingsSharp } from "react-icons/io5";

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
							as={IoSearch} 
							color='white' 
							verticalAlign='middle'
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
							as={IoHomeSharp} 
							verticalAlign='middle'
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
							as={IoSettingsSharp} 
							color='white' 
							verticalAlign='middle'
							w='5' h='5'
						/>
						</Link>
					</Center>
				</Grid>
			</Container>
	)
}
