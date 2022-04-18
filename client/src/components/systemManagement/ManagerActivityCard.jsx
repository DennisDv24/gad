import React from 'react';
import { 
	Grid, GridItem, Button, useDisclosure, Textarea, Modal, ModalOverlay,
	ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter,
	FormControl, FormLabel, Input, NumberInput, NumberInputField,
	NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper
} from '@chakra-ui/react';

import { Card } from '../Card';
import OptionsList from '../activities/OptionsList';

export default function ManagerActivityCard({ currentAct }) {
	
	const doShit = () => {
		console.log(currentAct);
	};

	const { isOpen, onOpen, onClose } = useDisclosure();
	const initialRef = React.useRef();
  	const finalRef = React.useRef();

	return (
		<>
			<Card currentAct={ currentAct } onClick={()=> {onOpen(); doShit();} }/>
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
							<Button w='100%' colorScheme='red' bgColor='urjcRed'>
								Borrar actividad
							</Button>
						</FormControl>
						<FormControl mt={4}>
							<FormLabel>Equipos</FormLabel>
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


