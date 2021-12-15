import { APP_ROUTES } from '../../routes/path';

import PlaneIcon from '../../assets/images/small-air-icon.png';
import CarIcon from '../../assets/images/small-land-icon.png';
import BoatIcon from '../../assets/images/small-sea-icon.png';

export const allTravelServices = [
        {
            link: APP_ROUTES.charter('air'),
            name: 'Air charter',
            image: PlaneIcon,
        },
        {
            link: APP_ROUTES.charter('sea'),
            name: 'Sea charter',
            image: BoatIcon,
        },
        {
            link: APP_ROUTES.charter('land'),
            name: 'Land charter',
            image: CarIcon,
        },
        {
            link: APP_ROUTES.jetPooling,
            name: 'Jet pooling',
            icon: ''
        },
        {
            link: '',
            name: 'Empty legs',
            icon: ''
        },
        {
            link: '',
            name: 'Top destinations',
            icon: ''
        },
        {
            link: '',
            name: 'Boating activities',
            icon: ''
        },
      
]
export const userProfileMenu = [
        {
            link: '',
            name: 'Profile',
            icon: ''
        },
        {
            link: '',
            name: 'Settings',
            icon: ''
        },
        {
            link: '',
            name: 'Logout',
            icon: ''
        },
       
      
]