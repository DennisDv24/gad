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
	console.log(initialRef);

  	const [startDate, setStartDate] = useState(new Date());

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
				<ModalHeader>Añadir nueva actividad</ModalHeader>
				<ModalCloseButton />
				<ModalBody pb={6}>
					<FormControl>
					  	<FormLabel>Nombre de la actividad</FormLabel>
						<Input ref={initialRef} placeholder='nombre' />
					</FormControl>

					<FormControl mt={4}>
					  	<FormLabel>Descripción</FormLabel>
					  	<Textarea 
							placeholder='descripción' 
						/>
					</FormControl>

					<FormControl mt={4} >
						<Grid templateColumns='repeat(3, 1fr)'>
						<GridItem mr={1}>
							<FormLabel>Plazas</FormLabel>
							<NumberInput defaultValue={30} min={2} max={3000} maxW='100%'>
								<NumberInputField />
								<NumberInputStepper>
									<NumberIncrementStepper />
									<NumberDecrementStepper />
								</NumberInputStepper>
							</NumberInput>
						</GridItem>
						<GridItem mx={1}>
							<FormLabel>Fecha</FormLabel>
							<Input ref={initialRef} placeholder='fecha' />
						</GridItem>
						<GridItem ml={1}>
							<FormLabel>Precio</FormLabel>
							<NumberInput defaultValue={5} min={0} max={1000} maxW='100%'>
								<NumberInputField />
								<NumberInputStepper>
									<NumberIncrementStepper />
									<NumberDecrementStepper />
								</NumberInputStepper>
							</NumberInput>
						</GridItem>
						</Grid>
					</FormControl>


				</ModalBody>

				<ModalFooter>
					<Button colorScheme='red' color='white' bg='urjcRed' mr={3}>
					  Guardar
					</Button>
					<Button onClick={onClose}>Cancelar</Button>
				</ModalFooter>
			</ModalContent>
      	</Modal>
		</>
	)

}
