import {  useParams } from 'react-router-dom';
import { CharterType } from './types';

const useCheckCharterType = (): CharterType => {

	const params:  Record<string,string> = useParams();
	
	const type = params?.type

	if (type === 'air') {
		return CharterType.AIR;
	} else if (type === 'land') {
		return CharterType.LAND;
	} else {
		return CharterType.SEA;
	}

	//check if the location is association or guarantor
};

export default useCheckCharterType;
