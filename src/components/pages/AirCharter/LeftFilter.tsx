import React from 'react';
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { filters } from './constants';

const LeftFilter = () => {
    return (
        <div className="left-filter">
            <div className="left-filter__header">
                <h3>Filter By</h3>
            </div>
            <div className="left-filter__content">
                {Object.values(filters).map(({ title, filters }, index) => (
                    <div key={index} className="left-filter__content--radio">
                        <h4>{title}</h4>
                        <FormControl component="fieldset">
                            <RadioGroup
                                aria-label={title}
                                defaultValue={filters[0]}
                                name="radio-buttons-group"
                            >
                                {filters.map((filter, id) => (
                                    <FormControlLabel
                                        key={id}
                                        value={filter}
                                        control={<Radio />}
                                        label={filter}
                                    />
                                ))}
                            </RadioGroup>
                        </FormControl>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LeftFilter;
