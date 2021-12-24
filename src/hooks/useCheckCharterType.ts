import {  useParams } from 'react-router-dom';
import { CHARTER_TYPE, PREMIUM_CHARTER_DATA } from '../components/pages/Home/constants';
import { CharterType, } from './types';

const useCheckCharterType = (): {
	charterType: CharterType,
	isLand: boolean,
	isAir: boolean,
	isSea: boolean,
	text: string,
	charterData: { name: string;
		price: number;
		seats: number;
		speed: number;
		range: number;
		type: CHARTER_TYPE;
		image: string}[]
} => {

	const params:  Record<string,string> = useParams();
	
	const type = params?.type

	let charterType = CharterType.AIR

	if (type === 'air') {
		charterType= CharterType.AIR;
	} else if (type === 'land') {
		charterType =	 CharterType.LAND;
	} else {
		charterType = CharterType.SEA;
	}


    const isLand = charterType === CharterType.LAND;
    const isSea = charterType === CharterType.SEA;
    const isAir = charterType === CharterType.AIR;
	const text =  isLand ? 'Car' : isSea ? 'Boat' :  'Jet';

    const charterData = PREMIUM_CHARTER_DATA.filter(
        (data) => data.type.toLowerCase() === charterType.toLowerCase(),
    );

	return {
		charterType,
		isLand,
		isSea,
		isAir,
		charterData,
		text
	}

	//check if the location is association or guarantor
};

export default useCheckCharterType;
