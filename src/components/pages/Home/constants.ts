import Plane from '../../../assets/images/plane.jpg';
import CharterCar from '../../../assets/images/charter-car.png'
import Boat from '../../../assets/images/sea-charter.png'


export const flightNumber =  {
    '1': "First",
    '2': "Second",
    '3': "Third",
    '4': "Fourth",
    '5': "Fifth",
    '6': "Sixth",
    '7': "Seventh",
    '8': "Eighth",
    '9': "Ninth",
    '10': "Tenth"
}

export enum CHARTER_TYPE {
    AIR = "AIR",
    LAND = "LAND",
    SEA = "SEA"
}

export const AIR_CHARTER_INFO = {
    name:  'SKY NIGHT 6000',

    price: 168000,
    seats: 12,
    speed: 427,
    range: 1390,
    type: CHARTER_TYPE.AIR,
    image: Plane
}
export const LAND_CHARTER_INFO = {
    ...AIR_CHARTER_INFO,
    name: 'Comodore 101',
    type: CHARTER_TYPE.LAND,
    image: CharterCar
}
export const SEA_CHARTER_INFO = {
    ...AIR_CHARTER_INFO,
    name: 'SPIRIT',
    type: CHARTER_TYPE.SEA,
    image: Boat
}

export const PREMIUM_CHARTER_DATA = [
    ...Array.from([1,2,3,4,5,6], () => AIR_CHARTER_INFO),
    ...Array.from([1,2,3,4,5,6], () => SEA_CHARTER_INFO),
    ...Array.from([1,2,3,4,5,6], () => LAND_CHARTER_INFO),
]


export const DESTINATION = [
    {
        name: "Ikorodu", value: "Ikorodu",
    },
    {
        name: "Agbaara", value: "Agbaara",
    },
    {
        name: "Lagos", value: "Lagos",
    },
]
export const BOAT_TYPE = [
    {
        name: "Speed Boats", value: "Speed Boats",
    },
    {
        name: "Yachts", value: "Yachts",
    },

    
]


export const passengersFilter = [
    {
        id: 1, 
        text: '0-6 Pass.'
    },
    {
        id: 2, 
        text: '6-12 Pass.'
    },
    {
        id: 3, 
        text: '12-20 Pass.'
    },
    {
        id: 4, 
        text: '20+ Pass.'
    },
]

export const charterPriceFilter = [
    {
        id: 1, 
        text: 'Lowest Price'
    },
 
    {
        id: 2, 
        text: 'Medium Price'
    },
    {
        id: 3, 
        text: 'Highest Price'
    },
]


export const mockNotification = [
    {
        id: 1,
        message: 'Your trip payment was Successful',
        date: 'Dec 10, 2021',
        read: false,
    },
    {
        id: 2,
        message: 'N850,000 has been deducted from your wallet.',
        date: 'Dec 10, 2021',
        read: false,
    },
    {
        id: 3,
        message: 'Your wallet has been funded',
        date: 'Dec 10, 2021',
        read: false,
    },
    {
        id: 4,
        message: 'Your trip payment was Successful',
        date: 'Dec 10, 2021',
        read: false,
    },
]