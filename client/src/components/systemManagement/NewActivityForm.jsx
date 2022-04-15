import React from 'react';
import { useForm } from 'react-hook-form';
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

export default function NewActivityForm() {

	const { isOpen, onOpen, onClose } = useDisclosure();
	const initialRef = React.useRef();
  	const finalRef = React.useRef();

	const { register, handleSubmit, watch, formState: { errors } } = useForm();
	const onSubmit = values => {
		console.log(values);
	};

	return (
		<>
			<ModalOverlay />
			<ModalContent>
				<form onSubmit={handleSubmit(onSubmit)}>
				<ModalHeader>Añadir nueva actividad</ModalHeader>
				<ModalCloseButton/>
					<ModalBody>
						<input defaultValue="test" {...register("example")} />
						<input {...register("exampleRequired", { required: true })} />

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
		</>
	);

} 
