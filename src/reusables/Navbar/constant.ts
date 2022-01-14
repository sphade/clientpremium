import { APP_ROUTES } from '../../routes/path';

import PlaneIcon from '../../assets/images/small-air-icon.png';
import CarIcon from '../../assets/images/small-land-icon.png';
import BoatIcon from '../../assets/images/small-sea-icon.png';
import {ReactComponent as EmptyWallet } from '../../assets/svgs/empty-wallet.svg';
import {ReactComponent as Map } from '../../assets/svgs/map.svg';
import {ReactComponent as GetHelp } from '../../assets/svgs/message-question.svg';
import {ReactComponent as About } from '../../assets/svgs/about.svg';

export const allTravelServices = [
        {
            link: APP_ROUTES.charter('air'),
            name: 'Air charter',
            image: PlaneIcon,
            isLink: true,

        },
        {
            link: APP_ROUTES.charter('sea'),
            name: 'Sea charter',
            image: BoatIcon,
            isLink: true,

        },
        {
            link: APP_ROUTES.charter('land'),
            name: 'Land charter',
            image: CarIcon,
            isLink: true,
        
        },
        {
            link: APP_ROUTES.jetPooling,
            name: 'Jet pooling',
            icon: '',
            isLink: true,

        },
        {
            link: '#top-destinations',
            name: 'Top destinations',
            image: '',
            isLink: false,
        },
        {
            link: '#cruising',
            name: 'Boating activities',
            image: '',
            isLink: false
        },
      
]
export const userProfileMenu = [
    {
        link:  APP_ROUTES.wallet,
        name: 'My Wallet',
        icon: EmptyWallet
    },
        {
            link: APP_ROUTES.trip,
            name: 'My Trips',
            icon: Map
        },
        {
            link: APP_ROUTES.getHelp,
            name: 'Get Help',
            icon: GetHelp
        },
        {
            link: '/',
            name: 'About',
            icon: About
        },
       
       
      
]