import React from 'react';
import { Container, Link, Center, Text, VStack } from '@chakra-ui/react'

const NotFound = () => (
	<VStack>
		<Center color='urjcRed'>
			404 NOT FOUND
		</Center>
		<Center>
			<Link href='/'>GO BACK</Link>
		</Center>
	</VStack>
);

export default NotFound;
