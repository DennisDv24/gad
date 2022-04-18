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

export default function ManagerActivityCard({ currentAct }) {
	
	const dispatch = useDispatch();

	const { deleteActivity } = bindActionCreators(
		actionCreators, dispatch
	);

	const deleteThisAct = () => {
		onClose();
		deleteActivity(currentAct);
	}

	const { isOpen, onOpen, onClose } = useDisclosure();
	const initialRef = React.useRef();
  	const finalRef = React.useRef();

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
				{/*<form 
					onSubmit={handleSubmit(onSubmit)}
				>*/}
				<ModalHeader>Modificar Actividad</ModalHeader>
				<ModalCloseButton/>
					<ModalBody pb={6}>
						<FormControl>
							{/* TODO */}
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
				{/*</form>*/}
			</ModalContent>
      	</Modal>
		</>
	);
}


