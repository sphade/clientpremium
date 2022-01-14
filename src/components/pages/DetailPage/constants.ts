export const detailBannerSummary = (isLand = false) =>  [
    {
        title: isLand ? 'Rates Per day' : 'Max range',
        value: isLand ? "N120,000" : '6000 nm',
        key: isLand ? 'price' : 'maxRange'
    },
    {
        title: 'Year built',
        value: '2016',
        key: 'year'
    },
    {
        title: 'Cabin Length',
        value: '43 ft 3 in',
        key: 'cabinLength'
    },
    {
        title: isLand ? 'Capacity': 'Guests',
        value: '14',
        key: 'capacity'
    },
    {
        title: 'Baggage capacity',
        value: '1000 lbs',
        key: "baggageCapacity"
    },
]

export const detailSpecifications = {
    performance: {
        title: "Performance",
        content: [
            {
                key: 'Flight hours',
                value: '13:00'
            },
            {
                key: 'Max range',
                value: '6000 nm'
            },
            {
                key: 'Max speed',
                value: '0.89 Mach'
            },
            {
                key: 'Max altitude',
                value: '51,000 ft'
            },
        ]
    },
    interior: {
        title: "Interior",
        content: [
            {
                key: 'Passengers',
                value: `
                14 | 7 sleeping`
            },
         
            {
                key: 'Cabin length',
                value: '43 ft 3 in'
            },
            {
                key: 'Cabin height',
                value: '6 ft 2 in'
            },
            {
                key: 'Cabin width',
                value: '7 ft 11 in'
            },
            {
                key: 'Baggage capacity',
                value: '7 ft 11 in (max)'
            },
           
        ]
    },
}


export const specifications = {
    performance: [
        {
            key: "flight hours",
            value: '13:00'
        },
        {
            key: "max Range ",
            value: '6000 nm'
        },
        {
            key: "max speed",
            value: '0.89 Mach'
        },
        {
            key: "Max altitude",
            value: '51,000 ft'
        },
    ],
    interior: [
        {
            key: "passengers",
            value: '14 | 7 sleeping'
        },
        {
            key: "cabin length",
            value: '43 ft 3 in'
        },
        {
            key: "cabin height",
            value: '6 ft 2 in'
        },
        {
            key: "Max altitude",
            value: '6 ft 2 in'
        },
    ],
    others: [
        {
            key: "baggage capacity",
            value: '195 ft³ | 1000 lbs (max)'
        },
        
    ],

}