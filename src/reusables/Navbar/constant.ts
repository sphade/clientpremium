import { ReactComponent as PlaneIcon } from '../../assets/svgs/airplance-menu.svg';
import { ReactComponent as SeaIcon } from '../../assets/svgs/sea-menu.svg';
import { ReactComponent as CarIcon } from '../../assets/svgs/land-menu.svg';
import { APP_ROUTES } from '../../routes/path';

export const allTravelServices = [
        {
            link: APP_ROUTES.charter('air'),
            name: 'Air charter',
            icon: PlaneIcon
        },
        {
            link: APP_ROUTES.charter('sea'),
            name: 'Sea charter',
            icon: SeaIcon
        },
        {
            link: APP_ROUTES.charter('land'),
            name: 'Land charter',
            icon: CarIcon
        },
        {
            link: '',
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