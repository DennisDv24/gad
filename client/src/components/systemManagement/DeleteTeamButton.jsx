import React from 'react';
import { 
	Button
} from '@chakra-ui/react';

import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { actionCreators } from '../../state/index';

export default function DeleteTeamButton({ team }) {
	
	const dispatch = useDispatch();

	const { deleteTeam } = bindActionCreators(
		actionCreators, dispatch
	);

	function deleteThisTeam()	{
		deleteTeam(team);	
	}

	return (
		<Button 
			w='100%' 
			colorScheme='red' 
			bgColor='urjcRed' 
			onClick={deleteThisTeam}
		>
			Eliminar
		</Button>
	);
}
