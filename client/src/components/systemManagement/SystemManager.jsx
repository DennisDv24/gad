import React from 'react';
import { 
	Grid,
	GridItem,
	VStack,
	Center,
	Button, Box,
	useDisclosure, Textarea,
	Modal, ModalOverlay, ModalContent, 
	ModalHeader, ModalCloseButton, ModalBody,
	ModalFooter, FormControl, FormLabel, Input,
	NumberInput, NumberInputField, NumberInputStepper,
	NumberIncrementStepper, NumberDecrementStepper
} from '@chakra-ui/react';

import { useEffect, useState } from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators } from '../../state/index';

import { Card } from '../Card';

import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

import { useForm } from 'react-hook-form';

export default function SystemManager() {
	
	const activities = useSelector((state) => state.activities.items);
	const dispatch = useDispatch()

	const { getActivities } = bindActionCreators(
		actionCreators, dispatch
	);

	useEffect(() => getActivities(), []);
	
	const { isOpen, onOpen, onClose } = useDisclosure();
	const initialRef = React.useRef();
  	const finalRef = React.useRef();

	// FORM shit
	const { register, handleSubmit, watch, formState: { errors } } = useForm();
	
	const onSubmit = values => {
		console.log(values);
	};

	// TODO show all the teams, users, nshit
	return (
		<>
		<Grid 
			templateColumns='repeat(3, 1fr)' 
			fontSize='2xl'
			color='white'
		>
			<GridItem>
				<Center bg='urjcRed'>
					Gestionar actividades
				</Center>
				<Center>
				<Button 
					color='black' 
					m={3}
					onClick={onOpen}
				>
					Crear nueva actividad
				</Button>
				</Center>
				<Center>
					<VStack mx={1} mt={1}>
					{activities.map((act) => (
						<Card currentAct={act} />
					))}
					</VStack>
				</Center>
			</GridItem>
			<GridItem>
				<Center bg='urjcRed'>
					Gestionar equipos
				</Center>
				<Center>
					<VStack mx={1} mt={1}>
					{activities.map((act) => (
						<Card currentAct={act} />
					))}
					</VStack>
				</Center>
			</GridItem>
			<GridItem >
				<Center bg='urjcRed'>
					Gestionar usuarios
				</Center>
				<Center>
					<VStack mx={1} mt={1}>
					{activities.map((act) => (
						<Card currentAct={act} />
					))}
					</VStack>
				</Center>
			</GridItem>
		</Grid>
		{/* 
			TODO this should be other component or something
			TODO fix colorschema 
			TODO fix the special inputs
			*/}

		<Modal
			initialFocusRef={initialRef}
			finalFocusRef={finalRef}
			isOpen={isOpen}
			onClose={onClose}
      	>
			<ModalOverlay />
			<ModalContent>
					{/*onSubmit={handleSubmit(onSubmit)}*/}
				<form 
					onSubmit={handleSubmit(onSubmit)}
					action='/api/upload'
					method='POST'
					encType='multipart/form-data'
				>
				<ModalHeader>Añadir nueva actividad</ModalHeader>
				<ModalCloseButton/>
					<ModalBody pb={6}>
						{/* use the argument {required:true} in register*/}
						<FormControl>
							<FormLabel>Nombre de actividad</FormLabel>
							{/*<Input  {...register("eventTitle")} />*/}
						</FormControl>
						<FormControl mt={4}>
							<FormLabel>Descripción</FormLabel>
							{/*<Input {...register("description")} />*/}
						</FormControl>
						<FormControl mt={4}>
							<FormLabel>Imagen</FormLabel>
							<Input 
								type='file' 
								name='eventImg'
								{...register("eventImg", {required: false})} />
						</FormControl>

						{/* errors will return when field validation fails  */}
						{/*errors.exampleRequired && <span>This field is required</span>*/}
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
			</ModalContent>
      	</Modal>
		</>
	)

}
