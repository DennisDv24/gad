import React from 'react';
import { 
	Grid, GridItem, Button, useDisclosure, Textarea, Modal, ModalOverlay,
	ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter,
	FormControl, FormLabel, Input, NumberInput, NumberInputField,
	NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper
} from '@chakra-ui/react';

import { Card } from '../Card';
import OptionsList from '../activities/OptionsList';

import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { actionCreators } from '../../state/index';

import { useForm } from 'react-hook-form';

import FileUpload from '../activities/FileUpload';

export default function ManagerActivityCard({ currentAct }) {
	
	const dispatch = useDispatch();

	const { deleteActivity,  updateActivity} = bindActionCreators(
		actionCreators, dispatch
	);

	const deleteThisAct = () => {
		onClose();
		deleteActivity(currentAct);
	}

	const { isOpen, onOpen, onClose } = useDisclosure();
	const initialRef = React.useRef();
  	const finalRef = React.useRef();

	const {
		handleSubmit,
		register,
		control
	} = useForm();

	const onSubmit = values => {
		
		let updatedAct = {};
		for(const prop in currentAct) {
			if(values[prop] === undefined || values[prop] === "") {
				updatedAct[prop] = currentAct[prop]
			} else {
				updatedAct[prop] = values[prop]
			}
		}
		
		updateActivity(updatedAct);		
		onClose();
	};

	return (
		<>
		<Card currentAct={ currentAct } onClick={onOpen} />
		<Modal
			initialFocusRef={initialRef}
			finalFocusRef={finalRef}
			isOpen={isOpen}
			onClose={onClose}
      	>
			<ModalOverlay />
			<ModalContent>
				<form 
					onSubmit={handleSubmit(onSubmit)}
				>
				<ModalHeader>Modificar Actividad</ModalHeader>
				<ModalCloseButton/>
					<ModalBody pb={6}>
						<FormControl>
							<FormLabel >Nombre de actividad</FormLabel>
							<Input defaultValue={currentAct.eventTitle} {...register("eventTitle")} />
						</FormControl>
						<FormControl mt={4}>
							<FormLabel>Descripción</FormLabel>
							<Textarea defaultValue={currentAct.description}
								{...register('description')}
							/>
						</FormControl>
						{/* TODO it should delete the old image and post the new one*/}
						<FormControl mt={4} >
							<Grid templateColumns='repeat(3, 1fr)'>
							<GridItem mr={1}>
								<FormLabel>Plazas</FormLabel>
								<NumberInput 
									defaultValue={currentAct.maxEntries} 
									min={2} 
									max={3000} 
									maxW='100%'
								>
									<NumberInputField {...register("maxEntries")}/>
									<NumberInputStepper>
										<NumberIncrementStepper />
										<NumberDecrementStepper />
									</NumberInputStepper>
								</NumberInput>
							</GridItem>
							<GridItem mx={1}>
								<FormLabel>Fecha</FormLabel>
								<Input 
									defaultValue={currentAct.date}
									ref={initialRef} 
									placeholder='fecha'
									{...register('date')}
								/>
							</GridItem>
							<GridItem ml={1}>
								<FormLabel>Precio</FormLabel>
								<NumberInput 
									defaultValue={currentAct.price} 
									min={0} 
									max={1000} 
									maxW='100%'
								>
									<NumberInputField {...register('price')}/>
									<NumberInputStepper>
										<NumberIncrementStepper />
										<NumberDecrementStepper />
									</NumberInputStepper>
								</NumberInput>
							</GridItem>
							</Grid>
						</FormControl>
						<FormControl pt={4}>
							<Button 
								type='submit'
								w='100%' 
							>
								Confirmar cambios
							</Button>
						</FormControl>
						<FormControl pt={4}>
							<Button 
								w='100%' 
								colorScheme='red' 
								bgColor='urjcRed'
								onClick={deleteThisAct}
							>
								Borrar actividad
							</Button>
						</FormControl>
					</ModalBody>
				<ModalHeader>Equipos</ModalHeader>
					<ModalBody>
						<FormControl>
							<OptionsList id={currentAct._id} isManaging />
						</FormControl>
					</ModalBody>
				<ModalFooter>
					<Button onClick={onClose}>Cancelar</Button>
				</ModalFooter>
				</form>
			</ModalContent>
      	</Modal>
		</>
	);
}


