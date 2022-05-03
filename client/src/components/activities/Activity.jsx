import React from "react";
import { useEffect } from 'react';

import Inscription from './Inscription';
import OptionsList from './OptionsList';
import ActivityInfo from './ActivityInfo';

import { useParams } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state/index';
import NotFound from '../../NotFound';

export default function Activity() {

	const { id } = useParams();

	const currentAct = useSelector((state) => state.activities.currentItem);
	const dispatch = useDispatch()

	const { getActivity } = bindActionCreators(
		actionCreators, dispatch
	)
	useEffect(() => getActivity(id), [id]);
	
	//if(currentAct !== null)
		return (
			<>
				<Inscription />
				<ActivityInfo />
				<OptionsList id={id}/>
			</>
		);
	//else return <NotFound />

}

