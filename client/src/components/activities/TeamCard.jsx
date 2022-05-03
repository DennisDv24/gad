import React from "react";
import { 
	Button,
	useDisclosure, Textarea,
	Modal, ModalOverlay, ModalBody, ModalCloseButton, ModalHeader,
	ModalFooter, FormControl, FormLabel, Input,
	ModalContent, Link, Box, AspectRatio,
	Image, Center, Text, Flex, Badge
} from '@chakra-ui/react';

import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { actionCreators } from '../../state/index';

var imageRoute = '';
export default function TeamCard({ team }) {
	
	imageRoute = team.imgId !== undefined ? '/api/upload/image/' + team.imgId : null;
	
	const { isOpen, onOpen, onClose } = useDisclosure();

	const dispatch = useDispatch()
	const { addTeamMember } = bindActionCreators(
		actionCreators, dispatch
	);

	const onInscriptionDone = () => {
		// NOTE and FIXME, you need to f5 to see the teams updated
		addTeamMember(team);
		onClose();
	}
	
	const LetJoiningToTeam = () => {
		return (
			<>
			<ModalHeader>
				¿Te quieres unir al equipo {team.teamName}?
			</ModalHeader>
			<ModalBody>
					<Text>Quedan <Badge borderRadius='full' mx='1' color='urjcRed'>{
						(team.maxMembers - team.currentMembers)
					}</Badge> sitios libres</Text>
				<Button 
					w='100%'
					onClick={onInscriptionDone}
					mt={4}
				>Aceptar</Button>
				<Button 
					w='100%' 
					my={4} 
					colorScheme='red'
					bgColor='urjcRed'
					onClick={onClose}
				>Cancelar</Button>
			</ModalBody>
			</>
		)
	}

	const GetJoin = () => {
		if(team.currentMembers  < team.maxMembers) {
			return <LetJoiningToTeam/>
		} else {
			return (
				<>
				<ModalHeader>
					El equipo {team.teamName} ya está lleno
				</ModalHeader>
				<ModalBody>
					<Button 
						w='100%' 
						my={4} 
						colorScheme='red'
						bgColor='urjcRed'
						onClick={onClose}
					>Aceptar</Button>
				</ModalBody>
				</>
			);
		}
	}
	
	const getTeamImg = route => {
		if(route !== null)
			return (
				<>
				<Box p={3}>
				<AspectRatio 
					ratio='1' 
					width='100%' height='100%'
				>
					<Image
						objectFit='cover'
						borderRadius='lg'
						src={route}
					/>
				</AspectRatio>
				</Box>
				</>
			);
		else return <Box p={1}></Box>
	}

	return (
		<>
		<Link
			href='javascript:void(0);'
			onClick={onOpen}
			borderRadius='lg'
			borderWidth='1px'
			width='100%'
			style={{ textDecoration: 'none' }}
		>
			{getTeamImg(imageRoute)}
			<Center pb={1} alignItems='baseline'>
			{team.teamName}
				<Badge borderRadius='full' ml='1'>
					{team.currentMembers} / {team.maxMembers}
				</Badge>
			</Center>
		</Link>
		<Modal isOpen={isOpen} onClose={onClose}>
			{/* TODO add info about the team in the modal */}
			<ModalOverlay />
			<ModalContent>
				<GetJoin />
			</ModalContent>
    	</Modal>
	</>
	);
}


