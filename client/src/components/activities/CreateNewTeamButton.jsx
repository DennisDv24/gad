import React from "react";
import { 
	Button,
	useDisclosure, 
	Modal, ModalOverlay, ModalBody, ModalCloseButton, ModalHeader,
	ModalFooter, FormControl, FormLabel, Input,
	ModalContent, Text, Box
} from '@chakra-ui/react';

import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state/index';
import { useParams } from 'react-router-dom';

import FileUpload from './FileUpload';


var newTeamToAdd = null;
export default function CreateNewTeamButton() {

	const { id } = useParams();

	const lastImg = useSelector((state) => state.images.lastImg);
	const currentItemTeams = useSelector((state) => state.activities.currentItemTeams);
	const currentAct = useSelector((state) => state.activities.currentItem);

	const dispatch = useDispatch()
	const { addTeamImage, addTeam, addActivityMember, getActivity } = bindActionCreators(
		actionCreators, dispatch
	);

	const onSubmit = values => {
		// TODO onSubmit add 1 to total activity members
		onClose();
		newTeamToAdd = {
			...values,
			currentMembers: 1,
			maxMembers: currentAct.membersPerTeam
		};
		addActivityMember(id);

		if(values.teamImg === undefined)
			addTeam(newTeamToAdd, id);	
		else
			addTeamImage(values.teamImg);
	};

	// FIXME this is shit
	useEffect(() => {
		if(lastImg !== null && newTeamToAdd !== null)
			addTeam({
				...newTeamToAdd, imgId: lastImg.file.id
			}, id);
		getActivity(id);
	}, [lastImg]);

	const { isOpen, onOpen, onClose } = useDisclosure();
	const initialRef = React.useRef();
	const finalRef = React.useRef();
	const {
		handleSubmit,
		register,
		//setError,
		control,
		formState: { errors, isSubmitting },
	} = useForm();
	const inputRef = React.useRef();
	
	const GetTeamCreationForm = () => {
		if(currentAct === null) 
			return (
				<ModalBody >
					<Text py={6}>
						Esta actividad no existe
					</Text>
					<Box pb={6}>
					<Button
						colorScheme='red' 
						bgColor='urjcRed' 
						mr={3}
						onClick={onClose}
						w='100%'
					>
						Aceptar
					</Button>
					</Box>
				</ModalBody>
			);
		if(currentAct.maxTeams <= currentItemTeams.length)
			return (
				<ModalBody >
					<Text py={6}>
					Ya no queda sitio para más equipos
					</Text>
					<Box pb={6}>
					<Button
						colorScheme='red' 
						bgColor='urjcRed' 
						mr={3}
						onClick={onClose}
						w='100%'
					>
						Aceptar
					</Button>
					</Box>
				</ModalBody>
			);
		else return (
			<form 
				onSubmit={handleSubmit(onSubmit)}
			>
			<ModalHeader>Crear nuevo equipo</ModalHeader>
			<ModalCloseButton/>
			<ModalBody pb={6}>
				<FormControl isRequired>
					<FormLabel requiredIndicator="">Nombre del equipo</FormLabel>
					<Input ref={initialRef} {...register('teamName')}/>
				</FormControl>
				<FormControl mt={4}>
					<FileUpload 
						name='teamImg'
						acceptedFileTypes="image/*"
						placeholder="Ningún archivo seleccionado"
						control={control}
					>
						Escudo del equipo
					</FileUpload>
				</FormControl>
			</ModalBody>
			<ModalFooter>
				<Button 
					colorScheme='red' 
					bgColor='urjcRed' 
					type='submit'
					mr={3}
				>
					Guardar
				</Button>
				<Button onClick={onClose}>Cancelar</Button>
			</ModalFooter>
			</form>
		);
	}

	return (
		<>
		<Button
			w='100%'
			onClick={onOpen}
		>
			Crear nuevo equipo
		</Button>
		<Modal
			initialFocusRef={initialRef}
			finalFocusRef={finalRef}
			isOpen={isOpen}
			onClose={onClose}
      	>
			<ModalOverlay />
			<ModalContent>
				<GetTeamCreationForm />
			</ModalContent>
		</Modal>
		</>
	);
}
