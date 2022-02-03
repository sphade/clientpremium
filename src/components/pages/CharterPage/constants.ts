export const airCraftType = [
    {
        name: 'Private Jet', value: 'Private Jet'
    },
    {
        name: 'Helicopters', value: 'Helicopters'
    },
]
export const landCraftType = [
    {
        name: 'Sedan', value: 'Sedan',
    },
    {
        name: 'Benz', value: 'Benz',
    },
    {
        name: 'Nissan', value: 'Nissan',
    },
    {
        name: 'Others', value: 'Others',
    },
]

export const duration = [
    {
        name: 'Sedan', value: 'Sedan',
    },
    {
        name: 'Benz', value: 'Benz',
    },
    {
        name: 'Nissan', value: 'Nissan',
    },
    {
        name: 'Others', value: 'Others',
    },
]
export const seaTripType = [
    {
        name: 'Boat cruise', value: 'Boat',
    },
    {
        name: 'Boat trip', value: 'Boat trip',
    },
    
]

export const tripType = [
    {
        name: 'Round Trip', value: 'Round Trip'
    },
    {
        name: 'One-way', value: 'One-way'
    },
    {
        name: 'Multi-city', value: 'Multi-city'
    },
]


export const filters = {
    capacity: {
        title: 'Capacity',
        filters: [{
            value: '2-5',
            label: '2-5 Passengers',
            key: 'capacity'
        }, 
        {
                value:'6', 
                label: '6+ passengers',
            key: 'capacity'
        },
        {
                value:'', 
                label: 'All',
                key: 'capacity'
        },
        ],
    },
    prices: {
        title: 'Prices',
        filters: [
            {
                value: '0-45000',
                label: 'Less than N45,000',
                key: 'price'
            },
            {
                value: '45000-65000',
                label: 'N45,000 to N65,000',
                key: 'price'
            },
            {
                value: '65000-85000',
                label: 'N65,000 to N85,000',
                key: 'price'
            },
            {
                value: '85000-100000',
                label: 'N85,000 and more',
                key: 'price'
            },
              {
                value:'', 
                label: 'All',
                key: 'price'
        },
           ],
    },
    year: {
        title: 'Year',
        filters: [
            {
                value: '2015-2016',
                label:'2015-2016',
                key: 'year'
            },
            {
                value:'2016-2017',
                label: '2016-2017',
                key: 'year'
            },
            {
                value:'2017-2018',
                label: '2017-2018',
                key: 'year'
            },
            {
                value: '2018-2019',
                label: '2018-2019',
                key: 'year'
            },
            {
                value: '2019-2020',
                label: '2019-2020',
                key: 'year'
            },
            {
                value: '2020-2021',
                label: '2020-2021',
                key: 'year'
            },
              {
                value:'', 
                label: 'All',
                key: 'year'
        },
            
             ],
    },
}