import Plane from '../../../assets/images/plane.jpg';
import CharterCar from '../../../assets/images/charter-car.png'
import Boat from '../../../assets/images/sea-charter.png'


export enum CHARTER_TYPE {
    AIR = "AIR",
    LAND = "LAND",
    SEA = "SEA"
}

export const AIR_CHARTER_INFO = {
    name: 'Comodore 101',
    price: 168000,
    seats: 12,
    speed: 427,
    range: 1390,
    type: CHARTER_TYPE.AIR,
    image: Plane
}
export const LAND_CHARTER_INFO = {
    ...AIR_CHARTER_INFO,
    type: CHARTER_TYPE.LAND,
    image: CharterCar
}
export const SEA_CHARTER_INFO = {
    ...AIR_CHARTER_INFO,
    type: CHARTER_TYPE.SEA,
    image: Boat
}




export const PREMIUM_CHARTER_DATA = [
    ...Array.from([1,2,3,4,5,6], () => AIR_CHARTER_INFO),
    ...Array.from([1,2,3,4,5,6], () => SEA_CHARTER_INFO),
    ...Array.from([1,2,3,4,5,6], () => LAND_CHARTER_INFO),
]