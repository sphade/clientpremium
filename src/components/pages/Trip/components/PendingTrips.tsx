import React from 'react'
import { PrimarySelect } from '../../../../reusables'
import { ReactComponent as NavigatorIcon } from '../../../../assets/svgs/navigator.svg'
import { ReactComponent as ArrowRight } from '../../../../assets/svgs/arrow-circle-right.svg'



export const tripType = [
    {
        name: 'All', value: 'All'
    },
    {
        name: 'Land', value: 'Land'
    },
    {
        name: 'Sea', value: 'Sea'
    },
    {
        name: 'Air', value: 'Air'
    },
]
const PendingTrips = () => {
    return (
        <div className="pending__container">
             <PrimarySelect
                        fullWidth={false}
                         name="tripType"
                         options={tripType}
                    />
        { [1,2,3,4].map((index) => ((
                <div className="pending__trips"  key={index}>
                    <NavigatorIcon className="navigator" />
                    <div className="pending__trips--content">
                        <h3>Murtala Muhammed Airport (Lagos)</h3>
                        <p>25 Dec 2021   04:00pm</p>
                        <p>N 600,000</p>
                    </div>
                    <ArrowRight className="arrow-right" />
                    </div>
                
            )))}
            </div>
    )
}

export default PendingTrips

